from django.contrib import admin

from .models import Quiz
from .models import Prompt
from .models import HighScore

admin.site.register(Quiz)
admin.site.register(Prompt)
admin.site.register(HighScore)
