from Garden.models import TreeType
from Garden.serializers import TreeTypeSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class TreeTypes(APIView):
    def get(self, request, *args, **kwargs):
        trees = TreeType.objects.all()
        serializer = TreeTypeSerializer(trees, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
