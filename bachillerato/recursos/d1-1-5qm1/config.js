titulo = "Más atracción, menos dispersión";

// biologia // etimologias // fisica // geografia // historiamex // historiauniv // sociales // literatura // matematicas // quimica
asignatura = "quimica";  // con minúsculas, sin caracteres especiales ni espacios

// texto de introducción
intro = 'Además de las condiciones ambientales, ¿sabe qué otro factor determina el estado de agregación de las sustancias?';

// 'info' 'ayuda' 'nuevo' etc...
botones = ['anterior','siguiente'];
/*agregar o quitar botones, separar con comas. Con cada botón que se agregue se genera un id con su nombre, por ejemplo: '#imprimir', '#info'.
//Los botones de regreso a portada y reinicio de la actividad ya tienen graficos preconfigurados, solo hace falta programar '#reiniciar'.
//Agregar  los gráficos de los botones en formato png a la carpeta 'img-html'*/

centrar =  true  //centrar automáticamente el interactivo, true o false
transicion = 'vertical' // horizontal // vertical //fade

initialization = 1; // Inicializo el conteo de las pantallas en uno
totalDePantallas = 3; // Para la Navegación en caso de utilizar las flechas de la interfaz, dejar 'null' si no se utilizan las flechas

var paneles = [
/// agregar o quitar segmentos  entre corchetes, según el número de sections que tenga el html.
/// separar  con comas.  ejemplo: {...}, {...}, {...}
{//panel 1
	"instrucciones" : "Desliza la barra de temperatura y observa en que puntos cambia el estado de agregación dentro del vaso de precipitados. Después, incrementa la fuerza intermolecular y observa cómo se modifican los puntos de fusión y ebullición.", // opcional, si no se ocupa quitar todo el renglón
	"bloqueado" : false //true o false
},

{//panel 2
	"instrucciones" : "Observa en qué punto cambia el estado de agregación de la sustancia dentro del vaso de precipitados.",
	"bloqueado" : false //true o false
},

{//panel 3
	"instrucciones" : "Lee el enunciado y pulsa la respuesta correcta.",
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

]; // termina paneles
