//aqui van todas las acciones y funciones de javascript

$("#grafico1").click(function(){
    $("#tablagrafico1").fadeIn().unbind("click").click(function(){
        $(this).fadeOut();
    });
})

$('#close-zoomLupa').click(function(){
    $(this).hide();
    $('#detalle-01,#detalle-02,#detalle-03,#detalle-04').hide();
    $('#zoom-lupa').fadeOut();
});

//facor de comentarlas

var DISPERSION = {

    init: function() {
        // inicio

        var self = this;

        self.$sliderTemperatura = $("#slider-temperatura");
        self.$sliderFuerza = $("#slider-fuerza");
        self.$vaso = $("#vaso");
        self.$pantallas = $(".pantalla");
        self.total = self.$pantallas.length;
        self.posicion = 1;

        self.posicionEjercicio = 1;
        self.$preguntas = $(".pregunta");
        self.preguntasCorrectas = 0;

        self.initBindings();
        self.iniciarPantallas();

        self.iniciarPreguntas();
    },

    initBindings: function() {
        // Inicio de bindings
        var self = this,
            fuerza = 0,
            temp = 0;

        self.$sliderTemperatura.slider({
            min: 0,
            max: 100,
            slide: function(event, ui) {
                fuerza = self.$sliderFuerza.slider( "option", "value" );
                self.chequearEstado(ui.value, fuerza);
            }
        });

        self.$sliderFuerza.slider({
            min: 0,
            max: 2,
            step: 1,
            slide: function(event, ui) {
                temp = self.$sliderTemperatura.slider( "option", "value" );
                self.chequearEstado(temp, ui.value);
            }
        });

        $("#btnVanderwaals").click(function() {
            $(this).addClass("naranja");
            $(".contenedor-botones-izquierda").slideDown();
        });

        $(".botonera .btn").click(function() {
            var btn = $(this),
                id = btn.attr("data-id");

            if(id=="" || id==undefined) return;

            $(this).addClass("activa");
            $(".ventana[data-id='"+id+"']").fadeIn();
        });

        $(".ventana .cerrar").click(function() {
            $(this).parent().fadeOut();
        });

        $("#finale .cerrar").click(function() {
            if($("#finale").hasClass("bien")) {
                $('#reiniciar').css('opacity',1);
                activityEnd=true;
            } else {
                self.iniciarPreguntas(true);
                $(this).parent().fadeOut();
            }
        });
    },

    iniciarPantallas: function() {

        if(totalDePantallas){ // Si existe la variable significa que se tiene que navegar con las flechas del footer

            var resizeTimer;
            function hideHeader() { // Función para ocultar el header
                footerImg.attr('src', footerOff)
                $('footer').stop(true, true).animate({
                    bottom: '-=' + footerHeight
                },500, 'swing');
            }

            function buttonActivity(valor){ // Función para cambiar el texto en el footer y cambiar el estado de los botones de navegación
                var initializationOfValor = parseInt(valor);
                switch(initializationOfValor){
                    case 1:
                        $('#instrucciones').text(paneles[0].instrucciones);
                        $('#siguiente').css('opacity',1); 
                        $('#anterior').css('opacity',0.4); 
                        break;
                    case 2:
                        $('#instrucciones').text(paneles[1].instrucciones);
                        $('#siguiente').css('opacity',1); 
                        $('#anterior').css('opacity',1); 
                        break;
                    case 3:
                        $('#instrucciones').text(paneles[2].instrucciones);
                        $('#siguiente').css('opacity',0.4); 
                        $('#anterior').css('opacity',1); 
                        break;
                };

                if (resizeTimer){ // Cuando se le hace click ha cada botón, receto el tiempo para ocultar el footer 
                    clearTimeout(resizeTimer); } 
                resizeTimer = setTimeout(function() { 
                    resizeTimer = null; hideHeader(); }, 7000); 

            }

            $('#siguiente').click(function(){ // Botones de navegacion
                initialization++;
                initialization=parseInt(initialization);
                if(initialization>=3){
                    initialization=3 }
                buttonActivity(initialization);
                if(initialization==2){
                    $('#pantallaUno').hide();
                    $('#pantallaDos').fadeIn(); }
                else if(initialization==3){
                    $('#pantallaDos').hide();
                    $('#pantallaTres').fadeIn(); }
                footerImg.attr('src', footerOn)
                $('footer').stop(true, true).animate({
                    bottom: '=' + footerHeight
                },500, 'swing');
            });

            $('#anterior').click(function(){ // Botones de navegacion
                initialization--;
                initialization=parseInt(initialization);
                if(initialization<=1){
                    initialization=1; }
                console.log(initialization);
                buttonActivity(initialization);
                if(initialization==1){
                    $('#pantallaDos').hide();
                    $('#pantallaUno').fadeIn(); }
                else if(initialization==2){
                    $('#pantallaTres').hide();
                    $('#pantallaDos').fadeIn(); }
                footerImg.attr('src', footerOn)
                $('footer').stop(true, true).animate({
                    bottom: '=' + footerHeight
                },500, 'swing');
            });

        }

    },

    iniciarPreguntas: function(reload) {
        var self = this;
        // si reload == true, relodeamos las preguntas
        self.posicionEjercicio = 1;
        self.$preguntas.hide();
        self.preguntasCorrectas = 0;
        $(self.$preguntas.selector + "[data-pregunta='1']").show();
        self.$preguntas.find(".opcion").removeClass("clicked activa");

        if(reload != true) {
            self.$preguntas.find(".opcion").click(function(e) {
                if($(e.target).attr('id') == 'lupa-01'||
                   $(e.target).attr('id') == 'lupa-02'||
                   $(e.target).attr('id') == 'lupa-03'||
                   $(e.target).attr('id') == 'lupa-04'){
                    var thisE = $(e.target).attr('id');
                    $('#zoom-lupa, #close-zoomLupa').show();
                    switch(thisE){
                        case 'lupa-01':
                            $('#detalle-01').fadeIn();
                            break;
                        case 'lupa-02':
                            $('#detalle-02').fadeIn();
                            break;
                        case 'lupa-03':
                            $('#detalle-03').fadeIn();
                            break;
                        case 'lupa-04':
                            $('#detalle-04').fadeIn();
                            break;
                    }
                }
                else {
                    var $op = $(this);
                    if($op.hasClass("clicked")) return;
                    $op.addClass("clicked activa");
                    $op.siblings().addClass("clicked");
                    if($op.attr("data-correcta") == 1) {
                        self.preguntasCorrectas++;
                    }
                    if(self.posicionEjercicio == 10) {
                        self.grandFinale();
                        return;
                    }
                    setTimeout(function() {
                        $(".pregunta[data-pregunta='"+self.posicionEjercicio+"']").fadeOut(300,function(){
                            self.posicionEjercicio++;
                            $(".pregunta[data-pregunta='"+self.posicionEjercicio+"']").fadeIn();
                        });
                    },500);
                }
            });

            self.$preguntas.each(function() {
                $(this).find(".opcion").shuffle();
            });
        }
    },

    grandFinale: function() {
        var self = this,
            $finale = $("#finale");

        if(self.preguntasCorrectas > 8) {
            $finale.addClass("bien").removeClass("mal");
        } else {
            $finale.addClass("mal").removeClass("bien");
        }
        $finale.find(".respuestas-correctas").text( self.preguntasCorrectas );
        $finale.fadeIn();
    },

    chequearEstado: function(temperatura, fuerza) {
        var self = this;
        switch(fuerza) {
            case 0:
                if(temperatura<25) self.actualizarVaso("solido");
                else if(temperatura>=25 && temperatura<50) self.actualizarVaso("liquido");
                else if(temperatura>=50) self.actualizarVaso("vapor");
                break;
            case 1:
                if(temperatura<45) self.actualizarVaso("solido");
                else if(temperatura>=45 && temperatura<55) self.actualizarVaso("liquido");
                else if(temperatura>=55) self.actualizarVaso("vapor");
                break;
            case 2:
                if(temperatura<50) self.actualizarVaso("solido");
                else if(temperatura>=50 && temperatura<85) self.actualizarVaso("liquido");
                else if(temperatura>=85) self.actualizarVaso("vapor");
                break;
        }
    },

    actualizarVaso: function(estado) {
        var self = this;
        switch(estado) {
            case "liquido":
                self.$vaso.removeClass("solido vapor").addClass("liquido");
                break;
            case "solido":
                self.$vaso.removeClass("liquido vapor").addClass("solido");
                break;
            case "vapor":
                self.$vaso.removeClass("solido liquido").addClass("vapor");
                break;
        }

    }

};

(function($){

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

})(jQuery);

$(function() {
    DISPERSION.init();
})
