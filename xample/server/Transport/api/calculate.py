from Transport.models import TransportationType
from Transport.serializers import CarbonPointSerializer
from Transport.forms import CarbonPointCalculateForm

from typing import Union

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions


class CalculateCarbonPoint(APIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get_transportation_type(self, name: str) -> Union[TransportationType, None]:
        try:
            obj = TransportationType.objects.get(name__iexact=name)

        except TransportationType.DoesNotExist:
            return None

        else:
            return obj

    def get(self, request, transportation_name: str, *args, **kwargs):
        transportation = self.get_transportation_type(name=transportation_name)

        if transportation is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        else:
            return Response(CarbonPointSerializer(transportation).data, status=status.HTTP_200_OK)

    def post(self, request, transportation_name: str, *args, **kwargs):
        form = CarbonPointCalculateForm(data=request.data)

        if form.is_valid():
            cleaned_data = form.clean()
            transportation = self.get_transportation_type(name=transportation_name)

            if transportation is None:
                return Response(status=status.HTTP_404_NOT_FOUND)

            else:
                try:
                    distance = float(cleaned_data["distance"])

                except (ValueError, AttributeError, KeyError):
                    return Response(status=status.HTTP_400_BAD_REQUEST)

                else:
                    result = {"total_carbon_g": (transportation.carbon_point_per_km * distance)}
                    return Response(result, status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
