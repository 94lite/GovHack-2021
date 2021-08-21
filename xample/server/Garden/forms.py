from django import forms

from .models import UserTree


class TreeCreationForm(forms.ModelForm):
    class Meta:
        model = UserTree
        fields = ("name", "description", "tree_type", )
