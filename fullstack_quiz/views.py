from django.http import HttpRequest
from django.shortcuts import render
from django.views.generic import ListView
from rest_framework.response import Response
from rest_framework import serializers

from .models import Quiz


def quiz_selection_view(request):
    print('pear')
    if request.method == 'POST':
        print('blueberry')
        relevant_quiz_id = request.great_variable_name
        return relevant_quiz_id


class QuizListView(ListView):

    def get_queryset(self):
        print('banana')
        return Quiz.objects.all()

# Not using this anymore because we're using the frontend app's home view now
# def home_view(request: HttpRequest):
#     print('mango')
#     return render(request, 'fullstack_quiz/home.html')


