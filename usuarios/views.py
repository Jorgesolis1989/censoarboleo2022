from django.shortcuts import render, redirect
from django.contrib.auth.models import Permission
from django.contrib.auth.decorators import permission_required
from usuarios.models import Usuario
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from usuarios.forms import FormularioLogin, FormularioRegistroUsuario
from formulario.views import formulario_view_1
from django.contrib.contenttypes.models import ContentType
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
            cedula_usuario = form.cleaned_data["usuario"]
            print("cedula usuario " + str(cedula_usuario))

            
            #Consultando el usuario en la base de datos.            
            existe_usuario = Usuario.objects.filter(username=cedula_usuario).exists()
            #print("existe el usuario" + str(usuario))
            #print(usuario)
            if not existe_usuario:
                usuario = Usuario()
                print("creando usuario " + str(cedula_usuario))
                crear_usuario(usuario, form)
                mensaje = "El usuario se guardo correctamente"
                llamarMensaje = "exito_usuario"

            # Si el usuario ya existe en la BD y esta activo
            else:
                
                mensaje = "El usuario " + str(cedula_usuario)  + " ya esta registrado"
                print(mensaje)
                llamarMensaje = "fracaso_usuario"

        

            request.session['llamarMensaje'] = llamarMensaje
            request.session['mensaje'] = mensaje
            return redirect("login")
            
        else:
            print("No valido  formulario de registro")

        #si no es valido el formulario crear
            
    form = FormularioRegistroUsuario()
    
    return render(request, 'registro_usuario.html',{'mensaje': mensaje, 'form': form, 'llamarMensaje': llamarMensaje})



def custom_logout(request):
    logout(request)
    return redirect("login")

def crear_usuario(usuario, form):
    usuario.cedula_usuario = form.cleaned_data["usuario"]
    usuario.first_name = form.cleaned_data["nombres"]
    usuario.last_name = form.cleaned_data["apellidos"]
    usuario.email = form.cleaned_data["correo"]
    usuario.username = form.cleaned_data["usuario"]
    usuario.is_active = True
    #generando el password aleatorio.
    password = form.cleaned_data["password"]
    usuario.set_password(password)

    print("creando 1")

 #   usuario.user_permissions.add(Permission.objects.get("Censista"))

    # Enviando contraseña al correo electronico registrado.
    mensaje = "Señor(a) ", usuario.first_name , "\nSu usuario de acceso es: ", usuario.cedula_usuario , "\n Contraseña: ", usuario.password
    #send_mail('Envío de contraseña de acceso a SIVORE', mensaje, 'sivoreunivalle@gmail.com', [usuario.email], fail_silently=False)

    #Crea el usuario en la BD s i hay excepcion
    try:
        usuario.save()
        print("creando usuarii")
    except Exception as e:
        print(e)

    print(mensaje)

    
    content_type = ContentType.objects.get_for_model(Usuario)
    permission = Permission.objects.get(
        codename='Censista',
        content_type=content_type,
    )
    usuario.user_permissions.add(permission)



    # Colocandole permisos al usuario
    #usuario.user_permissions.add(Permission.objects.get(codename=form.cleaned_data["rol"]))

