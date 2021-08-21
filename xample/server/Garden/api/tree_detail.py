from Garden.models import UserTree
from Garden.serializers import UserTreeWithCommunitySerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class TreeDetail(APIView):
    def get(self, request, tree_id: int, *args, **kwargs):
        try:
            tree = UserTree.objects.get(id=tree_id)

        except UserTree.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        else:
            return Response(UserTreeWithCommunitySerializer(tree).data, status=status.HTTP_200_OK)
