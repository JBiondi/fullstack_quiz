from django.contrib import admin
from django.urls import path
from django.urls import include

from frontend.views import frontend_home_view

urlpatterns = [
    # Imagine localhost:8000 in front of all these
    path('admin/', admin.site.urls),
    # The empty string means that nothing follows localhost:8000, like it's the home/default one
    path('', frontend_home_view),
    path('api/', include('api.urls')),
]
