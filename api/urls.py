from django.urls import path

from .views import QuizAPIView
from .views import quiz_selection_handler_view


urlpatterns = [
    path('quiz_selection_api_endpoint/<int:selected_quiz_id>/', quiz_selection_handler_view),
    # path('list_of_quizzes_as_api_endpoint', QuizAPIView.as_view()),
]
