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
from django.urls import path, re_path
import django.views.static 
from django.conf.urls import include
from formulario import views
import os
from formulario.views import formulario_view_1 

urlpatterns = [
    path('', views.formulario_view_login, name='formulario_1'),
    path('registro_usuario', views.formulario_view_registro_usuario, name='registro_usuario'),
    path('formulario', views.formulario_view_1, name='formulario_2'),
	re_path(r'^censoarboleo2022/media/(.*)$', django.views.static.serve, {'document_root' : os.path.join(os.path.dirname(__file__), 'media')}),

]
