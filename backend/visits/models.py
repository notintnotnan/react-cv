from django.db import models

class Visitor(models.Model):
    visitor_id = models.CharField(max_length=15)
    first_visit = models.DateTimeField(auto_now_add=True)
    last_visit = models.DateTimeField(null=True,blank=True)
    visit_number = models.IntegerField(default=1)
    country = models.CharField(max_length=50, null=True,blank=True)
    country_code = models.CharField(max_length=4, null=True, blank=True)
    tz_offset = models.IntegerField(null=True, blank=True)
