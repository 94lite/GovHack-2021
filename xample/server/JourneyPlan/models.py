import uuid

from django.db import models

from django.contrib.auth import get_user_model
from django.utils.datetime_safe import datetime

from Transport.models import TransportationType


class Journey(models.Model):
    uuid = models.UUIDField(primary_key=True, unique=True, db_index=True, default=uuid.uuid4)
    name = models.CharField(max_length=128, default="My new journey")

    created_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    departure_point_lat = models.FloatField(default=0.0)
    departure_point_lon = models.FloatField(default=0.0)

    arrival_point_lat = models.FloatField(default=0.0)
    arrival_point_lon = models.FloatField(default=0.0)

    @property
    def total_carbon_points(self):
        return sum(trip.carbon_points for trip in self.trips.all())

    def __str__(self):
        return f"{self.created_by}'s journey at {self.created_at} from ({self.departure_point_lat}, {self.departure_point_lon}) to ({self.arrival_point_lat}, {self.arrival_point_lon})"

    def save(self, *args, **kwargs):
        if not hasattr(self, "id") or self.id is None:
            self.created_at = datetime.utcnow()

        super(Journey, self).save(*args, **kwargs)


class Trip(models.Model):
    journey = models.ForeignKey(Journey, related_name="trips", on_delete=models.CASCADE)
    transportation = models.ForeignKey(TransportationType, on_delete=models.CASCADE)

    departure_point_lat = models.FloatField(default=0.0)
    departure_point_lon = models.FloatField(default=0.0)

    arrival_point_lat = models.FloatField(default=0.0)
    arrival_point_lon = models.FloatField(default=0.0)

    distance_km = models.FloatField(default=0.0)
    carbon_points = models.FloatField(default=0.0)

    def save(self, *args, **kwargs):
        self.carbon_points = self.transportation.carbon_point_per_km * self.distance_km
        super(Trip, self).save(*args, **kwargs)
