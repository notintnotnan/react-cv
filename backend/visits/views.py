from django.db.models import Count
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . models import Visitor
from . import serializers
from datetime import datetime
from requests import get

# Create your views here.
@api_view(['GET'])
def getVisitors(request):
    visitors = Visitor.objects.all()
    serializer = serializers.VisitorSerializer(visitors,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def newVisit(request):

    x_fowarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_fowarded_for:
        ip = x_fowarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    result = None

    if ip:
        ip_api_url = 'http://ip-api.com/json/{}?fields=33603587'.format(ip)
        try:
            ip_api_response = get(ip_api_url)
            ip_api_response.raise_for_status()

            ip_api_data = ip_api_response.json()
            ip_api_result = 'With location.'
            ip_api_country_code = ip_api_data['countryCode']
            ip_api_offset = ip_api_data['offset']
            ip_api_country = ip_api_data['country']
        except:
            ip_api_result = 'Without location.'
            ip_api_country_code = None
            ip_api_offset = None
            ip_api_country = None
    else:
        ip_api_result = 'Without location.'
        ip_api_country_code = None
        ip_api_offset = None
        ip_api_country = None

    try:
        print("Trying to record new visit")
        visitor = Visitor.objects.get(visitor_id=ip)
        visitor.last_visit = datetime.now()
        visitor.country = ip_api_country
        visitor.country_code = ip_api_country_code
        visitor.tz_offset = ip_api_offset
        visitor.visit_number += 1
        visitor.save()
        result = Response("Visit recorded. {}".format(ip_api_result),status=status.HTTP_200_OK)
    except Visitor.DoesNotExist:
        print("Trying to record new visit but instead updating")
        newVisitor = Visitor(visitor_id=ip,country = ip_api_country,country_code = ip_api_country_code,tz_offset = ip_api_offset)
        newVisitor.save()
        result = Response("New visit added. {}".format(ip_api_result),status=status.HTTP_201_CREATED)
    except Exception as e:
        print("Trying to record new visit but other error ocurred")
        print(e)
        result = Response("Unable to add/record visit with visitor_id = {}. {}".format(ip,ip_api_result),status=status.HTTP_400_BAD_REQUEST)
    return result