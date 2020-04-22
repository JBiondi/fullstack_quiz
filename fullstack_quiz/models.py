from django.db import models
from django.utils import timezone


class Quiz(models.Model):
    quiz_id = models.AutoField(primary_key=True)
    quiz_topic = models.CharField(max_length=50)

    def __str__(self):
        return self.quiz_topic


class Prompt(models.Model):
    prompt_id = models.AutoField(primary_key=True)
    quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
    prompt_text = models.TextField()
    answer0 = models.CharField(default='answer goes here', max_length=50)
    answer1 = models.CharField(default='answer goes here', max_length=50)
    answer2 = models.CharField(default='answer goes here', max_length=50)
    answer3 = models.CharField(default='answer goes here', max_length=50)
    correct_choice = models.CharField(default='choiceX', max_length=50)
    answer_text = models.TextField(default='answer text goes here')
    # associated_image = models.ImageField()

    def __str__(self):
        return self.prompt_text


class QuizUser(models.Model):
    user_id = models.AutoField(primary_key=True)
    display_name = models.CharField(max_length=25)

    def __str__(self):
        return self.display_name


class Score(models.Model):
    score_id = models.AutoField(primary_key=True)
    quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
    user_id = models.ForeignKey(QuizUser, null=True, on_delete=models.SET_NULL)
    score_timestamp = models.DateTimeField(default=timezone.now)
    score_value = models.CharField(max_length=20)



