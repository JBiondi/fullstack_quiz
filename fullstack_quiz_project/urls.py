from django.contrib import admin
from django.urls import path
from django.urls import include


urlpatterns = [
    # Imagine localhost:8000 in front of all these
    path('admin/', admin.site.urls),
    # The empty string means that nothing follows localhost:8000, like it's the home/default one
    path('', include('frontend.urls')),
    path('api/', include('api.urls')),
]
