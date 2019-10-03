from django.contrib import admin
from django.conf.urls import url  
from django.urls import path, re_path

from sports.views import (
                            GetAllSports, 
                            GetAllEventsBySportID
                        )

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^sports/$', GetAllSports.as_view(), name='Sports-Views'),
    url(r'^sports/(?P<sport_id>\d+)/$', GetAllEventsBySportID.as_view(), name='Sports-Views'),
]