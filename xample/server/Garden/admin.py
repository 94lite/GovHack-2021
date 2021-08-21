from django.contrib import admin
from .models import TreeType, UserTree, CommunityTree


@admin.register(TreeType)
class TreeTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(UserTree)
class UserTreeAdmin(admin.ModelAdmin):
    pass


@admin.register(CommunityTree)
class CommunityTreeAdmin(admin.ModelAdmin):
    pass
