from django.urls import path

from .views import QuizAPIView


urlpatterns = [
    path('list_of_quizzes_as_api_endpoint/', QuizAPIView.as_view()),
]