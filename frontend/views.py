from django.shortcuts import render
from django.shortcuts import redirect

from fullstack_quiz.forms import DisplayNameForm
from fullstack_quiz.models import QuizUser
from fullstack_quiz.logic import prompts_list


def frontend_home_view(request):
    print('pomegranate')
    return render(request, 'frontend/index.html')


def display_name_form_view(request):
    print('cherry')

    if request.method == 'POST':
        form = DisplayNameForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('quiz_view_namespace')

    else:
        form = DisplayNameForm

    return render(request, 'frontend/choose-display-name.html', {
        'form': form
    })


def quiz_view(request):
    for prompt in prompts_list:
        print(prompt.prompt_text)

    return render(request, 'frontend/quiz.html')

