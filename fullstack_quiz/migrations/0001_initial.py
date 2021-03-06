# Generated by Django 3.0.2 on 2020-02-03 19:59

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('quiz_id', models.AutoField(primary_key=True, serialize=False)),
                ('quiz_topic', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='QuizUser',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('display_name', models.CharField(max_length=25)),
                ('avatar', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('score_id', models.AutoField(primary_key=True, serialize=False)),
                ('score_timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('score_value', models.CharField(max_length=20)),
                ('quiz_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='fullstack_quiz.Quiz')),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='fullstack_quiz.QuizUser')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('question_id', models.AutoField(primary_key=True, serialize=False)),
                ('question_text', models.TextField()),
                ('incorrect_answer1', models.CharField(max_length=50)),
                ('incorrect_answer2', models.CharField(max_length=50)),
                ('incorrect_answer3', models.CharField(max_length=50)),
                ('correct_answer', models.CharField(max_length=50)),
                ('quiz_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='fullstack_quiz.Quiz')),
            ],
        ),
    ]
