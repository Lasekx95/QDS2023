from django.http import JsonResponse, HttpResponseBadRequest

from django.shortcuts import render
from django.db.models import Count
from django.http import HttpResponse
from rest_framework.response import Response
from playground.models import TruckSensorData
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet

from playground.serializers import TruckSensorDataSerializer

data = TruckSensorData.objects.filter(truck_type_id=4)
print(data.count())

# class TruckSensorDataView(ModelViewSet):
#     http_method_names = ['get']
#     queryset = TruckSensorData.objects.all()
#     serializer_class = TruckSensorDataSerializer

@api_view(['GET'])
def truck_sensor_data(request):
    data = TruckSensorData.objects.filter(truck_type_id=1)
    print(data.count())
    serializer = TruckSensorDataSerializer(data, many=True)
    return Response(serializer.data)
    
    
def api_endpoint(request):
  if request.method == 'GET':
    data1 = retrieve_data_from_database()
    return JsonResponse(data1)
  else:
    return HttpResponseBadRequest()

