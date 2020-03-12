from django.shortcuts import render


def frontend_home_view(request):
    print('pomegranate')
    return render(request, 'frontend/index.html')


def quiz_view(request):
    print('strawberry')
    return render(request, 'frontend/quiz.html')
