from django.contrib import admin
from django.urls import path
from django.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),

    # Rest framework urls
    path('api/fullstack_quiz/', include('fullstack_quiz.api.urls', 'fullstack_quiz_api')),
    path('create/', include('fullstack_quiz.api.urls', 'fullstack_quiz'))
]
