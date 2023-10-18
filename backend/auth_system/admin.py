from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . models import UserAccount

class CustomUserAdmin(UserAdmin):

    list_display = ('id','email', 'username', 'is_superuser', 'is_staff', 'is_active')

admin.site.register(UserAccount, CustomUserAdmin)
