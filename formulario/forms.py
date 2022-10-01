from logging import disable
from tkinter import DISABLED
from django import forms

"""
Este formulario se encuentran los datos para logueo del usuario
"""
class Formulario_1(forms.Form):
    placaAntigua = forms.CharField(
        widget=forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Escriba aquí la placa antigua si la tiene'}))
    latitude = forms.CharField(
        widget=forms.TextInput(attrs={'readonly':'readonly' , 'name':'textLatitude', 'id':'textLatitude', 'class':'form-control text-center', 'placeholder':'Esperando calcular latitud'}))
    longitude = forms.CharField(
        widget=forms.TextInput(attrs={'readonly':'readonly' , 'name':'textLongitude', 'id':'textLongitude', 'class':'form-control text-center', 'placeholder':'Esperando calcular longitude'}))
#  <input type="text" name="textLatitude" id="textLatitude" class="form-control" placeholder="Esperando calcular latitud" disabled></p>
