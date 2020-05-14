import json

from django.http import HttpResponse
from django.shortcuts import render

from fullstack_quiz.models import Prompt
from fullstack_quiz.models import HighScore

from .serializers import PromptSerializer


def quiz_selection_handler_view(request, selected_quiz_id=None):

    prompts_queryset = Prompt.objects.filter(quiz_id=selected_quiz_id).order_by('prompt_id')

    prompts_array = []
    for prompt in prompts_queryset:
        prompts_array.append(PromptSerializer(prompt).data)

    json_prompts = json.dumps(prompts_array)

    return HttpResponse(json_prompts, content_type='application/json')


def receive_user_score_view(request, user_correct_score=None):
    if request.method == 'POST':
        print(user_correct_score)

        current_user = HighScore(user_correct_score=user_correct_score)
        current_user.save()

        print(current_user)

        current_id = current_user.high_score_id

        request.session['current ID'] = current_id

        json_current_id = json.dumps(current_id)

        return HttpResponse(json_current_id, content_type='application/json')


# def high_score_page_view(request):
#
#     return render(request, 'frontend/highscores.html', {'highscores': evaluated_highscores})
