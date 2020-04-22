from django.urls import path

from .views import quiz_selection_handler_view


urlpatterns = [
    path('quiz_selection_api_endpoint/<int:selected_quiz_id>/', quiz_selection_handler_view),
]
