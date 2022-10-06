from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.shortcuts import redirect, render
from formulario.models import Arbol
#from censoarboleo2022.formulario import forms
from formulario.forms import Formulario_1
# Create your views here.


def formulario_view_1(request):
    
    if request.method == 'POST':
        form = Formulario_1(request.POST)
        #latitude = form.cleaned_data["latitude"]
        if form.is_valid():
            placaAntigua = form.cleaned_data["placaAntigua"]
            longitude = form.cleaned_data["longitude"] 
            latitude = form.cleaned_data["latitude"]
            comuna = request.POST["comuna"]
            barrio = request.POST["barrio"]
            direccion = request.POST["direccion"]
            
            nombre_comun = request.POST["nombre_comun"]
            nombre_cientifico = request.POST.get('nombre_cientifico', False);
            familia = request.POST.get('familia', False);
            genero = request.POST.get('genero', False);

            estado_madurez = request.POST["estado_madurez"]
            estado_registro = request.POST["estado_registro"]
            
            # Falta especie

            codigo_qr = request.POST["qr"]
            cobertura = request.POST["cobertura"]
            emplazamiento = request.POST["emplazamiento"]
            confinamiento = request.POST.get('confinamiento');

            

            dist_confinamiento = request.POST["dist_confinamiento"]

            print("confinamiento "+str(confinamiento))
           


            arbol_nuevo = Arbol()
            arbol_nuevo.placa = placaAntigua
            arbol_nuevo.longitud = longitude
            arbol_nuevo.latitud = latitude
            arbol_nuevo.comuna = comuna
            arbol_nuevo.barrio = barrio
            arbol_nuevo.direccion = direccion
            arbol_nuevo.familia = familia
            arbol_nuevo.nombre_comun = nombre_comun
            arbol_nuevo.nombre_cientifico = nombre_cientifico
            arbol_nuevo.genero = genero
            arbol_nuevo.estado_madurez = estado_madurez
            arbol_nuevo.estado_registro = estado_registro
            
            arbol_nuevo.especie = ""
            arbol_nuevo.qrcode = codigo_qr
            arbol_nuevo.cobertura = cobertura

            if confinamiento== "Si":
                arbol_nuevo.confinamiento = True
            else:
                arbol_nuevo.confinamiento = False

            arbol_nuevo.dist_confinamiento = dist_confinamiento
            arbol_nuevo.emplazamiento = emplazamiento

            #arbol_nuevo.dist_confinamiento = 0

            # Foto del candidato
            if request.FILES['avatar']:
                arbol_nuevo.foto1 = request.FILES['avatar']
            else:
                arbol_nuevo.foto1 = None

            #print("arbol nuevo 1 " +arbol_nuevo.foto1)    
            
            
                
                

            if request.FILES['avatar2']:
                arbol_nuevo.foto2 = request.FILES['avatar2']
            else:
                arbol_nuevo.foto2 = None

            print("arbol nuevo 2 " +str(arbol_nuevo.foto2))    


            if 'avatar3' in request.POST: 
                arbol_nuevo.foto3 = None
            
            else:
                if request.FILES['avatar3']:   
                    arbol_nuevo.foto3 = request.FILES['avatar3']    
                else:
                    arbol_nuevo.foto3 = None


            
            if 'avatar4' in request.POST: 
                arbol_nuevo.foto4 = None
            
            else:
                if request.FILES['avatar4']:   
                    arbol_nuevo.foto4 = request.FILES['avatar4']    
                else:
                    arbol_nuevo.foto4 = None

#            if request.FILES['avatar4']:
#                arbol_nuevo.foto4 = request.FILES['avatar4']
#           else:
#                arbol_nuevo.foto4 = None
            
            
            #Pendientes de definir
            arbol_nuevo.arbolid = 0
            arbol_nuevo.norte = 0.0
            arbol_nuevo.este = 0.0
            arbol_nuevo.area = 0.0
            arbol_nuevo.perimetro =0.0
            arbol_nuevo.hito = 0.0
            
            try:
                arbol_nuevo.save()

            except Exception as e:
                print(e)


            #form = Formulario_1()
            #print("placaAntigua "+placaAntigua)
            #print("longitude "+longitude)
            #print("comuna "+comuna)
            #print("barrio "+barrio)
        else:
            print("No es valido")

    else:
        form = Formulario_1()

    return render(request, 'formulario.html', {'form': form})

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