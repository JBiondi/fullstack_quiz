# Generated by Django 3.0.2 on 2020-06-25 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fullstack_quiz', '0015_auto_20200521_1921'),
    ]

    operations = [
        migrations.AlterField(
            model_name='highscore',
            name='display_name',
            field=models.CharField(default='anonymous', max_length=18),
        ),
    ]
