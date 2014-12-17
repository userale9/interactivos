titulo = "En vísperas de la Gran Guerra";

// biologia // etimologias // fisica // geografia // historiamex // historiauniv // sociales // literatura // matematicas // quimica
asignatura = "historiauniv";  // con minúsculas, sin caracteres especiales ni espacios

// texto de introducción
intro = '“¡Alerta! ¡Los perros de guerra ladran!” ¿Cuáles fueron las causas del inicio del conflicto? ¿Hubo un único responsable?';

// 'info' 'ayuda' 'nuevo' etc...
botones = [];
/*agregar o quitar botones, separar con comas. Con cada botón que se agregue se genera un id con su nombre, por ejemplo: '#imprimir', '#info'.
//Los botones de regreso a portada y reinicio de la actividad ya tienen graficos preconfigurados, solo hace falta programar '#reiniciar'.
//Agregar  los gráficos de los botones en formato png a la carpeta 'img-html'*/

centrar =  true  //centrar automáticamente el interactivo, true o false
transicion = 'fade' // horizontal // vertical //fade

var paneles = [
/// agregar o quitar segmentos  entre corchetes, según el número de sections que tenga el html.
/// separar  con comas.  ejemplo: {...}, {...}, {...}
{//panel 1
	"instrucciones" : "Examina las pantallas.", // opcional, si no se ocupa quitar todo el renglón
	"bloqueado" : true //true o false
}

] // termina paneles