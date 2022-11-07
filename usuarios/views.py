from django.shortcuts import render
from django.contrib.auth.models import Permission
from django.contrib.auth.decorators import permission_required
from usuarios.models import Usuario
from django.contrib.auth import authenticate, login
from usuarios.forms import FormularioLogin
from formulario.views import formulario_view_1

# Create your views here.


def retornar_vista(request, usuario):
    return censista_home(request, usuario)


# Pagina principal para usuario Administrador
@permission_required("usuarios.Administrador" , login_url="/")
def administrador_home(request , usuario):
    return render(request, 'administrador.html', {'usuario': usuario})


# Pagina principal para usuario Censista
@permission_required("usuarios.Censista" , login_url="/")
def censista_home(request , usuario):
    return render(request, 'censista.html', {'usuario': usuario})



# Pagina principal para usuario Supervisor
@permission_required("usuarios.Supervisor" , login_url="/")
def supervisor_home(request , usuario):
    return render(request, 'supervisor.html', {'usuario': usuario})


def login_view(request):
    mensaje = ""
    if request.user.is_authenticated and not request.user.is_superuser:
        usuario = Usuario.objects.get(username=request.user.username)

        return retornar_vista(request, usuario)

    elif request.method == 'POST':
        form = FormularioLogin(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            usuario = authenticate(username=cd['usuario'], password=cd['password'])
            if usuario is not None:
                if usuario.is_active:
                    login(request, usuario)
                    #Redireccionar
                    return formulario_view_1(request);
                    #return retornar_vista(request, usuario)
                else:
                   mensaje = "Usuario no activado"
            else:
                   mensaje = "Datos erróneos. Por favor, inténtelo otra vez.    "
    
    
    form = FormularioLogin()
    
    return render(request, 'login.html', {'mensaje': mensaje, 'form': form })


def registro_usuario_view(request):
    return render(request, 'register.html')