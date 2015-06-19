from django import forms
from ct_app.models import Problem

class SubmitForm(forms.ModelForm):
    '''
    Not needed due to use of CreateView.
    '''
    class Meta:
        model = Problem
        fields = ["name", "age", "problem"]
        
class FilterForm(forms.Form):
    choices = (("", "All"),) + Problem.CHOICES
    category = forms.ChoiceField(choices = choices, widget = forms.RadioSelect(attrs = {"class": "category_radio",}))