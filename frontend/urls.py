from django.urls import path
from . import views


urlpatterns = [
    path('', views.frontend_home_view),
    path('highscores', views.frontend_home_view)
]