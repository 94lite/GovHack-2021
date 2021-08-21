from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User

from Car.admin import CarOwnershipInline


@admin.register(User)
class UserAccountAdmin(UserAdmin):
    list_display = ("uuid", "username", "email", "is_staff", "is_superuser", "is_active")
    ordering = ("uuid", )
    fieldsets = UserAdmin.fieldsets + (("User Account fields", {"fields": ("uuid", )}),)
    readonly_fields = ("uuid", )
    inlines = (CarOwnershipInline, )
