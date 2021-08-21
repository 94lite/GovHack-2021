from django.urls import path

from .api import TransportationList, CalculateCarbonPoint

app_name = "transportation"


urlpatterns = [
    path("", TransportationList.as_view(), name="list"),
    path("<str:transportation_name>/calculate/", CalculateCarbonPoint.as_view(), name="calculate_points"),
]
