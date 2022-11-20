from django.shortcuts import render, redirect
from django.contrib.auth.models import Permission
from django.contrib.auth.decorators import permission_required
from usuarios.models import Usuario
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from usuarios.forms import FormularioLogin, FormularioRegistroUsuario
from formulario.views import formulario_view_1
from django.contrib.auth.models import User
from django.template.context import RequestContext


# Create your views here.


def retornar_vista(request, usuario):
    if usuario.has_perm("usuarios.Administrador"):
        return administrador_home(request, usuario)
    elif usuario.has_perm("usuarios.Censista"):
        return censista_home(request, usuario)
#    elif usuario.has_perm("usuarios.Superior"):
#        return superior_home(request, usuario)
    return render(request, 'formulario.html', {'usuario': usuario})




# Pagina principal para usuario Administrador
@permission_required("usuarios.Administrador" , login_url="/")
def administrador_home(request , usuario):
    return render(request, 'administrador.html', {'usuario': usuario})


# Pagina principal para usuario Censista
@permission_required("usuarios.Censista" , login_url="/")
def censista_home(request , usuario):
    if request.method == 'POST' and "btnFormulario" in request.POST:
        return redirect("formulario")

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
                    return retornar_vista(request, usuario)
                else:
                   mensaje = "Usuario no activado"
            else:
                   mensaje = "Datos erróneos. Por favor, inténtelo otra vez.    "
    
    
    form = FormularioLogin()
    
    return render(request, 'login.html', {'mensaje': mensaje, 'form': form })


def registro_usuario_view(request):

    mensaje = ""
    llamarMensaje = ""

    #Verificación para crear un solo usuario
    if request.method == 'POST' and "btncreate" in request.POST:
        form = FormularioRegistroUsuario(request.POST)

        #Si el formulario es valido y tiene datos
        if form.is_valid():
            #Capture la cedula del usuario
            cedula_usuario = form.cleaned_data["cedula_usuario"]

            try:
                #Consultando el usuario en la base de datos.
                usuario = Usuario.objects.get(cedula_usuario=cedula_usuario)

                if not usuario.is_active:
                    crear_usuario(usuario, form)
                    mensaje = "El usuario se guardo correctamente, la contraseña se envío al correo " + usuario.email
                    llamarMensaje = "exito_usuario"

                # Si el usuario ya existe en la BD y esta activo
                else:
                    mensaje = "El usuario " + str(cedula_usuario)  + " ya esta registrado"
                    llamarMensaje = "fracaso_usuario"

            #Si el usuario no existe, lo crea
            except Usuario.DoesNotExist:
                # Creando el usuario
                usuario = Usuario()
                crear_usuario(usuario, form)
                # Borrando los datos del formulario y enviando el mensaje de sactisfacion

                mensaje = "El usuario se guardo correctamente, la contraseña se envío al correo " + usuario.email
                llamarMensaje = "exito_usuario"
               

                request.session['llamarMensaje'] = llamarMensaje
                request.session['mensaje'] = mensaje
                return redirect("login_usuario")

        #si no es valido el formulario crear
            
    form = FormularioRegistroUsuario()
    
    return render(request, 'registro_usuario.html',{'mensaje': mensaje, 'form': form, 'llamarMensaje': llamarMensaje})



def custom_logout(request):
    logout(request)
    return redirect("login")

def crear_usuario(usuario, form):
    usuario.cedula_usuario = form.cleaned_data["cedula_usuario"]
    usuario.first_name = form.cleaned_data["nombre_usuario"]
    usuario.last_name = form.cleaned_data["apellido_usuario"]
    usuario.email = form.cleaned_data["email"]
    usuario.username = form.cleaned_data["cedula_usuario"]
    usuario.is_active = True
    #generando el password aleatorio.
    password = User.objects.make_random_password()
    usuario.set_password(password)

    # Enviando contraseña al correo electronico registrado.
    mensaje = "Señor(a) ", usuario.first_name , "\nSu usuario de acceso es: ", usuario.cedula_usuario , "\n Contraseña: ", usuario.password
    #send_mail('Envío de contraseña de acceso a SIVORE', mensaje, 'sivoreunivalle@gmail.com', [usuario.email], fail_silently=False)

    #Crea el usuario en la BD s i hay excepcion
    try:
        usuario.save()
    except Exception as e:
        print(e)

    # Colocandole permisos al usuario
    usuario.user_permissions.add(Permission.objects.get(codename=form.cleaned_data["rol"]))