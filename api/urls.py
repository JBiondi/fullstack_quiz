from django.urls import path

from .views import QuizAPIView
from .views import quiz_selection_handler_view


urlpatterns = [
    path('list_of_quizzes_as_api_endpoint', QuizAPIView.as_view()),
    path('quiz_selection_api_endpoint/', quiz_selection_handler_view)
]
