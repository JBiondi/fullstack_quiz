import json

from django.http import HttpResponse
from django.http import HttpRequest
from rest_framework import generics

from fullstack_quiz.models import Quiz
from fullstack_quiz.models import Prompt
from .serializers import QuizSerializer


def quiz_selection_handler_view(request: HttpRequest, relevant_quiz_id=None):
    print(request.content_type)
    print(f'Relevant quiz ID: {relevant_quiz_id}')
    # my_query = request.GET.get(relevant_quiz_id, 'cant find arg1')
    # print(my_query)
    # selected_quiz_id =
    # print(selected_quiz_id)

    # prompts_queryset = Prompt.objects.filter(quiz_id=selected_quiz_id).order_by('prompt_id')
    # prompts_array = list(prompts_queryset)
    # print(prompts_array)

    return HttpResponse('not sure what to put here', content_type='application/json')







# A read only endpoint for all quiz instances
class QuizAPIView(generics.ListAPIView):

    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer

