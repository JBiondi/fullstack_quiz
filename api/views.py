from django.http import HttpResponse
from rest_framework import generics

from fullstack_quiz.models import Quiz
from .serializers import QuizSerializer

import json


def quiz_selection_handler_view(request):
    body = json.loads(request.body.decode('utf-8'))
    selected_quiz = body.get('selected_quiz_id')
    print(selected_quiz)
    return HttpResponse()


# A read only endpoint for all quiz instances
class QuizAPIView(generics.ListAPIView):
    # Query the database for all existing quizzes
    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer

