from django.urls import path

from .views import QuizAPIView


urlpatterns = [
    path('', QuizAPIView.as_view()),
]