from django.db import models


class Truck(models.Model):
    truck_id = models.PositiveIntegerField(primary_key=True)
    truck_type_id = models.PositiveIntegerField()

class Driver(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    truck = models.ForeignKey(Truck, on_delete=models.PROTECT,related_name='truck')

class TruckSensorData(models.Model):
    log_id = models.BigIntegerField(primary_key=True)
    time_stamp = models.DateTimeField()
    gps_northing = models.FloatField(null=True, blank=True)
    gps_easting = models.FloatField(null=True, blank=True)
    gps_elevation = models.FloatField(null=True, blank=True)
    fuel_rate = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=255)
    payload = models.FloatField(null=True, blank=True)
    truck = models.ForeignKey(Truck,on_delete=models.PROTECT,related_name='trucker')
    truck_type_id = models.PositiveIntegerField()
    shovel_id = models.PositiveIntegerField()
    dump_id = models.PositiveIntegerField()
    rnd = models.PositiveIntegerField()