from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.

@api_view(['GET'])
def AuthSystemTest(request):
    return Response({'message':'Auth system is online!'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserAuthTest(request):
    return Response({'message':'The user is authenticated!'})

@api_view(['POST'])
def BlacklistUserToken(request):
    response = None
    try:
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        response = {"status":status.HTTP_200_OK}
    except Exception as e:
        response = {"status":status.HTTP_400_BAD_REQUEST}
    return Response(response)
