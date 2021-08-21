from Garden.models import UserTree
from Garden.forms import TreeCreationForm
from Garden.serializers import UserTreeSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions


class CreateNewTree(APIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def post(self, request):
        form = TreeCreationForm(data=request.data)

        if form.is_valid():
            user_tree: UserTree = form.save(commit=False)
            user_tree.planted_by = request.user

            if user_tree.tree_type.price < request.user.points:
                request.user.points = request.user.points - user_tree.tree_type.price
                request.user.save()

                user_tree.point_used = user_tree.tree_type.price
                user_tree.save()

                user_tree.refresh_from_db()

                return Response(UserTreeSerializer(user_tree).data, status=status.HTTP_201_CREATED)

            else:
                return Response(status=status.HTTP_402_PAYMENT_REQUIRED)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
