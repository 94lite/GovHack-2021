from Car.models import CarInformation, CarOwnership
from Car.serializers import CarInformationSerializer
from Car.forms import CarRegistrationForm
from Car.helpers import query_car_info_by_plate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions


class MyCar(APIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        cars = CarInformation.objects.filter(owned_by=request.user)
        serializer = CarInformationSerializer(cars, many=True)

        return Response(serializer.data)

    def post(self, request):
        form = CarRegistrationForm(data=request.data)

        if form.is_valid():
            cleaned_data = form.clean()

            try:
                car = CarInformation.objects.get(plate=cleaned_data["plate"])

            except CarInformation.DoesNotExist:
                car = query_car_info_by_plate(plate_no=cleaned_data["plate"])

            if car is not None:
                try:  # Check that if its already registered,
                    _ = CarOwnership.objects.get(car=car)

                except CarOwnership.DoesNotExist:  # Good to register,
                    CarOwnership(car=car, owner=request.user).save()
                    return Response(status=status.HTTP_202_ACCEPTED)

                else:  # Car already registered,
                    return Response(status=status.HTTP_412_PRECONDITION_FAILED)

            else:  # Car does not exists,
                return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request):
        form = CarRegistrationForm(data=request.data)

        if form.is_valid():
            cleaned_data = form.clean()

            try:
                ownership = CarOwnership.objects.get(car__plate=cleaned_data["plate"], owner=request.user)

            except CarOwnership.DoesNotExist:
                return Response(status=status.HTTP_400_BAD_REQUEST)

            else:
                ownership.delete()
                return Response(status=status.HTTP_202_ACCEPTED)
