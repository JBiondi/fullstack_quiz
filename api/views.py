from rest_framework import generics
from rest_framework.decorators import api_view

from fullstack_quiz.models import Quiz
from .serializers import QuizSerializer


@api_view(['POST'])
def quiz_selection_handler_view(request):
    print(request.body)


# A read only endpoint for all quiz instances
class QuizAPIView(generics.ListAPIView):
    # Query the database for all existing quizzes
    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer

