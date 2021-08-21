from django import forms

from .validators import validate_plate


class CarRegistrationForm(forms.Form):
    plate = forms.CharField(max_length=6, validators=[validate_plate, ], required=True)
