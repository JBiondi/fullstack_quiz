from django.urls import path
from . import views


urlpatterns = [
    path('', views.frontend_home_view),
    path('choose-display-name', views.display_name_form_view, name='display_name_view_namespace'),
]