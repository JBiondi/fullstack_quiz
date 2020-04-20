from rest_framework import serializers

from fullstack_quiz.models import Quiz
from fullstack_quiz.models import Prompt


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('quiz_topic',)


class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompt
        fields = ('prompt_text', 'answer0', 'answer1', 'answer2', 'answer3',
                  'correct_choice', 'answer_text')
