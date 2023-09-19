from django.urls import path
from . import views

urlpatterns = [
    path('', views.index_view, name='index_view'),
    path('save_contact_message/', views.save_contact_message, name='save_contact_message'),
]
