from django.shortcuts import render
from django.views.generic import ListView

from .models import Quiz


class QuizListView(ListView):
    model = Quiz
    template_name = 'quiz_list.html'
