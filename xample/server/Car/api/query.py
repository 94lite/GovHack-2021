from Car.models import CarInformation
from Car.serializers import CarInformationSerializer
from Car.helpers import query_car_info_by_plate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class QueryCarByPlate(APIView):
    def get(self, request, plate_no: str, *args, **kwargs):
        try:
            car = CarInformation.objects.get(plate=plate_no)

        except CarInformation.DoesNotExist:
            car = query_car_info_by_plate(plate_no=plate_no)

        if car is not None:
            return Response(CarInformationSerializer(car).data, status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
