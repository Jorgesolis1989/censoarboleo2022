from email.policy import default
from pyexpat import model
from time import timezone
from django.db import models

# Create your models here.
class Arbol(models.Model):
    id = models.BigAutoField(primary_key=True)
    arbolid = models.BigIntegerField(null=False)
    codigo = models.TextField(null=False)
    Placa_ant = models.TextField(null=True)
    qrcode = models.CharField(max_length=200)
    barrio = models.TextField(null=False)
    direccion = models.TextField(null=False)
    comuna = models.CharField(null=False, max_length=2)
    latitud = models.FloatField(null=False)
    longitud = models.FloatField(null=False)

    norte = models.FloatField(null=False)
    este = models.FloatField(null=False)
    
    nombre_comun = models.TextField(null=False)
    nombre_cientifico = models.TextField(null=False)
    familia = models.TextField(null=False)
    genero = models.TextField(null=False)

    madurez = models.TextField(null=False)
    estado_registro = models.TextField(null=False)

    especie = models.TextField(null=False)
    tipo_vegetacion = models.TextField(null=False)
    area = models.FloatField(null=True)
    perimetro = models.FloatField(null=True)
    hito = models.TextField(null=True)
    estado_conservacion = models.TextField(null=True)
    intervencion = models.TextField(null=True)

    cobertura = models.TextField(null=False)
    emplazamiento = models.TextField(null=False)
    confinamiento = models.BooleanField(null=False)
    dist_confinamiento = models.IntegerField(null=True)

    
    foto1 =  models.ImageField(upload_to='fotos_arboles/')
    foto2 = models.ImageField(upload_to='fotos_arboles/')
    foto3 = models.ImageField(upload_to='fotos_arboles/')
    foto4 = models.ImageField(upload_to='fotos_arboles/')
    
    observaciones = models.TextField(null=True)
    estado = models.TextField(null=True)
    fecha_creado = models.DateTimeField(auto_now_add=True, blank=True)
    modificadopor = models.TextField(null=True)
    actualizado =  models.DateTimeField(auto_now_add=True, blank=True)
    version_fecha = models.DateField(auto_now_add=True, blank=True)

    
    class Meta:
        ordering = ["id"]
        db_table = 'arbol'




################################################################# Tabla Dasometría

class Dasometria(models.Model):
    id = models.BigAutoField(primary_key=True)
    arbol_id = models.ForeignKey(Arbol, on_delete=models.CASCADE)
    fuste = models.TextField(null = False)
    numtallos = models.IntegerField(default=0)
    cap = models.IntegerField(null=True)
    cap1 = models.IntegerField(null=True)
    cap2 = models.IntegerField(null=True)
    cap3 = models.IntegerField(null=True)
    cap4 = models.IntegerField(null=True)
    cap5 = models.IntegerField(null=True)
    altura_fuste = models.FloatField(null=False)
    altura_arbol = models.FloatField(null=False)
    circunferencia = models.FloatField(null=True)
    
    diacopa_mayor = models.FloatField(null=False)
    diacopa_menor = models.FloatField(null=False)
    inclinacion = models.TextField(null=True)
    orientacion = models.TextField(null=True)
    
    copaviva = models.FloatField(null=True) #Altura
    copausente = models.FloatField(null=True)
    expcopaluz = models.TextField(null=False)
    diametro_ramas = models.TextField(null=True)
  

    class Meta:
        ordering = ["id"]
        db_table = 'dasometria'
