from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework import status, permissions

from knox.views import LoginView as KnoxLoginView

from django.contrib.auth import login


class Login(KnoxLoginView):
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, *args, **kwargs):
        serializer = AuthTokenSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            login(request, user)

            return super(Login, self).post(request, format=None)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
