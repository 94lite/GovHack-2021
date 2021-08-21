from knox import views as knox_views
from django.urls import path

from .api import Join, Login, Profile

app_name = "user_account"

urlpatterns = [
    path("join/", Join.as_view(), name="join"),
    path('login/', Login.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path("profile/", Profile.as_view(), name="profile")
]
