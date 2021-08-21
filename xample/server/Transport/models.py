from django.db import models


class TransportationType(models.Model):
    name = models.CharField(max_length=64, unique=True, db_index=True)
    carbon_point_per_km = models.FloatField(default=0.0)
    speed_km_per_hour = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.name} - {self.carbon_point_per_km}"
