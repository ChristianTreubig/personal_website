from django.shortcuts import render
#from ct_app.forms import SubmitForm
from ct_app.models import Problem
from django.views.generic.edit import CreateView
from django.views.generic.detail import DetailView
from django.core.urlresolvers import reverse_lazy
from django.forms.widgets import RadioSelect, Textarea
from ct_app.helpers import page_this
from ct_app.forms import FilterForm
from ratelimit.mixins import RatelimitMixin

def home(request):
    problems = Problem.objects.filter(active = True)
    form = FilterForm(request.GET)
    if form.is_valid():
        if form.cleaned_data["category"] != "": #Using "and" causes errors in some odd edge cases.
            problems = problems.filter(category = form.cleaned_data["category"])
    else:
        form = FilterForm()
    try:
        page = int(request.GET.get("page", 1))
    except:
        page = 1
    problems = page_this(problems, page, 5)
    if request.is_ajax():
        base_template = "ct_app/home_problems_dummy.html"
    else:
        base_template = "ct_app/home.html"
    return render(request,
                  "ct_app/home_problems_ajax.html",
                  {"base_template": base_template,
                   "problems": problems,
                   "form": form,})
    
class ProblemCreate(RatelimitMixin, CreateView):
    ratelimit_key = lambda req: req.META.get('HTTP_X_REAL_IP', req.META['REMOTE_ADDR']) #Test in Prod
    ratelimit_rate = '10/d'
    ratelimit_block = True
    ratelimit_method = 'POST'
    
    model = Problem
    fields = ["name", "age", "location", "category", "problem"]
    template_name = "ct_app/submit.html"
    success_url = reverse_lazy("submit_done")
    
    def get_form(self, form_class):
        form = super(ProblemCreate, self).get_form(form_class)
        form.fields['name'].label = "Blank Space (write your name)"
        form.fields['category'].widget = RadioSelect(choices = Problem.CHOICES)
        form.fields['problem'].widget = Textarea(attrs = {'maxlength': Problem._meta.get_field('problem').max_length})
        #form.fields['date_field'].widget.attrs.update({'class': 'datepicker'}) ... alternative manner to update widget
        form.fields['problem'].label = "Describe your problem"
        return form
    
def submit_done(request):
    return render(request,
                  "ct_app/submit_done.html")
    
class ProblemDetailView(DetailView):
    model = Problem
    template_name = "ct_app/problem_detail.html"
    
    def get_queryset(self):
        qs = super(ProblemDetailView, self).get_queryset()
        return qs.filter(active=True)
    
def mission(request):
    return render(request,
                  "ct_app/mission.html")
    
def limited(request, exception):
    return render(request,
                  "ct_app/limited.html")