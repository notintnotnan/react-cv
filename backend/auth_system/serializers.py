from rest_framework import serializers
from . models import UserAccount

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['email','username','password','is_superuser','is_staff','is_active']
        extra_kwargs = {
            'password': {'write_only':True}
        }
