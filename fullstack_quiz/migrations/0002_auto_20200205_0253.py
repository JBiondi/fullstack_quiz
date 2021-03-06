# Generated by Django 3.0.2 on 2020-02-05 02:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fullstack_quiz', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('quote_id', models.AutoField(primary_key=True, serialize=False)),
                ('quote_text', models.TextField()),
                ('incorrect_answer1', models.CharField(max_length=50)),
                ('incorrect_answer2', models.CharField(max_length=50)),
                ('incorrect_answer3', models.CharField(max_length=50)),
                ('correct_answer', models.CharField(max_length=50)),
                ('quiz_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='fullstack_quiz.Quiz')),
            ],
        ),
        migrations.DeleteModel(
            name='Question',
        ),
    ]
