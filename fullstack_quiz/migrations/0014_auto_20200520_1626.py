# Generated by Django 3.0.2 on 2020-05-20 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fullstack_quiz', '0013_auto_20200515_1846'),
    ]

    operations = [
        migrations.AlterField(
            model_name='highscore',
            name='associated_quiz_id',
            field=models.IntegerField(default=-1),
        ),
    ]