from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    projectname = models.ManyToManyField(
        "home.Fuel",
        blank=True,
        related_name="customtext_projectname",
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()
    user = models.EmailField(
        null=True,
        blank=True,
        max_length=254,
    )
    password = models.IntegerField(
        null=True,
        blank=True,
    )

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Fuel(models.Model):
    "Generated Model"
    project = models.OneToOneField(
        "home.CustomText",
        on_delete=models.CASCADE,
        related_name="fuel_project",
    )
    gallons = models.BigIntegerField(
        null=True,
        blank=True,
    )
