from rest_framework import serializers
from .models import Journey, Trip


class JourneySerializer(serializers.ModelSerializer):
    departure_point = serializers.SerializerMethodField(method_name="get_departure_point")
    arrival_point = serializers.SerializerMethodField(method_name="get_arrival_point")
    total_carbon_points = serializers.SerializerMethodField(method_name="get_total_carbon_points")

    def get_departure_point(self, instance: Journey):
        return {"latitude": instance.departure_point_lat, "longitude": instance.departure_point_lon}

    def get_arrival_point(self, instance: Journey):
        return {"latitude": instance.arrival_point_lat, "longitude": instance.arrival_point_lon}

    def get_total_carbon_points(self, instance: Journey):
        return instance.total_carbon_points

    class Meta:
        model = Journey
        fields = ["uuid", "name", "created_at", "created_by", "departure_point", "arrival_point", "total_carbon_points", ]


class TripSerializer(serializers.ModelSerializer):
    transportation_name = serializers.CharField(source="transportation.name")
    departure_point = serializers.SerializerMethodField(method_name="get_departure_point")
    arrival_point = serializers.SerializerMethodField(method_name="get_arrival_point")

    def get_departure_point(self, instance: Trip):
        return {"latitude": instance.departure_point_lat, "longitude": instance.departure_point_lon}

    def get_arrival_point(self, instance: Trip):
        return {"latitude": instance.arrival_point_lat, "longitude": instance.arrival_point_lon}

    class Meta:
        model = Trip
        fields = ["transportation_name", "departure_point", "arrival_point", "distance_km", "carbon_points"]


class JourneyWithTripSerializer(JourneySerializer):
    trips = serializers.SerializerMethodField(method_name="get_trips")

    def get_trips(self, instance: Journey):
        return TripSerializer(instance.trips.all(), many=True).data

    class Meta:
        model = Journey
        fields = JourneySerializer.Meta.fields + ["trips", ]
