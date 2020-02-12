from django.urls import path

from fullstack_quiz.api.views import api_detail_quiz_view


app_name = 'fullstack_quiz'

urlpatterns = [
    path('<slug>/', api_detail_quiz_view, name='detail'),
]