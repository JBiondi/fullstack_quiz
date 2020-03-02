from django.urls import path

from .views import QuizListView
from .views import home_view


urlpatterns = [
    path('', home_view),
    path('list_of_quizzes_as_web_page', QuizListView.as_view()),
]