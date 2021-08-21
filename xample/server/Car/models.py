from django.db import models

from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator

from .validators import validate_plate


class CarInformation(models.Model):
    plate = models.CharField(max_length=6, unique=True, db_index=True, verbose_name="Plate", validators=[validate_plate, ])

    model = models.CharField(max_length=128)
    manufactured_year = models.CharField(max_length=8)
    fuel_type = models.CharField(max_length=32, unique=True, db_index=True)

    carbon_emission_rate = models.IntegerField(validators=[MinValueValidator(-1), MaxValueValidator(6), ])
    fuel_economy_rate = models.IntegerField(validators=[MinValueValidator(-1), MaxValueValidator(6), ])
    air_pollution_rate = models.IntegerField(validators=[MinValueValidator(-1), MaxValueValidator(6), ])

    carbon_emission_description = models.TextField(default="")
    fuel_economy_description = models.TextField(default="")
    air_pollution_description = models.TextField(default="")

    image_url = models.URLField(blank=True)

    def __str__(self):
        return f"[{self.plate}] - {self.model} ({self.manufactured_year})"


class CarOwnership(models.Model):
    owner = models.ForeignKey(get_user_model(), db_index=True, on_delete=models.CASCADE)
    car = models.OneToOneField(CarInformation, db_index=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.owner} :: {self.car}"
