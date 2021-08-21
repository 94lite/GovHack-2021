from django.urls import path

from .api import QueryCarByPlate, MyCar

app_name = "car_info"


urlpatterns = [
    path("", MyCar.as_view(), name="mine"),
    path("search/<str:plate_no>/", QueryCarByPlate.as_view(), name="search"),
]
