from django.db import models


class Quiz(models.Model):
    quiz_id = models.AutoField(primary_key=True)
    quiz_topic = models.CharField(max_length=50)

    def __str__(self):
        return self.quiz_topic

    def get_quiz_length(self, quiz_id):
        # Do a DB query to find the amount of prompts associated with given id
        return Prompt.objects.filter(quiz_id=quiz_id)


class Prompt(models.Model):
    prompt_id = models.AutoField(primary_key=True)
    associated_quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
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


class HighScore(models.Model):
    high_score_id = models.AutoField(primary_key=True)
    associated_quiz_id = models.ForeignKey(Quiz, null=True, on_delete=models.SET_NULL)
    display_name = models.CharField(default='Anonymous', max_length=25)
    user_correct_score = models.IntegerField(default=-1)

    def __str__(self):
        return f'Display Name: {self.display_name}, Correct Score: {self.user_correct_score}, ID: {self.high_score_id}'

    def score_as_percent(self):
        total_questions = self.associated_quiz_id.get_quiz_length(self.associated_quiz_id)

        return self.user_correct_score / total_questions * 100

