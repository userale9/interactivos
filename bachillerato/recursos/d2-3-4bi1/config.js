titulo = "Vida en la oscuridad.";

// biologia // etimologias // fisica // geografia // historiamex // historiauniv // sociales // literatura // matematicas // quimica
asignatura = "biologia";  // con minúsculas, sin caracteres especiales ni espacios

// texto de introducción
intro = 'Los seres vivos autotrofos obtienen su energía de la luz solar, pero ¿sabes cómo la obtienen los organismos que viven en completa oscuridad, como en los fondos océanicos?';

// 'info' 'ayuda' 'nuevo' etc...'anterior','siguiente','documento','instruccion','pausa','reproducir'
botones = [];
/*agregar o quitar botones, separar con comas. Con cada botón que se agregue se genera un id con su nombre, por ejemplo: '#imprimir', '#info'.
//Los botones de regreso a portada y reinicio de la actividad ya tienen graficos preconfigurados, solo hace falta programar '#reiniciar'.
//Agregar  los gráficos de los botones en formato png a la carpeta 'img-html'*/

centrar =  true  //centrar automáticamente el interactivo, true o false
transicion = 'vertical' // horizontal // vertical //fade

var paneles = [
/// agregar o quitar segmentos  entre corchetes, según el número de sections que tenga el html.
/// separar  con comas.  ejemplo: {...}, {...}, {...}
{//panel 1
	"instrucciones" : "Lee la información y pulsa el icono para observar el video.", // opcional, si no se ocupa quitar todo el renglón
	"bloqueado" : false //true o false
},

{//panel 2
	"instrucciones" : "<i>específicas</i> del panel.",
	"bloqueado" : false //true o false
},

{//panel 3
	"instrucciones" : "Instrucciones <b>específicas</b> del panel.",
	"bloqueado" : false //true o false
},

{//panel 4
	"instrucciones" : "Instrucciones del panel.",
	"bloqueado" : false //true o false
},

{//panel 5
	"instrucciones" : "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
	"bloqueado" : false //true o false
}

] // termina paneles