from django.urls import path

from .api import MyJourneyList, JourneyDetail

app_name = "journey"


urlpatterns = [
    path("", MyJourneyList.as_view(), name="list"),
    path("<uuid:journey_uuid>/", JourneyDetail.as_view(), name="detail"),
    # path("new/", CalculateCarbonPoint.as_view(), name="create"),
]
