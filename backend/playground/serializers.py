from rest_framework import serializers

from . import models

# class TruckSensorDataSerializer(serializers.Serializer):
#     log_id = serializers.IntegerField()
#     time_stamp = serializers.DateTimeField()
#     gps_northing = serializers.FloatField()
#     gps_easting = serializers.FloatField()
#     gps_elevation = serializers.FloatField()
#     fuel_rate = serializers.FloatField()
#     status = serializers.CharField(max_length=255)
#     payload = serializers.FloatField()
#     truck_id = serializers.IntegerField()
#     truck_type_id = serializers.IntegerField()
#     shovel_id = serializers.IntegerField()
#     dump_id = serializers.IntegerField()
#     rnd = serializers.IntegerField()

class TruckSensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TruckSensorData
        fields = ['log_id',
                'time_stamp',
                'gps_northing',
                'gps_easting',
                'gps_elevation',
                'fuel_rate',
                'status',
                'payload',
                'truck_id',
                'truck_type_id',
                'shovel_id',
                'dump_id',
                'rnd'
                ]

