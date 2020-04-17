from django.shortcuts import render
from django.shortcuts import redirect

from fullstack_quiz.forms import DisplayNameForm


def frontend_home_view(request):
    print('pomegranate')
    return render(request, 'frontend/index.html')


def display_name_form_view(request):
    print('cherry')

    if request.method == 'POST':
        form = DisplayNameForm(request.POST)
        if form.is_valid():
            form.save()
            # Make this redirect to high score board instead
            return redirect('quiz_view_namespace')

    else:
        form = DisplayNameForm

    return render(request, 'frontend/choose-display-name.html', {
        'form': form
    })

