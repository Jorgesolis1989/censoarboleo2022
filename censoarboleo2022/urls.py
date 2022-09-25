"""censoarboleo2022 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from formulario import views

urlpatterns = [
    path('', views.formulario_view_1, name='formulario_1'),
    path('formulario2', views.formulario_view_2, name='formulario_2'),
    path('formulario3', views.formulario_view_3, name='formulario_3'),
    path('formulario4', views.formulario_view_4, name='formulario_4'),

]
