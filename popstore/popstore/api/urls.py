from django.urls import path
from api import views

urlpatterns = [
    path('charge/', views.Charge.as_view())
]
