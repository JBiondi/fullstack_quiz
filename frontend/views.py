from django.shortcuts import render


def frontend_home_view(request):
    print('pomegranate')
    return render(request, 'frontend/index.html')


def video_game_quotes_view(request):
    print('apricot')
    return render(request, 'frontend/video_game_quotes_quiz_page.html')


def programming_quiz_view(request):
    print('tangerine')
    return render(request, 'frontend/programming_quiz_page.html')
