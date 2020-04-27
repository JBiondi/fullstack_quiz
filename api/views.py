import json

from django.http import HttpResponse
from django.shortcuts import render

from fullstack_quiz.forms import DisplayNameForm
from fullstack_quiz.models import Prompt
from .serializers import PromptSerializer


def quiz_selection_handler_view(request, selected_quiz_id=None):

    prompts_queryset = Prompt.objects.filter(quiz_id=selected_quiz_id).order_by('prompt_id')

    prompts_array = []
    for prompt in prompts_queryset:
        prompts_array.append(PromptSerializer(prompt).data)

    json_prompts = json.dumps(prompts_array)

    return HttpResponse(json_prompts, content_type='application/json')


def high_score_page_view(request):
    if request.method == 'POST':
        form = DisplayNameForm(request.POST)

        if form.is_valid():
            form.save()
        return render(request, 'frontend/highscores.html')

    form = DisplayNameForm()

    context = {'form': form}
    return render(request, 'frontend/highscores.html', context)
