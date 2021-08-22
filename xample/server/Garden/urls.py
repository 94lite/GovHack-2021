from django.urls import path

from .api import MyGarden, TreeDetail, TreeTypes, CreateNewTree, Industry

app_name = "garden"


urlpatterns = [
    path("", MyGarden.as_view(), name="show"),
    path("tree/types/", TreeTypes.as_view(), name="tree_types"),
    path("tree/<int:tree_id>/", TreeDetail.as_view(), name="tree_detail"),
    path("tree/new/", CreateNewTree.as_view(), name="new_tree"),
    path("industry/<str:industry>/", Industry.as_view(), name="impact"),
]
