from distutils.log import FATAL
from fnmatch import translate
from pickle import FALSE
import re
from django.shortcuts import render

from django.shortcuts import redirect, render
from formulario.models import EstadoFitosanitario , Dasometria, Arbol, Vulnerabilidad, Recomendacion_e_Intervencion
from django.utils import timezone
from django.conf import settings
from usuarios.models import Usuario



#from censoarboleo2022.formulario import forms
from formulario.forms import Formulario_1
# Create your views here.

timezone.activate(settings.TIME_ZONE)



def formulario_view_1(request):
    
    if request.method == 'POST' and 'btnFinalizar' in request.POST:
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
            numtallos = 1


            dasometria_nuevo.fuste = fuste

            if fuste == "Fuste Único":
                cap = request.POST["cap"]
            else:
                cap1 = request.POST["capa1"]
                cap2 = request.POST["capa2"]
                cap3 = request.POST["capa3"]
                cap4 = request.POST["capa4"]
                cap5 = request.POST["capa5"]
                numtallos = request.POST["numero_tallos"]



                dasometria_nuevo.cap = cap
                dasometria_nuevo.cap1 = cap1
                dasometria_nuevo.cap2 = cap2
                dasometria_nuevo.cap3 = cap3
                dasometria_nuevo.cap4 = cap4
                dasometria_nuevo.cap5 = cap5
            
            
            dasometria_nuevo.numtallos = numtallos

            altura_fuste =  request.POST["comercial_fuste"]
            altura_arbol = request.POST["totalarbol"]

            orientacion = request.POST["orientacion"]
            inclinacion = request.POST["inclinacion"]

            dasometria_nuevo.altura_arbol = altura_arbol
            dasometria_nuevo.altura_fuste = altura_fuste
            dasometria_nuevo.orientacion = orientacion
            dasometria_nuevo.inclinacion = inclinacion
            
            # Circunferencia
            dasometria_nuevo.circunferencia = 0


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

            diametro_ramas = request.POST["diametro"]

            dasometria_nuevo.diametro_ramas = diametro_ramas

            sistemaradicular = request.POST["sistemaradicular"]
            dasometria_nuevo.tiporaiz = sistemaradicular

            dasometria_nuevo.arbol_id = arbol_nuevo

            try:
                dasometria_nuevo.save()
            except Exception as e:
                print(e)

################################################################# Tabla EstadoFitosanitario

            estadofitosanitario_nuevo = EstadoFitosanitario()
            #

            vitalidad = request.POST["vitalidad"]

            estadofitosanitario_nuevo.vitalidad = vitalidad
            estadofitosanitario_nuevo.arbol_id = arbol_nuevo

            estadofitosanitario_nuevo = crear_EstadoFitosanitario(estadofitosanitario_nuevo, request)

        
            try:
                estadofitosanitario_nuevo.save()
            except Exception as e:
                print(e)

############################################################# Tabla Vulnerabilidad

            vulnerabilidad = Vulnerabilidad()

            vulnerabilidad.arbol_id = arbol_nuevo

            personas = False
            construcciones = False
            redes_aereas = False
            vehiculos = False



            if "personas" in request.POST:
                personas = True

            if "construcciones" in request.POST:
                construcciones = True

            if "redes_aereas" in request.POST:
                redes_aereas = True
            
            if "vehiculos" in request.POST:
                vehiculos = True

            vulnerabilidad.personas = personas
            vulnerabilidad.construcciones = construcciones
            vulnerabilidad.redes_aereas = redes_aereas
            vulnerabilidad.vehiculos = vehiculos

            try:
                vulnerabilidad.save()
            except Exception as e:
                print(e)

