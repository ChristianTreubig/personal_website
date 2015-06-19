from django.contrib import admin
from ct_app.models import Problem, Image
from django.contrib.admin import AdminSite

class ProblemAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_submit', 'active', "date_solve")
    list_filter = ["active"]
    #readonly_fields = ('date_submit',)
    readonly_fields = ('name', 'age', 'location', 'category', 'date_submit', 'problem')
    fieldsets = [
        ("User Submission", {'fields': ['name', 'age', 'location', 'category', 'date_submit', 'problem']}),
        ("Solution", {'fields': ["solution", "date_solve", "active"]})
    ]
    ordering = ("-date_solve" , "-date_submit",)
    
    def change_view(self, request, object_id, form_url='', extra_context=None):
        extra_context = extra_context or {}
        extra_context['images'] = Image.objects.all()
        #extra_context['host'] = request.get_host()
        return super(ProblemAdmin, self).change_view(request, object_id,
            form_url, extra_context=extra_context)
    
class MyAdminSite(AdminSite):
    site_header = 'ChristianTreubig.com administration'

admin_site = MyAdminSite(name='admin')
admin_site.register(Problem, ProblemAdmin)
admin_site.register(Image)