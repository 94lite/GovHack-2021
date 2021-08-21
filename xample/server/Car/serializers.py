from rest_framework import serializers
from .models import CarInformation


class CarInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarInformation
        fields = ["plate", "model", "manufactured_year", "fuel_type", "image_url",
                  "carbon_emission_rate", "fuel_economy_rate", "air_pollution_rate",
                  "carbon_emission_description", "fuel_economy_description", "air_pollution_description"]
