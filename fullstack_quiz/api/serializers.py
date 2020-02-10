from rest_framework import serializers
from fullstack_quiz.models import Quiz


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        # add quiz_image to the fields array once implemented
        fields = ['quiz_topic']