############################################################# Tabla Recomendaciones e Intervención

            recomendacion_e_intervencion = Recomendacion_e_Intervencion()

            erradicacion = False
            poda_aclareo = False
            poda_equilibrio = False
            poda_formacion = False
            poda_limpieza = False
            poda_ramas_laterales = False
            poda_ramas_secas  = False
            poda_sanitaria = False
            poda_reduccion_altura = False
            poda_redes_secundarias = False
            poda_limpieza_parasitas = False
            poda_despeje_redes = False
            poda_reduccion_altura = False
            transplante = False
            eliminar_piso_duro = False
            controlfitosanitario = False
            otros_control_fitosanitario = False
            porque_tala = ""


            if "erradicacion" in request.POST:
                erradicacion = True

            if "poda_aclareo" in request.POST:
                poda_aclareo = True

            if "poda_equilibrio" in request.POST:
                poda_equilibrio = True

            if "poda_formacion" in request.POST:
                poda_formacion = True

            if "poda_limpieza" in request.POST:
                poda_limpieza = True

            if "poda_ramas_laterales" in request.POST:
                poda_ramas_laterales = True

            if "poda_ramas_secas" in request.POST:
                poda_ramas_secas = True

            if "poda_sanitaria" in request.POST:
                poda_sanitaria = True

            if "poda_redes_secundarias" in request.POST:
                poda_redes_secundarias = True

            if "poda_reduccion_altura" in request.POST:
                poda_reduccion_altura = True

            if "poda_despeje_redes" in request.POST:
                poda_despeje_redes = True

            if "transplante" in request.POST:
                transplante = True

            if "eliminar_piso_duro" in request.POST:
                eliminar_piso_duro = True

            if "limpieza_parasistas" in request.POST:
                poda_limpieza_parasitas = True

            if "controlfitosanitario" in request.POST:
                controlfitosanitario = True
            
            if "otros_control_fitosanitario" in request.POST:
                otros_control_fitosanitario = True
            
            if estadofitosanitario_nuevo.vitalidad == "Mala":
                erradicacion = True

                if "porquetala" in request.POST:
                    porque_tala = request.POST["porquetala"]

        
            recomendacion_e_intervencion.erradicacion = erradicacion
            recomendacion_e_intervencion.poda_aclareo = poda_aclareo
            recomendacion_e_intervencion.poda_equilibrio = poda_equilibrio
            recomendacion_e_intervencion.poda_formacion = poda_formacion
            recomendacion_e_intervencion.poda_limpieza = poda_limpieza
            recomendacion_e_intervencion.poda_ramas_laterales = poda_ramas_laterales
            recomendacion_e_intervencion.poda_ramas_secas = poda_ramas_secas
            recomendacion_e_intervencion.poda_sanitaria = poda_sanitaria
            recomendacion_e_intervencion.poda_reduccion_altura = poda_reduccion_altura
            recomendacion_e_intervencion.poda_redes_secundarias = poda_redes_secundarias
            recomendacion_e_intervencion.poda_despeje_redes = poda_despeje_redes
            recomendacion_e_intervencion.transplante = transplante
            recomendacion_e_intervencion.eliminar_piso_duro = eliminar_piso_duro
            recomendacion_e_intervencion.arbol_id = arbol_nuevo
            recomendacion_e_intervencion.poda_limpieza_parasitas = poda_limpieza_parasitas
            recomendacion_e_intervencion.control_fitosanitario = controlfitosanitario
            recomendacion_e_intervencion.otros_control_fitosanitario = otros_control_fitosanitario
            recomendacion_e_intervencion.porque_tala = porque_tala
            
            try:
                recomendacion_e_intervencion.save()
            except Exception as e:
                print(e)


        else:
            print("No es valido")






    else:
        form = Formulario_1()

    return render(request, 'formulario.html', {'form': form})



