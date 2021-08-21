import uuid

from JourneyPlan.models import Journey
from JourneyPlan.serializers import JourneyWithTripSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions


class JourneyDetail(APIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, journey_uuid: uuid.UUID, *args, **kwargs):
        try:
            journey = Journey.objects.get(uuid=journey_uuid)

        except Journey.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        else:
            serializer = JourneyWithTripSerializer(journey)
            return Response(serializer.data, status=status.HTTP_200_OK)
