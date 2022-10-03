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
    familia = models.TextField(null=False)
    genero = models.TextField(null=False)
    especie = models.TextField(null=False)
    tipo_vegetacion = models.TextField(null=False)
    madurez = models.TextField(null=False)
    area = models.FloatField(null=False)
    perimetro = models.FloatField(null=False)
    hito = models.TextField(null=False)
    estado_conservacion = models.TextField(null=False)
    intervencion = models.TextField(null=False)
    cobertura = models.TextField(null=False)
    confinamiento = models.IntegerField(null=False)
    dist_confinamiento = models.IntegerField()
    emplazamiento = models.TextField(null=False)
    foto1 = models.TextField(null=False)
    foto2 = models.TextField(null=False)
    foto3 = models.TextField()
    foto4 = models.TextField()
    observaciones = models.TextField()
    estado = models.TextField(null=False)
    fecha_creado = models.DateTimeField(null=False)
    modificadopor = models.TextField(null=False)
    actualizado =  models.DateTimeField(null=False)
    version_fecha = models.DateField()

    
    class Meta:
        ordering = ["arbolid"]
        db_table = 'arbol'
