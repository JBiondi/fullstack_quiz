from django.db import models
from django.utils import timezone


class Quiz(models.Model):
    quiz_id = models.AutoField(primary_key=True)
    quiz_topic = models.CharField(max_length=50)


class Question(models.Model):
    question_id = models.AutoField(primary_key=True)
    quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
    question_text = models.TextField()
    incorrect_answer1 = models.CharField(max_length=50)
    incorrect_answer2 = models.CharField(max_length=50)
    incorrect_answer3 = models.CharField(max_length=50)
    correct_answer = models.CharField(max_length=50)


class QuizUser(models.Model):
    user_id = models.AutoField(primary_key=True)
    display_name = models.CharField(max_length=25)
    avatar = models.URLField()


class Score(models.Model):
    score_id = models.AutoField(primary_key=True)
    quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
    user_id = models.ForeignKey(QuizUser, null=True, on_delete=models.SET_NULL)
    score_timestamp = models.DateTimeField(default=timezone.now)
    score_value = models.CharField(max_length=20)



