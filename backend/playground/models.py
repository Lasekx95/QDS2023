from django.db import models

class TruckSensorData(models.Model):
    log_id = models.BigIntegerField(primary_key=True)
    time_stamp = models.DateTimeField()
    gps_northing = models.FloatField(null=True, blank=True)
    gps_easting = models.FloatField(null=True, blank=True)
    gps_elevation = models.FloatField(null=True, blank=True)
    fuel_rate = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=255)
    payload = models.FloatField(null=True, blank=True)
    truck_id = models.PositiveIntegerField()
    truck_type_id = models.PositiveIntegerField()
    shovel_id = models.PositiveIntegerField()
    dump_id = models.PositiveIntegerField()
    rnd = models.PositiveIntegerField()