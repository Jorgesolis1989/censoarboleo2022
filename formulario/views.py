from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.shortcuts import redirect, render

# Create your views here.
def formulario_view_1(request):
    if request.method == "GET":
        print("Metodo get")
    mensaje = ""
    return render(request, 'tables1.html')

def formulario_view_2(request):
    if request.method == 'GET':
        print("Metodo get formulario 2")
    mensaje = "" 
    return render(request, 'tables2.html')

def formulario_view_3(request):
    mensaje = ""
    return render(request, 'tables3.html')
    
def formulario_view_4(request):
    mensaje = "" 
    return render(request, 'tables4.html')

    #if request.user.is_authenticated() and not request.user.is_superuser:
    #    usuario = Usuario.objects.get(username=request.user.username)
    #    return retornar_vista(request, usuario)
"""
    if request.method == 'POST':
        form = FormularioArboleo(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            usuario = authenticate(username=cd['username'], password=cd['password'])
            if usuario is not None:
                if usuario.is_active:
                    login(request, usuario)
                    #Redireccionar
                    return retornar_vista(request, usuario)
                else:
                   mensaje = "Usuario no activado"
            else:
                   mensaje = "Datos erróneos. Por favor, inténtelo otra vez.    "
    else:
        form = FormularioLogin()
    return render(request, 'login.html', {'mensaje': mensaje, 'form': form })
"""
    #return render(request, 'login.html')