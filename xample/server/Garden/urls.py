from django.urls import path

from .api import MyGarden, TreeDetail

app_name = "garden"


urlpatterns = [
    path("", MyGarden.as_view(), name="show"),
    path("tree/<int:tree_id>/", TreeDetail.as_view(), name="tree_detail"),
]
