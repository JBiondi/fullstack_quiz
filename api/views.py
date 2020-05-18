import json
from django.http import HttpResponse
from fullstack_quiz.models import Prompt
from fullstack_quiz.models import HighScore
from .serializers import PromptSerializer


def quiz_selection_handler_view(request, selected_quiz_id=None):
    prompts_queryset = Prompt.objects.filter(associated_quiz_id=selected_quiz_id).order_by('prompt_id')
    prompts_array = []

    for prompt in prompts_queryset:
        prompts_array.append(PromptSerializer(prompt).data)

    json_prompts = json.dumps(prompts_array)

    request.session['current quiz id'] = selected_quiz_id

    return HttpResponse(json_prompts, content_type='application/json')


def receive_user_score_view(request, user_correct_score=None):
    # Should I change this to only accept POST requests instead of having this conditional statement?
    if request.method == 'POST':

        current_quiz = request.session['current quiz id']
        current_user = HighScore(user_correct_score=user_correct_score, associated_quiz_id=current_quiz)
        current_user.save()

        current_user_id = current_user.high_score_id

        request.session['current ID'] = current_user_id

        json_current_user_id = json.dumps(current_user_id)

        return HttpResponse(json_current_user_id, content_type='application/json')

