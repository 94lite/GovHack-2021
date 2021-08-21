from django.contrib import admin
from .models import Journey, Trip


class TripTabularInline(admin.TabularInline):
    model = Trip
    fields = ("transportation", "departure_point_lat", "departure_point_lon", "arrival_point_lat", "arrival_point_lon", "distance_km", "carbon_points", )
    readonly_fields = ("carbon_points", )


@admin.register(Journey)
class JourneyAdmin(admin.ModelAdmin):
    inlines = (TripTabularInline, )
    list_display = ("name", "created_by", "total_carbon_points", "created_at", )
    readonly_fields = ("uuid", )
