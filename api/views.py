import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from fullstack_quiz.models import Prompt
from fullstack_quiz.models import HighScore
from .serializers import PromptSerializer


def quiz_selection_handler_view(request, selected_quiz_id=None):
    prompts_queryset = Prompt.objects.filter(associated_quiz_id=selected_quiz_id).order_by('prompt_id')
    prompts_array = []

    for prompt in prompts_queryset:
        prompts_array.append(PromptSerializer(prompt).data)

    json_prompts = json.dumps(prompts_array)

    request.session['current quiz ID'] = selected_quiz_id
    request.session.modified = True

    return HttpResponse(json_prompts, content_type='application/json')


@csrf_exempt
def receive_user_score_view(request, user_correct_score=None, quiz_id=None):
    if request.method == 'POST':

        current_quiz = quiz_id
        current_attempt = HighScore(user_correct_score=user_correct_score, associated_quiz_id=current_quiz)
        current_attempt.save()

        current_attempt_id = current_attempt.high_score_id
        request.session['current attempt ID'] = current_attempt_id
        json_current_attempt_id = json.dumps(current_attempt_id)

        return HttpResponse(json_current_attempt_id, content_type='application/json')
