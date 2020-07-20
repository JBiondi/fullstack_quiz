from django.shortcuts import render
from fullstack_quiz.forms import DisplayNameForm
from fullstack_quiz.models import HighScore


def frontend_home_view(request):
    if request.method == 'POST':

        # current_attempt = HighScore.objects.get(pk=request.session['current attempt ID'])
        current_attempt = HighScore.objects.order_by('-high_score_id').first()
        print(f'my cool current_attempt: {current_attempt}')
        current_quiz = current_attempt.associated_quiz_id

        form = DisplayNameForm(request.POST, instance=current_attempt)

        if form.is_valid():
            form.save()

        highscores_queryset = HighScore.objects.filter(associated_quiz_id=current_quiz).order_by('-user_correct_score')

        quiz_topic = current_attempt.get_associated_quiz_topic()

        context = {'highscores': highscores_queryset, 'quiz_topic': quiz_topic}

        return render(request, 'frontend/highscores.html', context)

    form = DisplayNameForm()
    context = {'form': form}

    return render(request, 'frontend/index.html', context)
