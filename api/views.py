from django.shortcuts import render
from rest_framework import generics

from fullstack_quiz.models import Quiz
from .serializers import QuizSerializer


class QuizAPIView(generics.ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

