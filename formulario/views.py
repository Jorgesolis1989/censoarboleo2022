import re
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.shortcuts import redirect, render
from formulario.models import Dasometria
from formulario.models import Arbol
#from censoarboleo2022.formulario import forms
from formulario.forms import Formulario_1
# Create your views here.


def formulario_view_1(request):
    
    if request.method == 'POST':
        form = Formulario_1(request.POST)
        #latitude = form.cleaned_data["latitude"] 
        if form.is_valid():
           
            longitude = form.cleaned_data["longitude"] 
            latitude = form.cleaned_data["latitude"]


            placaAntigua = request.POST["PlacaAntigua"]
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



            arbol_nuevo = Arbol()
            
            # arbol_id es  generado por SQL ---  combina comuna y otras variables 
            arbol_nuevo.arbolid =  0

            #  codigo es el código de la placa nueva asociado al QR
            arbol_nuevo.codigo = codigo_qr


            # Placa antigua                 
            arbol_nuevo.Placa_ant = placaAntigua

            #Qr code
            arbol_nuevo.qrcode = codigo_qr

            # Latitude y Longitude 
            arbol_nuevo.longitud = longitude
            arbol_nuevo.latitud = latitude

            # Norte Este se obtiene por SQL
            arbol_nuevo.este = 0.0
            arbol_nuevo.norte = 0.0
            
            # Comuna, barrio, dirección ,
            arbol_nuevo.comuna = comuna
            arbol_nuevo.barrio = barrio
            arbol_nuevo.direccion = direccion


            # Especie es el nombre científico
            arbol_nuevo.especie = nombre_cientifico
            arbol_nuevo.familia = familia
            arbol_nuevo.nombre_comun = nombre_comun
            arbol_nuevo.genero = genero

            arbol_nuevo.madurez = estado_madurez

            # No aparece registro en la base de datos
            arbol_nuevo.estado_registro = estado_registro
        
            # Cobertura
            arbol_nuevo.cobertura = cobertura

            # Confinamiento
            if confinamiento== "Si":
                arbol_nuevo.confinamiento = True
            else:
                arbol_nuevo.confinamiento = False
                dist_confinamiento = 0

            arbol_nuevo.dist_confinamiento = dist_confinamiento

            # E
            arbol_nuevo.emplazamiento = emplazamiento


            # Imágenes de los árboles

            if 'avatar' in request.POST: 
                arbol_nuevo.foto1 = None

            else: 
                if request.FILES['avatar']:
                    arbol_nuevo.foto1 = request.FILES['avatar']
                else:
                    arbol_nuevo.foto1 = None
            

            if 'avatar2' in request.POST: 
                arbol_nuevo.foto2 = None

            else: 
                if request.FILES['avatar2']:
                    arbol_nuevo.foto2 = request.FILES['avatar2']
                else:
                    arbol_nuevo.foto2 = None


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
#            arbol_nuevo.arbolid = 0

            arbol_nuevo.area = 0.0
            arbol_nuevo.perimetro =0.0
            arbol_nuevo.hito = 0.0
            arbol_nuevo.observaciones = ""
            


            try:
                arbol_nuevo.save()

            except Exception as e:
                print(e)



################################################################# Tabla Dasometría

            dasometria_nuevo = Dasometria()


            fuste = request.POST.get('tipofuste');
            cap = 0
            cap1= 0
            cap2= 0
            cap3= 0
            cap4= 0
            cap5= 0
            numtallos = 0


            dasometria_nuevo.fuste = fuste

            if fuste == "Fuste Único":
                cap = request.POST["capa1"]
                dasometria_nuevo.cap = cap
            else:
                cap1 = request.POST["capa1"]
                cap2 = request.POST["capa2"]
                cap3 = request.POST["capa3"]
                cap4 = request.POST["capa4"]
                cap5 = request.POST["capa5"]
                numtallos = request.POST["numero_tallos"]

                dasometria_nuevo.cap1 = cap1
                dasometria_nuevo.cap2 = cap2
                dasometria_nuevo.cap3 = cap3
                dasometria_nuevo.cap4 = cap4
                dasometria_nuevo.cap5 = cap5
                dasometria_nuevo.numtallos = numtallos

            altura_fuste =  request.POST["comercial_fuste"]
            altura_arbol = request.POST["totalarbol"]
            circunferencia = request.POST["circunferencia"]

            orientacion = request.POST["orientacion"]
            inclinacion = request.POST["inclinacion"]

            dasometria_nuevo.altura_arbol = altura_arbol
            dasometria_nuevo.altura_fuste = altura_fuste
            dasometria_nuevo.orientacion = orientacion
            dasometria_nuevo.inclinacion = inclinacion
            
            # Circunferencia
            dasometria_nuevo.circunferencia = circunferencia


            diacopa_mayor = request.POST["ejemayor"]
            diacopa_menor = request.POST["ejemenor"]
            exposicion_luz = request.POST["exposicionluz"]

            dasometria_nuevo.diacopa_mayor = diacopa_mayor
            dasometria_nuevo.diacopa_menor = diacopa_menor
            dasometria_nuevo.expcopaluz = exposicion_luz


            copaviva  = request.POST["copa_viva"]
            copa_ausente = request.POST["copa_ausente"]
            
            dasometria_nuevo.copaviva = copaviva
            dasometria_nuevo.copausente = copa_ausente

            diametro = request.POST["diametro"]

            dasometria_nuevo.diametro_ramas = diametro

            dasometria_nuevo.arbol_id = arbol_nuevo

            try:
                dasometria_nuevo.save()
            except Exception as e:
                print(e)
                


        else:
            print("No es valido")

    else:
        form = Formulario_1()

    return render(request, 'formulario.html', {'form': form})

