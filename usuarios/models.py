from django.db import models
from django.contrib.auth.models import User

class Usuario(User):
	cedula_usuario = models.BigIntegerField(null=False, unique=True, primary_key=True)
	foto = models.ImageField(upload_to='fotos_usuarios/' )
	direccion =  models.TextField()
	telefono = models.BigIntegerField()
	rol= models.TextField()
	Grupo = models.TextField(null=True)

	class Meta:
		ordering = ["first_name"]
		verbose_name_plural = "Usuarios"
		permissions = (("Administrador" , "Permisos de Administrador"),
					   ("Censista" , "Permisos de Censista"),
					   ("Supervisor" , "Permisos de Supervisor"),
					   ("SuperForestal" , "Permisos de Supervisor Forestal"),)

	def __str__(self):
		return '%s - %s  - %s' %(self.cedula_usuario,   self.first_name, self.last_name	)