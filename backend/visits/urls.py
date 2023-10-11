from django.urls import path
from . import views

urlpatterns=[
    path("", views.getVisitors),
    path("visitor/",views.newVisit),
    path("testVisits/",views.newVisit),
]