def crear_EstadoFitosanitario(estadofitosanitario_nuevo, request):

    mecanica_fuste = False
    mecanica_f_heridas = False
    mecanica_f_anillado = False
    mecanica_f_quemaduras = False
    
    biologica_fuste = False
    biologia_f_perfobarrenado = False
    biologica_f_necrosis = False
    biologica_f_descortezado = False
    biologica_f_tumores = False
    
    antropologica_fuste = False
    antropica_f_poda = False
    antropica_f_escombros = False
    antropica_f_pintura = False

    mecanica_copa = False
    mecanica_c_heridas = False
    mecanica_c_quemaduras = False
    
    biologica_copa = False
    biologica_c_defoliacion = False
    biologica_c_clorosis = False
    biologica_c_minado = False
    biologica_c_necrosis = False
    biologica_c_parasitas = False
    
    
    antropologica_copa = False
    antropica_c_poda = False
    antropica_c_contamatmosferica = False

    mecanica_raiz = False
    mecanica_r_heridas  = False
    mecanica_r_quemaduras  = False

    biologica_r_necrosis = False
    biologica_raiz = False
    
    antropica_r_poda = False
    antropica_r_escombro =False
    antropica_r_prd_toxicos = False
    antropica_raiz = False

    general_f_sano = False
    general_c_sano = False
    general_r_sano = False

    if estadofitosanitario_nuevo.vitalidad == "Regular":

    ############################################### Afectacion Fuste. 

        if "mecanica_f_heridas" in request.POST:
            mecanica_f_heridas = True
        
        if "mecanica_f_quemaduras" in request.POST:
            mecanica_f_quemaduras = True
        
        if "mecanica_f_anillado" in request.POST:
            mecanica_f_anillado = True

        if "biologia_f_perfobarrenado" in request.POST:
            biologia_f_perfobarrenado = True

        if "biologica_f_necrosis" in request.POST:
            biologica_f_necrosis = True

        if "biologica_f_descortezado" in request.POST:
            biologica_f_descortezado = True

        if "biologica_f_tumores" in request.POST:
            biologica_f_tumores = True

        if "antropica_f_poda" in request.POST:
            antropica_f_poda = True

        if "antropica_f_escombros" in request.POST:
            antropica_f_escombros = True

        if "antropica_f_pintura" in request.POST:
            antropica_f_pintura = True

        if(mecanica_f_heridas or  mecanica_f_quemaduras or  mecanica_f_anillado):
            mecanica_fuste= True

        if(biologica_f_necrosis or  biologica_f_descortezado or biologica_f_tumores or biologia_f_perfobarrenado):
            biologica_fuste = True

        if(antropica_f_poda or antropica_f_escombros or antropica_f_pintura):
            antropologica_fuste = True

    
    


    ############################################### Afectacion Copa. 

        
        if "mecanica_c_heridas" in request.POST:
            mecanica_c_heridas = True
        
        if "mecanica_c_quemaduras" in request.POST:
            mecanica_c_quemaduras = True
        
        if "biologica_c_defoliacion" in request.POST:
            biologica_c_defoliacion = True

        if "biologica_c_clorosis" in request.POST:
            biologica_c_clorosis = True

        if "biologica_c_minado" in request.POST:
            biologica_c_minado = True

        if "biologica_c_necrosis" in request.POST:
            biologica_c_necrosis = True

        if "biologica_c_parasitas" in request.POST:
            biologica_c_parasitas = True

        if "antropica_c_contamatmosferica" in request.POST:
            antropica_c_contamatmosferica = True

        if "antropica_c_poda" in request.POST:
            antropica_c_poda = True


        if(mecanica_c_heridas or  mecanica_c_quemaduras):
            mecanica_copa= True

        if(biologica_c_defoliacion or  biologica_c_clorosis or biologica_c_minado or biologica_c_necrosis or biologica_c_parasitas):
            biologica_copa = True

        if(antropica_c_contamatmosferica or antropica_c_poda):
            antropologica_copa = True

    

############################################### Afectacion  Raices. 


        if "mecanica_r_heridas" in request.POST:
            mecanica_r_heridas = True
        
        if "mecanica_r_quemaduras" in request.POST:
            mecanica_r_quemaduras = True
        
        if "biologica_r_necrosis" in request.POST:
            biologica_r_necrosis = True
                    
        if "antropica_r_poda" in request.POST:
            antropica_r_poda = True
            
        if "antropica_r_escombro" in request.POST:
            antropica_r_escombro = True
                        
        if "antropica_r_prd_toxicos" in request.POST:
            antropica_r_prd_toxicos = True

        if(mecanica_r_heridas or  mecanica_r_quemaduras):
            mecanica_raiz = True

        if(biologica_r_necrosis):
            biologica_raiz = True

        if(antropica_r_poda or antropica_r_escombro or antropica_r_prd_toxicos ):
            antropica_raiz = True


