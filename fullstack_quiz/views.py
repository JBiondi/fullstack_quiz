from django.shortcuts import render
from django.views.generic import ListView
from rest_framework.response import Response
from rest_framework import serializers

from .models import Quiz


class QuizListView(ListView):

    def get_queryset(self):
        print('banana')
        return Quiz.objects.all()


def home_view(request):
    print('mango')
    return render(request, 'fullstack_quiz/home.html')


