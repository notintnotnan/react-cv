from django.urls import path
from . import views

urlpatterns=[
    path("test/", views.AuthSystemTest),
    path("testAuth/",views.UserAuthTest),
    path("logout/",views.BlacklistUserToken),
]