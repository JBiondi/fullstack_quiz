from django.contrib import admin

from .models import Quiz
from .models import QuizUser
from .models import Prompt

admin.site.register(Quiz)
admin.site.register(QuizUser)
admin.site.register(Prompt)
