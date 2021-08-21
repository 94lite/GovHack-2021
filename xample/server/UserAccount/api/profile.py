from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status, permissions

from UserAccount.serializers import UserSerializer


class Profile(GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        if hasattr(request, "user"):
            return Response(UserSerializer(request.user).data, status=status.HTTP_200_OK)

        else:
            return Response(status.HTTP_401_UNAUTHORIZED)
