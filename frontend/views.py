from django.shortcuts import render
from fullstack_quiz.forms import DisplayNameForm
from fullstack_quiz.models import HighScore


def frontend_home_view(request):
    if request.method == 'POST':

        current_profile = HighScore.objects.get(pk=request.session['current ID'])

        form = DisplayNameForm(request.POST, instance=current_profile)

        if form.is_valid():
            form.save()
        return render(request, 'frontend/highscores.html')

    form = DisplayNameForm()

    context = {'form': form}
    return render(request, 'frontend/index.html', context)


