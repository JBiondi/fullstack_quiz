from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Quiz
from .models import QuizUser

admin.site.register(Quiz)
admin.site.register(QuizUser)
