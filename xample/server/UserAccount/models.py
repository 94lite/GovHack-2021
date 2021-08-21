import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    uuid = models.UUIDField(primary_key=True, unique=True, db_index=True, default=uuid.uuid4)
    profile_image_url = models.URLField(blank=True, default="")
