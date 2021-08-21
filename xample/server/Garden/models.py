from django.db import models

from django.contrib.auth import get_user_model
from django.utils.datetime_safe import datetime


class UserTree(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    tree_type_id = models.IntegerField(default=0)
    planted_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user}'s tree {self.tree_type_id} planted at {self.planted_at}"

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
