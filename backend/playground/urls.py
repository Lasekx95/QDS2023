from django.urls import include, path
from rest_framework_nested import routers
from . import views


urlpatterns = [
    path('data/', views.truck_sensor_data),
    path('api/', views.api_endpoint, name='api_endpoint'),
]