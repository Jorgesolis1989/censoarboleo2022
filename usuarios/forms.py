#from typing_extensions import Required
from django import forms
from usuarios.models import Usuario

"""
Este formulario se encuentran los datos para logueo del usuario
"""
class FormularioLogin(forms.Form):
    usuario = forms.IntegerField(
        widget=forms.NumberInput(attrs={'class': 'input' ,'type':'number' , 'value':''}))
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'input'}))

#<input name="usuario" class="input" type="number">

#<input name="password"class="input" type="password">


class FormularioRegistroUsuario(forms.Form):
    usuario = forms.IntegerField(
        widget=forms.NumberInput(attrs={'class': 'input' , 'required':'true'}))
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'input'}))
    
    apellidos = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'input', 'required':'true'}))
    nombres = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'input', 'required':'true'}))

    correo = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'input', 'required':'true'}))

    password_confirmar = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'input'}))




    def confirmar_password(self):
        diccionario_limpio = self.cleaned_data
        cedula = diccionario_limpio.get('username')
        if cedula != int:
            raise forms.ValidationError("La cedula debe de ser enteros")
        return cedula


#def FormularioEditarUsuario(forms.Form):
#    username = 

