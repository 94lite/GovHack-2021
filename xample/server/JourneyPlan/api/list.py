from rest_framework.generics import ListAPIView

from GovHack2021.paginations import CustomPageNumberPagination

from JourneyPlan.models import Journey
from JourneyPlan.serializers import JourneySerializer


class MyJourneyList(ListAPIView):
    serializer_class = JourneySerializer
    pagination_class = CustomPageNumberPagination

    def get_queryset(self):
        return Journey.objects.filter(created_by=self.request.user).order_by("created_at")
