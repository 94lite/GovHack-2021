from rest_framework import serializers
from .models import TransportationType


class TransportationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportationType
        fields = ["name", "carbon_point_per_km", "speed_km_per_hour"]


class CarbonPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportationType
        fields = ["name", "carbon_point_per_km"]
