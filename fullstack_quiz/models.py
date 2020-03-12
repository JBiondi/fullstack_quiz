from django.db import models
from django.utils import timezone


class Quiz(models.Model):
    quiz_id = models.AutoField(primary_key=True)
    quiz_topic = models.CharField(max_length=50)

    def __str__(self):
        return self.quiz_topic


class Quote(models.Model):
    quote_id = models.AutoField(primary_key=True)
    quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
    quote_text = models.TextField()
    incorrect_answer1 = models.CharField(max_length=50)
    incorrect_answer2 = models.CharField(max_length=50)
    incorrect_answer3 = models.CharField(max_length=50)
    correct_answer = models.CharField(max_length=50)
    # associated_image = models.ImageField()


class QuizUser(models.Model):
    user_id = models.AutoField(primary_key=True)
    display_name = models.CharField(max_length=25)


class Score(models.Model):
    score_id = models.AutoField(primary_key=True)
    quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
    user_id = models.ForeignKey(QuizUser, null=True, on_delete=models.SET_NULL)
    score_timestamp = models.DateTimeField(default=timezone.now)
    score_value = models.CharField(max_length=20)



