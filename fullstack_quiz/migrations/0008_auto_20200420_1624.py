# Generated by Django 3.0.2 on 2020-04-20 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fullstack_quiz', '0007_prompt_answer_text'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prompt',
            name='correct_answer',
        ),
        migrations.RemoveField(
            model_name='prompt',
            name='incorrect_answer1',
        ),
        migrations.RemoveField(
            model_name='prompt',
            name='incorrect_answer2',
        ),
        migrations.RemoveField(
            model_name='prompt',
            name='incorrect_answer3',
        ),
        migrations.AddField(
            model_name='prompt',
            name='answer0',
            field=models.CharField(default='answer goes here', max_length=50),
        ),
        migrations.AddField(
            model_name='prompt',
            name='answer1',
            field=models.CharField(default='answer goes here', max_length=50),
        ),
        migrations.AddField(
            model_name='prompt',
            name='answer2',
            field=models.CharField(default='answer goes here', max_length=50),
        ),
        migrations.AddField(
            model_name='prompt',
            name='answer3',
            field=models.CharField(default='answer goes here', max_length=50),
        ),
        migrations.AddField(
            model_name='prompt',
            name='correct_choice',
            field=models.CharField(default='choiceX', max_length=50),
        ),
    ]
