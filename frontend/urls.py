from django.urls import path
from . import views


urlpatterns = [
    path('', views.frontend_home_view),
    path('video_game_quotes_quiz_page', views.video_game_quotes_view),
    path('programming_quiz_page', views.programming_quiz_view),
]