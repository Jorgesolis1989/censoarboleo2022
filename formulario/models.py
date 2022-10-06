from email.policy import default
from time import timezone
from django.db import models

# Create your models here.
class Arbol(models.Model):
    id = models.BigAutoField(primary_key=True)
    arbolid = models.BigIntegerField(null=False)
    codigo = models.TextField(null=False)
    placa = models.TextField(null=False)
    qrcode = models.CharField(max_length=100)
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
    estado_madurez = models.TextField(null=False)
    estado_registro = models.TextField(null=False)

    especie = models.TextField(null=False)
    tipo_vegetacion = models.TextField(null=False)
    area = models.FloatField(null=False)
    perimetro = models.FloatField(null=False)
    hito = models.TextField(null=False)
    estado_conservacion = models.TextField(null=False)
    intervencion = models.TextField(null=False)

    cobertura = models.TextField(null=False)
    emplazamiento = models.TextField(null=False)
    confinamiento = models.BooleanField(null=False)
    dist_confinamiento = models.IntegerField()

    
    foto1 =  models.ImageField(upload_to='fotos_arboles/')
    foto2 = models.ImageField(upload_to='fotos_arboles/')
    foto3 = models.ImageField(upload_to='fotos_arboles/')
    foto4 = models.ImageField(upload_to='fotos_arboles/')
    
    observaciones = models.TextField()
    estado = models.TextField()
    fecha_creado = models.DateTimeField(auto_now_add=True, blank=True)
    modificadopor = models.TextField()
    actualizado =  models.DateTimeField(auto_now_add=True, blank=True)
    version_fecha = models.DateField(auto_now_add=True, blank=True)

    
    class Meta:
        ordering = ["arbolid"]
        db_table = 'arbol'
