from Garden.models import UserTree
from Garden.serializers import UserTreeSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions


class MyGarden(APIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        trees = UserTree.objects.filter(user=request.user)
        serializer = UserTreeSerializer(trees, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
