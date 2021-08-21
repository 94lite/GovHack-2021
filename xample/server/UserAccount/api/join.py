from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

from knox.models import AuthToken

from UserAccount.serializers import UserSerializer, JoinSerializer


class Join(GenericAPIView):
    serializer_class = JoinSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                "token": AuthToken.objects.create(user)[1]
            }, status=status.HTTP_201_CREATED)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
