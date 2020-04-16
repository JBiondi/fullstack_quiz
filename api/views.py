import json

from django.http import HttpResponse
from django.http import HttpRequest
from rest_framework import generics

from fullstack_quiz.models import Quiz
from fullstack_quiz.models import Prompt
from .serializers import QuizSerializer
from .serializers import PromptSerializer


def quiz_selection_handler_view(request: HttpRequest, selected_quiz_id=None):

    prompts_queryset = Prompt.objects.filter(quiz_id=selected_quiz_id).order_by('prompt_id')

    prompts_array = []
    for prompt in prompts_queryset:
        prompts_array.append(PromptSerializer(prompt).data)

    json_prompts = json.dumps(prompts_array)

    return HttpResponse(json_prompts, content_type='application/json')







# A read only endpoint for all quiz instances
class QuizAPIView(generics.ListAPIView):

    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer

