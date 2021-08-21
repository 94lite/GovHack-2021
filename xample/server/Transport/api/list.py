from rest_framework.generics import ListAPIView

from GovHack2021.paginations import CustomPageNumberPagination

from Transport.models import TransportationType
from Transport.serializers import TransportationTypeSerializer


class TransportationList(ListAPIView):
    serializer_class = TransportationTypeSerializer
    pagination_class = CustomPageNumberPagination

    def get_queryset(self):
        return TransportationType.objects.all().order_by("carbon_point_per_km")
