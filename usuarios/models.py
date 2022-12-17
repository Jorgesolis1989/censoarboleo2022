from django.db import models
import os
from django.contrib.auth.models import User

class Usuario(User):
	cedula_usuario = models.BigIntegerField(null=False, unique=True, primary_key=True)
	

	class Meta:
		ordering = ["first_name"]
		verbose_name_plural = "Usuarios"
		permissions = (("Administrador" , "Permisos de Administrador"),
					   ("Censista" , "Permisos de Censista"),
					   ("Supervisor" , "Permisos de Supervisor"),
					   ("SuperForestal" , "Permisos de Supervisor Forestal"),)
	

	def _generar_ruta_imagen(instance, filename):
		# El primer paso es extraer la extension de la imagen del
		# archivo original
		extension = os.path.splitext(filename)[1][1:]

		# Generamos la ruta relativa a MEDIA_ROOT donde almacenar
		# el archivo, usando la fecha actual (año/mes)
		ruta = os.path.join('fotos_usuarios/')

		# Generamos el nombre del archivo con un identificador
		# aleatorio, y la extension del archivo original.
		nombre_archivo = '{}.{}'.format(str(instance.id)+"_fotoperfil", extension)

		# Devolvermos la ruta completa
		return os.path.join(ruta, nombre_archivo)


	foto = models.ImageField(upload_to=_generar_ruta_imagen )
	direccion =  models.TextField()
	telefono = models.BigIntegerField()
	rol= models.TextField()
	Grupo = models.TextField(null=True)
	
	def __str__(self):
		return '%s - %s  - %s' %(self.cedula_usuario,   self.first_name, self.last_name	)