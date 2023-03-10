from django.http import JsonResponse, HttpResponseBadRequest

from django.shortcuts import render
from django.db.models import Count
from django.http import HttpResponse
from rest_framework.response import Response
from .models import Truck
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet

from playground.serializers import TruckSensorDataSerializer

from .serializers import TruckSerializer

import json
import time

# for i in range(70):
#     data = TruckSensorData.objects.order_by('log_id').filter(truck_id=i) \
#             .filter(time_stamp__lt='2022-04-05') \
#             .values('time_stamp', 'gps_northing', 'gps_easting', 'gps_elevation', 'fuel_rate', 'truck_type_id', 'payload', 'status')

#     for d in data:
#         d['time_stamp'] = time.mktime(d['time_stamp'].timetuple()) * 1000
        
#     x = list(data)
#     with open(f"TRUCK_ID_METRICS{i}.json", "w") as outfile:
#         json.dump(x, outfile, indent=4)

# class TruckSensorDataView(ModelViewSet):
#     http_method_names = ['get']
#     queryset = TruckSensorData.objects.all()
#     serializer_class = TruckSensorDataSerializer

@api_view(['GET'])
def truck_sensor_data(request):
    data = Truck.objects.all()

    serializer = TruckSerializer(data, many=True)
    return Response(serializer.data)
    
    
def api_endpoint(request):
  if request.method == 'GET':
    data1 = retrieve_data_from_database()
    return JsonResponse(data1)
  else:
    return HttpResponseBadRequest()

