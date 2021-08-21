from knox import views as knox_views
from django.urls import path

from .api import Join, Login

app_name = "user_account"

urlpatterns = [
    path("api/join/", Join.as_view(), name="join"),
    path('api/login/', Login.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
]
