from django.contrib import admin
from .models import UserTree, CommunityTree


@admin.register(UserTree)
class UserTreeAdmin(admin.ModelAdmin):
    pass


@admin.register(CommunityTree)
class CommunityTreeAdmin(admin.ModelAdmin):
    pass
