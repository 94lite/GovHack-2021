from django.db import models

from django.contrib.auth import get_user_model
from django.utils.datetime_safe import datetime


class TreeType(models.Model):
    name = models.CharField(max_length=64)
    genus = models.CharField(max_length=64)
    description = models.TextField(default="")
    maturity_rate = models.IntegerField(default=0)
    price = models.IntegerField(default=0)
    image_url = models.URLField(default="")

    def __str__(self):
        return f"{self.name} ({self.genus})"


class UserTree(models.Model):
    name = models.CharField(max_length=64, default="My Tree")
    description = models.TextField(default="")
    tree_type = models.ForeignKey(TreeType, on_delete=models.CASCADE)

    planted_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    planted_at = models.DateTimeField(auto_now=True)

    point_used = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.planted_by}'s tree {self.name} ({self.tree_type}) planted at {self.planted_at} (-{self.point_used})"

    def save(self, *args, **kwargs):
        if not hasattr(self, "id") or self.id is None:
            self.planted_at = datetime.utcnow()

        super(UserTree, self).save(*args, **kwargs)


class CommunityTree(models.Model):
    tree = models.OneToOneField(UserTree, related_name="actual_tree", on_delete=models.PROTECT)

    planted_at = models.DateTimeField()

    location_lat = models.FloatField(default=0.0)
    location_lon = models.FloatField(default=0.0)

    photo_url = models.URLField()
