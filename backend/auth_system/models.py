from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):

    def create_superuser(self,email,username,password=None, **other_fields):
        if not email:
            raise ValueError('Users must have valid email adress.')
        
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_active',True)

        email = self.normalize_email(email)
        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save()

        return user 

    def create_user(self,email,username,password=None):
        if not email:
            raise ValueError('Users must have valid email adress.')

        email = self.normalize_email(email)
        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save()

        return user        

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def get_full_name(self):
        return self.username
    
    def __str__(self):
        return self.email