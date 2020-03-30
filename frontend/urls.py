from django.urls import path
from . import views


urlpatterns = [
    path('', views.frontend_home_view),
    path('quiz', views.quiz_view, name='quiz_view_namespace'),
    path('choose-display-name', views.display_name_form_view, name='display_name_view_namespace'),
]