from django.contrib import admin
from .models import CarInformation, CarOwnership


@admin.register(CarInformation)
class CarInformationAdmin(admin.ModelAdmin):
    pass


class CarOwnershipInline(admin.TabularInline):
    model = CarOwnership
