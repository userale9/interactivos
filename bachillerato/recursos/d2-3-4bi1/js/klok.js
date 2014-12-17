/* ========================
Klok -> [Alejandro Pacheco],
Version = 1.0,
Creado: 23/10/14,
Ultima modificacion: 23/10/14
======================== */
$(document).ready(function(){

    // Declaro las pantallas
    var pantalla1 = $('#pantalla1');
    var pantalla2 = $('#pantalla2');
    var pantalla3 = $('#pantalla3');
    var pantalla4 = $('#pantalla4');

    // Declaro los sonidos
    var sonidoError = document.getElementById('sonido-error');
    var sonidosuccess = document.getElementById('sonido-success');

    // Creo una variable en la cual se almacenaran todos los divs con la clase respuesta
    var respuestas = [];

    // Esta funcion devuelve el array de forma random
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Recorro todos los divs con esta clase para despues removerlos y agregarlos al arreglo
    $('.respuesta').each(function(){
        var thisDiv = $(this);
        $(this).remove();
        respuestas.push(thisDiv);
    });

    // Declaro una variable en la cual se guarda al arreglo en forma random
    var newOrdenDivs = shuffle(respuestas);

    // Recorro el arreglo random para agregar al contenedor padre los divs con la clase '.respuesta' y al final los muestro
    for(var i=0; i < newOrdenDivs.length; i++){
        $('#bottom-respuestas-pantalla3').append(newOrdenDivs[i]);
        $('#bottom-respuestas-pantalla3').children('.respuesta').show();
    }

    // Funciones de jquery ui -> [drag & drop]
    $('.draggable').draggable({
        revert: "invalid" });

    var respuestasCorrectas = 0;

    $(".droppable").droppable({
        drop: function(event, ui) {
            var $drop = $(this),
                $drag = $(ui.draggable);
            if($drop.attr("data-correcto") == $drag.attr("data-correcto")) {
                sonidosuccess.play();
                respuestasCorrectas++;
                $drag.remove();
                if($drop.attr('data-correcto')==1){ $drop.css('background-image','url(img/1.png)'); }
                else if($drop.attr('data-correcto')==2){ $drop.css('background-image','url(img/2.png)'); }
                else if($drop.attr('data-correcto')==3){ $drop.css('background-image','url(img/3.png)'); }
                else if($drop.attr('data-correcto')==4){ $drop.css('background-image','url(img/4.png)'); }
                else if($drop.attr('data-correcto')==5){ $drop.css('background-image','url(img/5.png)'); }
                if(respuestasCorrectas==5){
                    pantalla3.hide();
                    $('#realimentacion, #contenidoRea1').fadeIn(); }
            } else {
                sonidoError.play();

                $drag.draggable("option", "revert", true);
                setTimeout(function() {
                    $drag.draggable("option", "revert", "invalid");
                }, 300);
            }
        }
    });

    // Funciones del video
    var videoEnded = false;
    document.getElementById('otk-video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        if(!e) { e = window.event; }
        videoEnded = true;
        $('#returnWindow').css('opacity',1); }

    // Navegacion de las pantallas -> [click]
    $('#playVideo').click(function(){
        pantalla1.hide();
        pantalla2.fadeIn(); });

    $('#returnWindow').click(function(){
        if(videoEnded){
            pantalla2.hide();
            pantalla1.fadeIn();
            $('#goTopantalla3').show(); }
        else {}
        return false;
    });

    $('#goTopantalla3').click(function(){
        pantalla1.hide();
        pantalla3.fadeIn();
        return false;
    });

    $('#closeContenidoRea1').click(function(){
        $('#realimentacion, #contenidoRea1').hide();
        pantalla4.fadeIn();
        return false;
    });

    $('#closeContenidoRea2').click(function(){
        location.reload();
    });


    // Creo variables globales para la funcionalidad de la seccion "ejercicio 2"
    var totalPreguntasPrincipales = 5;
    var totalPreguntasPrincipalesContandoElCero = 4;
    var respuestasCorrectasFormulario = 0;
    var next;
    var thisAttr;
    $('#check1,#check2,#check3,#check4').change(function(e) {
        $('#correcto-pantalla4, #incorrecto-pantalla4, #left-pantalla4').hide();
        if($(this).is(":checked")) {
            thisAttr = $(this).attr('data-correcto');
            $('#left-pantalla4').show();
            if(thisAttr!='false'){ 
                $('#correcto-pantalla4').css('display','block'); } 
            else {
                $('#incorrecto-pantalla4').css('display','block'); }

            $('#close-left-pantalla4').show();
            $('#contenido-question-pantalla4 input').each(function(){
                $(this).attr('disabled','disabled');
            });

        }
    });

    // Table click function
    $('#close-left-pantalla4').click(function(){
        if(thisAttr!='false'){ 
            respuestasCorrectasFormulario++;
            selectAQuestion(true); }
        else {
            condicionarRespuestas($('#question').attr('data-question')); }

        $(this).hide();
        $('#correcto-pantalla4, #incorrecto-pantalla4, #left-pantalla4').hide();

        $('#contenido-question-pantalla4 input').each(function(){
            $(this).prop({"disabled":false, 'checked':false });
        });

        return false;
    });

    // 
    function selectAQuestion(is_ok){
        var question = $('#question');
        var pregunta = [];
        pregunta[0] = { 
            value:'¿A qué se deberá el color rojo brillante de la pluma de Riftia pachyptila?', 
            id:'0' };

        pregunta[1] = { 
            value:'¿Qué sustancias, además de oxígeno y a diferencia de otras especies, puede transportar la hemoglobina del gusano de tubo gigante?', 
            id:'1' };

        pregunta[2] = { 
            value:'¿En cuántas y cuáles fases se lleva a cabo el proceso de quimiosíntesis?', 
            id:'2' };

        pregunta[3] = { 
            value:'¿Quién lleva a cabo la oxidación del ácido sulfhídrico transportado por la hemoglobina Riftia pachyptila?', 
            id:'3' };

        pregunta[4] = { 
            value:'¿Qué ecuación química representaría mejor la quimiosíntesis de las bacterias hospedadas en los tejidos del gusano de tubo grande?', 
            id:'4' };

        // Condiciono para saver si es la primera ves que se accede al dom
        var primerPregunta;
        if(is_ok){ // Si recivo un parametro en la funcion ejecuto este codigo, esto me ayuda ha saver que ya havia ingresado antes
            if(respuestasCorrectasFormulario==totalPreguntasPrincipales){ // Muestro la pantalla final
                pantalla4.hide();
                $('#realimentacion, #contenidoRea2').fadeIn(); }
            else {
                // Edito esta variable por el parametro recivido en la funcion
                primerPregunta = pregunta[next];
                // Coloco en el div lo correspondiente ha la pregunta seleccionada
                $('#question').text(primerPregunta['value']).attr({'data-question':primerPregunta['id'],'data-respuesta':primerPregunta['respuesta']});
                // Muestro las respuestas dependiendo la pregunta seleccionada
                condicionarRespuestas(primerPregunta['id']);
                // Refresco la pregunta siguiente
                if(next==totalPreguntasPrincipalesContandoElCero) { next=0; }
                else { next++; } }
        }
        else { // Es la primer ves que entro en el dom las variables estan virgenes, ejecuto este codigo

            // Selecciono al asar la primer pregunta y parto de hay 
            primerPregunta = shuffle(pregunta);

            // Declaro la pregunta siguiente
            next = primerPregunta[0].id;
            if(next==totalPreguntasPrincipalesContandoElCero) { next=0; }
            else { next++; }

            // Coloco en el div lo correspondiente ha la pregunta seleccionada
            $('#question').text(primerPregunta[0].value).attr({'data-question':primerPregunta[0].id});
            // Muestro las respuestas dependiendo la pregunta seleccionada
            condicionarRespuestas(primerPregunta[0].id); }
    }

    // Funcion para mostrar las preguntas
    function condicionarRespuestas(id_pregunta){

        var respuestasGetFunction = respuestasResponse(id_pregunta);
        var respuestaCorrecta = respuestasGetFunction['contenido'].value1;
        var newArrayForRespuestas = $.map(respuestasGetFunction['contenido'], function(value, index) {
            return [value];
        });

        var newRandomArrayForRespuestas = shuffle(newArrayForRespuestas);

        $("label[for='check1']").text(newRandomArrayForRespuestas[0]);
        $("label[for='check2']").text(newRandomArrayForRespuestas[1]);
        $("label[for='check3']").text(newRandomArrayForRespuestas[2]);
        $("label[for='check4']").text(newRandomArrayForRespuestas[3]);

        $('#contenido-question-pantalla4 label').each(function(){
            var textThis = $(this).text();
            if(respuestaCorrecta==textThis){
                var thisFor = $(this).attr('for');
                $('#contenido-question-pantalla4 input').each(function(){
                    var thisValueCheck = $(this).val();
                    if(thisValueCheck==thisFor){
                        $(this).attr('data-correcto',true);
                    } else { $(this).attr('data-correcto',false); }
                });
            }
        });

    }

    // Funcion para declarar las respuesta a cada pregunta para despues devolver el valor
    function respuestasResponse(id){

        // Colocar las respuestas correctas siempre en el 'value1'
        var respuestasResponse = [];
        respuestasResponse[0] = { 
            contenido:{ 
                value1: 'A la hemoglobina presente en el tejido',
                value2: 'A la falta de luz en el fondo oceánico.',
                value3: 'Al tipo de clorofila de sus bacterias simbióticas',
                value4: 'A las mitocondrias presentes sus células.' } };

        respuestasResponse[1] = { 
            contenido:{ 
                value1: 'Ácido sulfhídrico (H2S)',
                value2: 'Dióxido de carbono (CO2)',
                value3: 'Glucosa (C6H12O6)',
                value4: 'Agua (H2O)' } };

        respuestasResponse[2] = { 
            contenido:{ 
                value1: 'En dos, oxidación de sustancias inorgánicas y fijación de CO2.',
                value2: 'En dos, reducción de sustancias inorgánicas y producción de CO2.',
                value3: 'En dos, reducción de compuestos orgánicos y producción de oxígeno.',
                value4: 'En dos, oxidación de compuestos orgánicos y producción de H2O.' } };

        respuestasResponse[3] = { 
            contenido:{ 
                value1: 'Bacterias simbióticas presentes en sus tejidos.',
                value2: 'Arqueas del ambiente circundante a la fuente hidrotermal.',
                value3: 'Células especializadas presentes en el tejido del anélido.',
                value4: 'Fitoplancton fotosintético del fondo oceánico.' } };

        respuestasResponse[4] = { 
            contenido:{ 
                value1: 'CO2 + O2 + 4H2S → CH2O + 4S + 3H2O',
                value2: '6CO2 + 6H2O -> C6H12O6 + 6O2',
                value3: 'C6H12O6 + 6O2 -> 6CO2 + 6H2O + ATP',
                value4: 'NH3 + O2 + 2H+ + 2e− → NH2OH + H2O' } };

        return respuestasResponse[id];

    }

    // Inicio mi script que se encarga de mostrar la primer pregunta
    selectAQuestion();

});// Fin document ready function







