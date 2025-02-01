
# Practicando Lógica de Programación: challenge Amigo Secreto

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el __"amigo secreto"__.

El usuario deberá agregar nombres mediante un campo de texto y un botón __"Adicionar"__. Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón __"Sortear Amigo"__ seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

## Fucionalidades
* __Agregar nombres:__ Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
 * __Validar entrada:__ Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
 * __Visualizar la lista:__ Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
* __Sorteo aleatorio:__ Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
## Solución
__"Agregar nombres:"__ Se crea un arreglo que guarde cada nombre que se le añade a el. 
 __Validar entrada:__
 __Visualizar la lista:__ Se debe considerar la limpieza del input y agregar un il al ul para que así se desplieguen de arriba a abajo y no separado por comas.
 __Sorteo aleatorio:__ Se usa la funcion Random para generar un numero aleatorio entre 0 y la longitud que tenga el arreglo "amigos" (en el que se guardaron los nombres de los amigos), y se reemplaza el texto de los li, hay que considerar que se debe prevenir el desborde en la lista dentro del "ul", esto porque al listar los nombres se debe agregar un li por cada nombre, mientras que en este caso solo es uno.
