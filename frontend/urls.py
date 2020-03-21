from django.urls import path
from . import views


urlpatterns = [
    path('', views.frontend_home_view),
    path('quiz', views.quiz_view),
    path('choose-display-name', views.display_name_selection_view),
]