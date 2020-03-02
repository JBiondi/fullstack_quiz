from django.contrib import admin
from django.urls import path
from django.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('fullstack_quiz.urls')),
    path('api/', include('api.urls')),
]
