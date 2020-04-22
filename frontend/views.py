from django.shortcuts import render
from fullstack_quiz.forms import DisplayNameForm


def frontend_home_view(request):
    print('pomegranate')
    if request.method == 'POST':
        form = DisplayNameForm(request.POST)

        if form.is_valid():
            form.save()
        return

    form = DisplayNameForm()

    context = {'form': form}
    return render(request, 'frontend/index.html', context)


