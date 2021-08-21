from django.contrib import admin
from .models import TransportationType


@admin.register(TransportationType)
class TransportationTypeAdmin(admin.ModelAdmin):
    pass
