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
        fields = ('prompt_text', 'incorrect_answer1', 'incorrect_answer2', 'incorrect_answer3',
                  'correct_answer', 'answer_text')
