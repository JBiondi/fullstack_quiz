from django.shortcuts import render


def frontend_home_view(request):
    print('pomegranate')
    return render(request, 'frontend/index.html')
