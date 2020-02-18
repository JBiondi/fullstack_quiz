from rest_framework import serializers

from fullstack_quiz.models import Quiz


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('quiz_topic',)
