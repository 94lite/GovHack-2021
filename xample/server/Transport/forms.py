from django import forms


class CarbonPointCalculateForm(forms.Form):
    distance = forms.FloatField(min_value=0.0, required=True)
