/* ========================
Klok -> [Alejandro Pacheco],
Version = 1.0,
Creado: 23/10/14,
Ultima modificacion: 27/10/14
======================== */
$(document).ready(function(){

    // Declaro las pantallas
    var pantalla1 = $('#pantalla1');
    var pantalla2 = $('#pantalla2');

    // Declaro los sonidos
    var sonidoError = document.getElementById('sonido-error');
    var sonidoSuccess = document.getElementById('sonido-success');

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

    // Esta funcion devuelve un valor de un objeto al azar
    function pickRandomProperty(obj) {
        var result;
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1/++count)
                result = prop;
        return result;
    }

    // Ejercicio 1 -> [variables y funciones]
    function ejercicio1(){

        // Navegacion de las pantallas -> [click]
        $('#button-next-question').click(function(){
            $('#overlay-ejercicio1').hide();
            $('#droppable-contenedor').html('');
            cicloPreguntas();
            return false;
        });

        $('#button-next-ejercicion').click(function(){
            pantalla1.hide();
            pantalla2.fadeIn();
            ejercicio2();
            return false;
        });

        // Declaro contenedores
        var preguntaHtml = $('#pregunta p');

        // Declaro variables
        var respuestasCorrectas = 0,
            minRespuestasCorrectas = 10,
            cantidadPreguntas = 6,
            preguntasUtilizadas = null,
            tiempoDeEspera = 3000;

        // Declaro un objeto en el cual almaceno las preguntas
        var preguntas = {
            1: 'Transporte de sustancias y comunicación celular',
            2: 'Centro de información y reproducción celular',
            3: 'Elaboración y transporte de biomoléculas.',
            4: 'Almacenamiento y procesamiento de sustancias',
            5: 'Procesos energéticos',
            6: 'Soporte y movimiento'
        };

        // Declaro un objeto en el cual amaceno las respuestas
        var respuestas = {
            1: 'Membrana plasmática',
            2: 'Núcleo',
            3: ['Ribosomas','Aparato de Golgi','Retículo endoplásmico rugoso','Retículo endoplásmico liso'],
            4: ['Vacuolas','Peroxisomas','Lisosomas'],
            5: 'Mitocondrias',
            6 : ['Citoesqueleto','Citosol']
        };

        // Al iniciar la funcion ejercicio1 inicio la funcion "cicloPreguntas" le envio las preguntas
        cicloPreguntas();

        // Reacomodo las respuestas ->
        var respuestaAcomodoColumna1 = [];
        $('#columna-1 .respuesta').each(function(){
            var thisDiv = $(this);
            $(this).remove();
            respuestaAcomodoColumna1.push(thisDiv); });
        var newOrdenDivs = shuffle(respuestaAcomodoColumna1);
        for(var i=0; i < newOrdenDivs.length; i++){
            $('#columna-1').append(newOrdenDivs[i]);
            $('#columna-1').children('.respuesta').show();}

        var respuestaAcomodoColumna2 = [];
        $('#columna-2 .respuesta').each(function(){
            var thisDiv = $(this);
            $(this).remove();
            respuestaAcomodoColumna2.push(thisDiv); });
        var newOrdenDivs = shuffle(respuestaAcomodoColumna2);
        for(var i=0; i < newOrdenDivs.length; i++){
            $('#columna-2').append(newOrdenDivs[i]);
            $('#columna-2').children('.respuesta').show();}

        var respuestaAcomodoColumna3 = [];
        $('#columna-3 .respuesta').each(function(){
            var thisDiv = $(this);
            $(this).remove();
            respuestaAcomodoColumna3.push(thisDiv); });
        var newOrdenDivs = shuffle(respuestaAcomodoColumna3);
        for(var i=0; i < newOrdenDivs.length; i++){
            $('#columna-3').append(newOrdenDivs[i]);
            $('#columna-3').children('.respuesta').show();}
        // <- Fin reacomodo las respuestas 

        // Funciones de jquery ui -> [drag & drop]
        $('.draggable').draggable({
            revert: "invalid" });

        // Obtengo una pregunta al azar
        function cicloPreguntas(){
            var preguntaAzar = pickRandomProperty(preguntas);
            if(!preguntaAzar){
                if(respuestasCorrectas>=10){
                    if(respuestasCorrectas>=13){ respuestasCorrectas=12; }
                    $('#n-title2').text(respuestasCorrectas);
                    $('#overlay2-ejercicio1').show();
                }
                else {
                    ejercicio1();
                }
            }
            else {
                showPregunta(preguntaAzar);}
        }

        function showPregunta(valor){

            // Agrego la pregunta obtenida a la variable global
            preguntasUtilizadas = valor;

            // Agrego el texto de la nueva pregunta
            preguntaHtml.text(preguntas[valor]);

            if(valor==1){
                $('#n-s').text('de 1 organelos encargados del trasporte de sustancias y comunicación celula.'); }
            else if(valor==2){
                $('#n-s').text('de 1 organelos encargados del centro de información y reproducción de la célula.'); }
            else if(valor==3){
                $('#n-s').text('de 4 organelos encargados de la elaboración y transporte de biomoléculas en la célula.'); }
            else if(valor==4){
                $('#n-s').text('de 3 organelos encargados del almacenamiento y procesamiento de sustancias en la célula.'); }
            else if(valor==5){
                $('#n-s').text('de 1 organelos encargados de los procesos energéticos celularaes.'); }
            else if(valor==6){
                $('#n-s').text('de 2 organelos encargados del soporte y movimiento de la célula.'); }

            // Llamo la funcion que muestra las cajas de respuesta
            mostrarCajasPregunta(valor);

            // Oculto todas las imagenes de la celula
            $('#celula-active img').each(function(){
                $(this).hide();
            });

            $('.draggable').each(function(){
                $(this).children('.text-drag').css({'display':'block', 'cursor':'pointer'});
            });

            // Funcion para mostrar las cajas correspondientes a cada pregunta
            function mostrarCajasPregunta(datax){

                // Convierto el parametro recivido a entero
                var entero = parseInt(datax);

                // Le agrego la cantidad de cajas necesarias para cada pregunta
                switch(entero){
                    case 1:
                        $('#droppable-contenedor').append('<div class="box droppable" data-respuestas="1"></div>');
                        break;
                    case 2:
                        $('#droppable-contenedor').append('<div class="box droppable" data-respuestas="2"></div>');
                        break;
                    case 3:
                        for (var i = 0; i < 4; i++) {
                            $('#droppable-contenedor').append('<div class="box droppable" data-respuestas="3"></div>'); }
                        break;
                    case 4:
                        for (var i = 0; i < 3; i++) {
                            $('#droppable-contenedor').append('<div class="box droppable" data-respuestas="4"></div>'); }
                        break;
                    case 5:
                        $('#droppable-contenedor').append('<div class="box droppable" data-respuestas="5"></div>');
                        break;
                    case 6:
                        for (var i = 0; i < 2; i++) {
                            $('#droppable-contenedor').append('<div class="box droppable" data-respuestas="6"></div>'); }
                        break;
                }

                // Por cada pregunta inicializo esta variable en cero
                var success = 0;

                // Creo la interactividad de jquery ui
                $(".droppable").droppable({
                    drop: function(event, ui) {
                        var drop = $(this),
                            drag = $(ui.draggable);

                        if(drag.attr('data-respuesta') == drop.attr('data-respuestas')){
                            sonidoSuccess.play();
                            respuestasCorrectas++;
                            success++;

                            drop.html('<div class="table"><div class="table-cell"><p>'+drag.children('.text-drag').text()+'</p></div></div>').addClass('active');

                            drop.droppable("disable");

                            drag.children('.text-drag').css({'display':'none', 'cursor':'default'});
                            drag.draggable("option", "revert", true);
                            setTimeout(function() {
                                drag.draggable("option", "revert", "invalid");
                            }, 300);

                            // Muestro las imagenes de la celula
                            $('#celula-active img').each(function(){
                                var imgId = $(this).attr('data-active');
                                if(drag.attr('data-img')==imgId){
                                    $(this).show(); }
                            });

                            if(success == $('.box').length){

                                // Borro la pregunta utilizada
                                delete preguntas[preguntasUtilizadas];

                                setTimeout(function(){  

                                    $('#n-title').text(success);

                                    $('#overlay-ejercicio1').show();

                                }, tiempoDeEspera);

                                drag.draggable("option", "revert", true);
                                setTimeout(function() {
                                    drag.draggable("option", "revert", "invalid");
                                }, 300);

                            }
                        }
                        else {

                            $('#droppable-contenedor').html('');

                            sonidoError.play();

                            // Borro la pregunta utilizada
                            delete preguntas[preguntasUtilizadas];

                            drag.draggable("option", "revert", true);
                            setTimeout(function() {
                                drag.draggable("option", "revert", "invalid");
                            }, 300);

                            // Repito el ciclo
                            cicloPreguntas();
                        }

                    }
                });

            }

        }

    }  ejercicio1(); // Fin ejercicio 1 -> [variables y funciones] 

    // Ejercicio 2 -> [variables y funciones]
    function ejercicio2(){

        // Click en el boton principal del interactivo
        $('#button-retroalimentacion-pantalla2').click(function(e){
            var idButton = $(this).attr('data-id');

            if(left_correctas==3 && right_correctas==3){
                $('#retroalimentacion-pantalla2')
                .html('Excelente!<br/>¿No crees que hoy aprendiste un poquito más de ti y las unidades que conforman a todos los seres vivos?');
                $(this)
                .attr('data-id',2)
                .children('img').attr('src','img/atras.png');
                $('#text-question-pantalla2').text(''); }
            else {
                if(idButton==1){
                    $('#overlay-pantalla2').hide();
                    $('#retroalimentacion-pantalla2').html(''); } 
            }

            if(idButton==2){ location.reload(); }

            e.preventDefault();
        });

        // Variables 
        var left_correctas = 0,
            right_correctas = 0,
            retro1 = 'Muy bien!<br/>Lograste inferir algunas de las características que permiten la contracción de los miocitos y, por tanto, de tus músculos.',
            retro2 = '¡Correcto! <br/>Ahora conoces algunas de las peculiaridades que permiten que los macrófagos inicien parte de la respuesta inmune innata, fagociten microoganismos como virus y bacterias e ingieran células muertas';

        // Declaro preguntas
        var preguntas = {
            1: 'Comparados con los de otras células, sus lisosomas son de mayor tamaño',
            2: 'Utiliza varias partes de su citoesqueleto para moverse ágilmente.',
            3: 'Su membrana plasmática detecta cuerpos extraños.',
            4: 'Sus mitocondrias son de gran tamaño, permitiéndole producir bastante energía.',
            5: 'Su retículo endoplásmico se especializa en el almacenamiento de iones de calcio.',
            6: 'Al recibir una señal eléctrica en la membrana plasmática, los diferentes componentes de su citoesqueleto pueden unirse y hacer que se contraiga.'
        }

        var preguntaAzar;
        function ciclePreguntas(){

            // Empiezo seleccionando una pregunta al azar
            preguntaAzar = pickRandomProperty(preguntas);
            preguntaAzar = parseInt(preguntaAzar); 

            // Agrego propiedades correspondientes a cada prugunta seleccionada
            switch(preguntaAzar){
                case 1:
                    $('#left-button-ejercicio2').attr('data-correct',true);
                    $('#right-button-ejercicio2').attr('data-correct',false);
                    $('#text-question-pantalla2').text(preguntas[preguntaAzar]);
                    break;
                case 2:
                    $('#left-button-ejercicio2').attr('data-correct',true);
                    $('#right-button-ejercicio2').attr('data-correct',false);
                    $('#text-question-pantalla2').text(preguntas[preguntaAzar]);
                    break;
                case 3:
                    $('#left-button-ejercicio2').attr('data-correct',true);
                    $('#right-button-ejercicio2').attr('data-correct',false);
                    $('#text-question-pantalla2').text(preguntas[preguntaAzar]);
                    break;
                case 4:
                    $('#right-button-ejercicio2').attr('data-correct',true);
                    $('#left-button-ejercicio2').attr('data-correct',false);
                    $('#text-question-pantalla2').text(preguntas[preguntaAzar]);
                    break;
                case 5:
                    $('#right-button-ejercicio2').attr('data-correct',true);
                    $('#left-button-ejercicio2').attr('data-correct',false);
                    $('#text-question-pantalla2').text(preguntas[preguntaAzar]);
                    break;
                case 6:
                    $('#right-button-ejercicio2').attr('data-correct',true);
                    $('#left-button-ejercicio2').attr('data-correct',false);
                    $('#text-question-pantalla2').text(preguntas[preguntaAzar]);
                    break;
            }

        } ciclePreguntas(); // si es la primera vez inicio el ciclo

        // On click left button
        $('#left-button-ejercicio2').click(function(){
            if($(this).attr('data-correct')=='true'){
                left_correctas++;
                if(left_correctas==3){
                    $('#retroalimentacion-pantalla2').html(retro1);
                    $('#button-retroalimentacion-pantalla2').attr('data-id',1);
                    $('#overlay-pantalla2').fadeIn(); }
                $('#bottom-left-pantalla2').append('<article class="box">'+ preguntas[preguntaAzar] +'</article>');
                delete preguntas[preguntaAzar];
                ciclePreguntas();
            } else { $(this).children('img').effect( "shake" ); sonidoError.play(); }
            return false;
        });

        // On click right button
        $('#right-button-ejercicio2').click(function(){
            if($(this).attr('data-correct')=='true'){
                right_correctas++;
                if(right_correctas==3){
                    $('#retroalimentacion-pantalla2').html(retro2);
                    $('#button-retroalimentacion-pantalla2').attr('data-id',1);
                    $('#overlay-pantalla2').fadeIn(); }
                $('#bottom-right-pantalla2').append('<article class="box">'+ preguntas[preguntaAzar] +'</article>');
                delete preguntas[preguntaAzar];
                ciclePreguntas();
            } else { $(this).children('img').effect( "shake" ); sonidoError.play(); }
            return false;
        });

    } // Fin ejercicio 2 -> [variables y funciones]



});// Fin document ready function







