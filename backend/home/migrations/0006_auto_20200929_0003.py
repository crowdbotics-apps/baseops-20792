# Generated by Django 2.2.16 on 2020-09-29 00:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_homepage_password'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customtext',
            old_name='projectname',
            new_name='project',
        ),
    ]
