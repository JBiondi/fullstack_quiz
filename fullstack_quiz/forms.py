from django import forms
from .models import HighScore


class DisplayNameForm(forms.ModelForm):

    class Meta:
        model = HighScore
        fields = ['display_name']
