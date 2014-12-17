/* ========================
Klok -> [Alejandro Pacheco],
Version = 1.0,
Creado: 21/10/14,
Ultima modificacion: 21/10/14
======================== */
$(document).ready(function(){

    // Variables globales
    var pantalla1 = $('#pantalla1');
    var pantalla2 = $('#pantalla2');
    var pantalla3 = $('#pantalla3');
    var pantalla4 = $('#pantalla4');
    // Declaro el total de preguntas para despues mostrar la pantalla final en caso de contestar todo bien
    var totalPreguntas = 10; // Si se agrega una nueva pregunta es nesesario configurar showQuestion() y cuestionario()

    // Scrollbar
    $('#headerTab').click(function(){
        $('#contenido-pantalla1').customScrollbar();
        return false;
    });

    $('#buttonNextp1').click(function(){
        pantalla1.hide();
        pantalla2.hide().fadeIn('slow');
        return false;
    });

    $('#button-tablaShow').click(function(){
        pantalla3.css({
            'transform':'scale(1)',
            'opacity':1
        });
        $('#table-pantalla3').customScrollbar();
        return false;
    });

    $('#close-pantalla3').click(function(){
        pantalla3.css({
            'transform':'scale(0)',
            'opacity':0
        });
        return false;
    });

    $('#closeImgCerrarp4').click(function(){
        pantalla4.hide();
        $('#contenido-pantalla1').customScrollbar();
        location.reload();
        return false;
    });

    // Funcion que se encarga de cambiar las imagenes en "detalles del virus"
    function changeImg(ImgNum){

        var url = 'img/detalleVirus/';
        var imgTag = $('#searchImageDetalle');

        var imgNombre = new Array();
        imgNombre[0] = '1_papovirus_detalle.png';
        imgNombre[1] = '2_poxvirus_detalle.png';
        imgNombre[2] = '3_herpesvirus_detalle.png';
        imgNombre[3] = '4_adenovirus_detalle.png';
        imgNombre[4] = '5_picornavirus_detalle.png';
        imgNombre[5] = '6_reovirus_detalle.png';
        imgNombre[6] = '7_togavirus_detalle.png';
        imgNombre[7] = '8_retrovirus_detalle.png';
        imgNombre[8] = '9_ortomixovirus_detalle.png';
        imgNombre[9] = '10_paramixovirus_detalle.png';
        imgNombre[10] = '11_rhabdovirus_detalle.png';

        imgTag.attr('src', url + imgNombre[ImgNum]);

        $('#detalleVirus').css({
            'left':0
        });

    }// Fin funcion que se encarga de cambiar las imagenes en "detalles del virus"

    $('.virusImg').click(function(){
        var thisImg = $(this).attr('data-this');
        changeImg(thisImg);
        return false;
    });

    $('#closeImgCerrar').click(function(){
        $('#detalleVirus').css({
            'left':'-100%'
        });
    });

    $('#comprobar-button').click(function(){
        var question = $('#question-pantalla2').attr('data-question');
        var answer = $('#respuesta').val();
        cuestionario(question,answer);
        return false;
    });

    $('#closeImgCerrar-callback-pregunta').click(function(){
        $('#callback-pregunta, #success-pregunta, #error-pregunta').fadeOut();
        return false;
    });

    function cuestionario(id_question,answer){

        // Limpio la respuesta que se recibió de acentos espacios
        var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
        var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
        for (var i=0; i<acentos.length; i++) {
            answer = answer.replace(acentos.charAt(i), original.charAt(i));  }
        answer = answer.replace(/^(\s)*/,"").replace(/(\s)*$/,"").replace(/(\s+)/g," ");

        // Creo una variable en la cual se podrá saber la contestación del formulario
        var responseSwitch;

        // Convierto el parámetro recibido en numero entero
        var questionId = parseInt(id_question);

        // A la pregunta recibida le condiciono la respuesta recibida
        switch(questionId){
            case 1:
                answer = answer.toLowerCase();
                if(answer=='cinco' || answer==5){
                    responseSwitch=true; } 
                else {
                    responseSwitch=false; }
                break;
            case 2:
                answer = answer.toLowerCase();
                if(answer=='seis' || answer==6){
                    responseSwitch=true; } 
                else {
                    responseSwitch=false; }
                break;
            case 3:
                answer = answer.toLowerCase();
                if(answer=='seis' || answer==6){
                    responseSwitch=true;} 
                else {
                    responseSwitch=false; }
                break;
            case 4:
                answer = answer.toLowerCase();
                if(answer=='icosaedrica y helicoidal' || answer=='helicoidal y icosaedrica'){
                    responseSwitch=true;} 
                else {
                    responseSwitch=false; }
                break;
            case 5:
                answer = answer.toLowerCase();
                if(answer=='papovavirus'){
                    responseSwitch=true;} 
                else {
                    responseSwitch=false; }
                break;
            case 6:
                answer = answer.toLowerCase();
                if(answer=='ortomixovirus'){
                    responseSwitch=true;} 
                else {
                    responseSwitch=false; }
                break;
            case 7: // En este caso no se convertirá en minúsculas ya que solo con mayúsculas es correcto
                if(answer=='ARN'){
                    responseSwitch=true;} 
                else {
                    responseSwitch=false; }
                break;
            case 8:
                answer = answer.toLowerCase();
                answer = answer.replace(/[y`~!@$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/(\s+)/g," ");
                var palabras = answer.split(' ');
                var q1;
                var q2;
                var q3;
                var q4;

                if(palabras[0]==''){
                    answer = answer.replace(' ',"");
                    palabras = answer.split(' '); }
                else {}

                for(var i=0; i < palabras.length; i++){
                    if(palabras[i]=='adenovirus'){
                        q1=true; }
                    if(palabras[i]=='picornavirus'){
                        q2=true; }
                    if(palabras[i]=='ortomixovirus'){
                        q3=true; }
                    if(palabras[i]=='paramixovirus'){
                        q4=true; } 
                }

                if(q1 && q2 && q3 && q4){
                    responseSwitch=true; }
                else {
                    responseSwitch=false; }

                break;
            case 9:
                answer = answer.toLowerCase();
                if(answer=='poxvirus'){
                    responseSwitch=true;} 
                else {
                    responseSwitch=false; }
                break;
            case 10:
                answer = answer.toLowerCase();
                if(answer=='picornavirus'){
                    responseSwitch=true;} 
                else {
                    responseSwitch=false; }
                break;

        }// Fin switch

        if(responseSwitch){
            if(questionId==totalPreguntas){
                pantalla2.hide();
                pantalla4.hide().fadeIn();
                showQuestion(1); }
            else {
                $('#callback-pregunta').show();
                $('#success-pregunta').hide().fadeIn();
                questionId++;
                showQuestion(questionId); }
        }
        else {
            $('#callback-pregunta').show();
            $('#error-pregunta').hide().fadeIn();
        }

    }// Fin funcion cuestionario


    function showQuestion(questionNext){

        var allPreguntas = new Array();
        allPreguntas[1] = '¿Cuántas familias incluyen virus que contienen ADN?';
        allPreguntas[2] = '¿Cuántas familias incluyen virus que contienen ARN?';
        allPreguntas[3] = '¿Cuántas familias incluyen virus con ácidos nucleicos de cadena sencilla?';
        allPreguntas[4] = 'Nombra las dos formas virales más comunes.';
        allPreguntas[5] = '¿A qué familia pertenece el virus del papiloma humano?';
        allPreguntas[6] = '¿A qué familia pertenece el virus causante de la influenza?';
        allPreguntas[7] = '¿Qué tipo de ácido nucleico contiene el virus de la rabia? Escribe solo sus siglas, sin incluir si es mono o bicatenario.';
        allPreguntas[8] = '¿Qué familias incluyen virus causantes de enfermedades respiratorias?';
        allPreguntas[9] = '¿Qué familia tiene a los virus de mayor tamaño?';
        allPreguntas[10] = '¿Qué familia contiene a los virus más pequeños?';

        // Declaro la etiqueta donde se colocara la pregunta
        var tagDelTexto = $('#question-pantalla2');

        // Convierto el parámetro recibido en numero entero
        var nextQuestion = parseInt(questionNext);

        // Muestro la siguiente pregunta y vacio el textarea
        tagDelTexto.text(allPreguntas[nextQuestion]);
        tagDelTexto.attr('data-question',nextQuestion);
        $('#respuesta').val('');

    }

});







