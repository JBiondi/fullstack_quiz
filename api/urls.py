from django.urls import path

from .views import quiz_selection_handler_view
from .views import display_name_form_view


urlpatterns = [
    path('quiz_selection_api_endpoint/<int:selected_quiz_id>/', quiz_selection_handler_view),
    # path('display_name_form_api_endpoint', display_name_form_view, name='display_name_view_namespace'),
]
