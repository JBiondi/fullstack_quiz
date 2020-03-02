from rest_framework import generics

from fullstack_quiz.models import Quiz
from .serializers import QuizSerializer


# A read only endpoint for all quiz instances
class QuizAPIView(generics.ListAPIView):
    # Query the database for all existing quizzes
    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer

