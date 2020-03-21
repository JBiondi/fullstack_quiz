from django.shortcuts import render
from fullstack_quiz.forms import DisplayNameForm


def frontend_home_view(request):
    print('pomegranate')
    return render(request, 'frontend/index.html')


def display_name_selection_view(request):
    print('cherry')

    if request.method == 'POST':
        # our form will be an instance of the DisplayNameForm class that we created
        form = DisplayNameForm
        if form.is_valid():
            print('VALID')
            form.save()

    return render(request, 'frontend/choose-display-name.html')


def quiz_view(request):
    print('strawberry')
    return render(request, 'frontend/quiz.html')

