from django.db import models
from django.contrib.auth.models import User

class Usuario(User):
	cedula_usuario = models.BigIntegerField(null=False, unique=True, primary_key=True)

	class Meta:
		ordering = ["first_name"]
		verbose_name_plural = "Usuarios_Sivore"
		permissions = (("Administrador" , "Permisos de Administrador"),
					   ("Censista" , "Permisos de Censista"),
					   ("Supervisor" , "Permisos de Supervisor"),)

	def __str__(self):
		return '%s - %s  - %s' %(self.cedula_usuario,   self.first_name, self.last_name	)