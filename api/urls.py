from django.urls import path

from .views import quiz_selection_handler_view
from .views import receive_user_score_view


urlpatterns = [
    path('quiz_selection_api_endpoint/<int:selected_quiz_id>/', quiz_selection_handler_view),
    path('receive_user_score_api_endpoint/<int:user_correct_score>/<int:quiz_id>/', receive_user_score_view)
]
