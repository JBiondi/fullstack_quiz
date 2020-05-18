from django.shortcuts import render
from fullstack_quiz.forms import DisplayNameForm
from fullstack_quiz.models import HighScore
from fullstack_quiz.models import Quiz


def frontend_home_view(request):
    if request.method == 'POST':

        current_profile = HighScore.objects.get(pk=request.session['current ID'])
        current_quiz = current_profile.associated_quiz_id

        form = DisplayNameForm(request.POST, instance=current_profile)

        if form.is_valid():
            form.save()

        highscores_qs = HighScore.objects.filter(associated_quiz_id=current_quiz).order_by('-user_correct_score')


        display_names = [item.display_name for item in highscores_qs]
        print(display_names)

        scores = [item.user_correct_score for item in highscores_qs]
        print(scores)

        percents = [item.cool_method() for item in highscores_qs]
        print(percents)

        context = {'highscores': highscores_qs}

        return render(request, 'frontend/highscores.html', context)

    form = DisplayNameForm()

    context = {'form': form}

    return render(request, 'frontend/index.html', context)


