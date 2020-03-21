from django import forms

from .models import QuizUser


class DisplayNameForm(forms.ModelForm):

    class Meta:
        model = QuizUser
        fields = ['display_name']