################################################Estado general

        if "general_f_sano" in request.POST:
            general_f_sano = True

        if "general_c_sano" in request.POST:
            general_c_sano = True

        if "general_r_sano" in request.POST:
            general_r_sano = True

    
    #Asignamos 
    estadofitosanitario_nuevo.mecanica_c_heridas = mecanica_c_heridas
    estadofitosanitario_nuevo.mecanica_c_quemaduras = mecanica_c_quemaduras
    estadofitosanitario_nuevo.mecanica_copa = mecanica_copa
    
    estadofitosanitario_nuevo.biologica_c_defoliacion =  biologica_c_defoliacion
    estadofitosanitario_nuevo.biologica_c_clorosis = biologica_c_clorosis
    estadofitosanitario_nuevo.biologica_c_minado = biologica_c_minado
    estadofitosanitario_nuevo.biologica_c_necrosis = biologica_c_necrosis
    estadofitosanitario_nuevo.biologica_c_parasitas = biologica_c_parasitas
    estadofitosanitario_nuevo.biologica_copa = biologica_copa

    estadofitosanitario_nuevo.antropica_c_contamatmosferica = antropica_c_contamatmosferica
    estadofitosanitario_nuevo.antropica_c_poda = antropica_c_poda
    estadofitosanitario_nuevo.antropologica_copa = antropologica_copa

    #Asignamos 
    estadofitosanitario_nuevo.mecanica_r_heridas = mecanica_r_heridas
    estadofitosanitario_nuevo.mecanica_r_quemaduras = mecanica_r_quemaduras
    estadofitosanitario_nuevo.mecanica_raiz = mecanica_raiz
    
    estadofitosanitario_nuevo.biologica_r_necrosis =  biologica_r_necrosis
    estadofitosanitario_nuevo.biologica_raiz = biologica_raiz

    estadofitosanitario_nuevo.antropica_r_poda = antropica_r_poda
    estadofitosanitario_nuevo.antropica_r_escombro = antropica_r_escombro
    estadofitosanitario_nuevo.antropica_r_prd_toxicos = antropica_r_prd_toxicos
    estadofitosanitario_nuevo.antropologica_raiz = antropica_raiz    
    
    estadofitosanitario_nuevo.mecanica_f_heridas = mecanica_f_heridas
    estadofitosanitario_nuevo.mecanica_f_anillado = mecanica_f_anillado
    estadofitosanitario_nuevo.mecanica_f_quemaduras = mecanica_f_quemaduras
    estadofitosanitario_nuevo.mecanica_fuste = mecanica_fuste
    
    estadofitosanitario_nuevo.biologica_f_perfobarrenado =  biologia_f_perfobarrenado
    estadofitosanitario_nuevo.biologica_f_necrosis = biologica_f_necrosis
    estadofitosanitario_nuevo.biologica_f_descortezado = biologica_f_descortezado
    estadofitosanitario_nuevo.biologica_f_tumores = biologica_f_tumores
    estadofitosanitario_nuevo.biologica_fuste = biologica_fuste

    estadofitosanitario_nuevo.antropica_f_escombros = antropica_f_escombros
    estadofitosanitario_nuevo.antropica_f_poda = antropica_f_poda
    estadofitosanitario_nuevo.antropica_f_pintura = antropica_f_pintura
    estadofitosanitario_nuevo.antropologica_fuste = antropologica_fuste

    estadofitosanitario_nuevo.general_f_sano =general_f_sano
    estadofitosanitario_nuevo.general_c_sano = general_c_sano
    estadofitosanitario_nuevo.general_r_sano = general_r_sano

    
    return estadofitosanitario_nuevo

