# Generated by Django 3.0.7 on 2023-09-19 01:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0002_auto_20230919_0730'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactmessage',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
