var mapa = false;
var grafica = false;
var audio = false;

var preguntas = [
	
	["Concepto y movimiento político y cultural surgido a raíz del desarrollo del nacionalismo que se refiere a la unión de todos los pueblos de origen alemán en un solo Estado:",
		[
			["Pangermanismo",
			true,
			"¡Muy bien! El Imperio alemán promovió la unión de pueblos germanos, aunque esto significara el enfrentamiento con otras naciones."],
			["Paneslavismo",
			false,
			"Considera otra opción. El paneslavismo es la unión de los pueblos eslavos, como croatas, serbios, bajo la tutela de Rusia."],
			["Colonialismo",
			false,
			"Considera otra opción. El colonialismo se refiere al dominio y explotación de territorios por parte de una metrópoli."],
			["Imperialismo",
			false,
			"Considera otra opción. El imperialismo se refiere a la dominación política, económica y cultural de un pueblo sobre otro."]
		]
	],
	
	["A la región de los Balcanes se le llamó el “polvorín” de Europa que originó el estallido del conflicto bélico, ¿por qué?",
		[
			["Ahí se enfrentaron las nacionalidades locales y los intereses de las potencias.",
			true,
			"¡Muy bien! Fue la zona de tensión más importante y en donde cada nación tenía una potencia como aliado."
			],
			["Fue el territorio que Francia reclamó a Alemania.",
			false,
			"Considera otra opción. Francia reclamó a Alemania Alsacia y Lorena, pero no fue el punto donde inició la guerra."
			],
			["Fueron los territorios que Italia reclamó al Imperio austro-húngaro.",
			false,
			"Considera otra opción. Si bien Italia reclamó territorios a Austria-Hungría, esto no inició el conflicto bélico."
			]		
		]
	], 
	
	["¿Cuál fue el verdadero interés de Rusia al apoyar el paneslavismo, particularmente a Serbia?",
		[
			["Acceder a los Balcanes para tener una salida al mar Mediterráneo.",
			true,
			"¡Muy bien! Su objetivo era imperialista: obtener territorios estratégicos para sus intereses comerciales."
			],
			["Ayudar a todos los pueblos de cultura eslava para que formaran un frente común.",
			false,
			"Considera otra opción. Rusia apoyó a Serbia por sus orígenes eslavos, pero también para sacar provecho."
			],
			["Apoyar al Imperio austro-húngaro para que conquistara más territorios.",
			false,
			"Considera otra opción. El enemigo de Rusia fue el Imperio austro-húngaro debido a los intereses en los Balcanes."
			],
			["Iniciar una revolución de carácter socialista.",
			false,
			"Considera otra opción. La revolución socialista rusa se consumó en 1917 y no tuvo relación con el paneslavismo."
			]		
		]
	], 
	
	["¿Cuál fue una causa de la rivalidad nacionalista franco-alemana en Europa?",
		[
			["Los territorios de Alsacia y Lorena que estaban en posesión de Alemania.",
			true,
			"¡Muy bien! Francia cedió estos territorios a Alemania después de su derrota en 1871 y fue el foco de posteriores disputas."
			],
			["Las disputas imperialistas en Marruecos ocurridas en 1904 y 1911.",
			false,
			"Considera otra opción. Las crisis de Marruecos alimentaron el rencor, pero sucedieron fuera de Europa."
			],
			["La reivindicación de los territorios de Polonia",
			false,
			"Considera otra opción. Alemania tenía intereses nacionalistas en Polonia, pero Francia no. "
			],
			["La disputa por la hegemonía industrial, naval y comercial",
			false,
			"Considera otra opción. Esta disputa la tuvo Alemania con Reino Unido."
			]		
		]
	], 
	
	["¿Quiénes conformaron la Triple Alianza?",
		[
			["Alemania, Austria-Hungría e Italia",
			true,
			"¡Muy bien! La Triple Alianza se formó en 1882. Durante el desarrollo de la guerra, Turquía y Bulgaria se adhirieron."
			],
			["Francia, Reino Unido y Rusia",
			false,
			"Considera otra opción. Estos países conformaron la Triple Entente, ala que se sumaron otros países, como EUA."
			],
			["Reino Unido y Francia",
			false,
			"Considera otra opción. Estos países conformaron la Entente Cordiale que se instituyó en 1904."
			],
			["Francia, Alemania y Austria-Hungría",
			false,
			"Considera otra opción. Francia era rival de Alemania y Austria-Hungría."
			]		
		]
	], 
	
	["¿Por qué los países firmantes de la Triple Alianza querían mantener su acuerdo defensivo en secreto?",
		[
			["Para que, en caso de una agresión en su contra, pudieran atacar al enemigo por sorpresa.",
			true,
			"¡Muy bien! Aunque los espías de Francia y Reino Unido, pronto avisaron a sus países de la conformación de la Triple Alianza."
			],
			["Porque todos los acuerdos internacionales siempre se firman en secreto.",
			false,
			"Considera otra opción. La firma en secreto de una alianza militar tiene otros motivos."
			],
			["Porque militarmente eran inferiores a sus oponentes y no podrían hacerles frente.",
			false,
			"Considera otra opción. El poderío militar de Alemania era considerable, por tanto, este no fue un motivo."
			],
			["Para poder avisar después de la existencia de la Triple Alianza.",
			false,
			"Considera otra opción. Ninguno de los países firmantes se tomaría al molestia de avisar a nadie."
			]		
		]
	],
	
	["¿Por qué el tratado de la Triple Alianza menciona abiertamente un posible ataque francés a Italia o a Alemania?",
		[
			["Porque, en caso de guerra, Alemania atacaría a Francia en el norte y quería que Italia la cercara en el sur.",
			true,
			"¡Muy bien! En caso de guerra, el plan de Alemania era rodear a Francia en toda su frontera oriental y derrotarla de inmediato."
			],
			["Para avisar a los italianos, quienes estaban desprotegidos en su frontera con Francia. ",
			false,
			"Considera otra opción. Italia no estaba desprotegida porque también había iniciado la elaboración de armamento."
			],
			["Porque Francia tenía pensado declararle la guerra a Alemania y a Italia al mismo tiempo. ",
			false,
			"Considera otra opción. Francia no tenía intenciones de declarar la guerra a nadie, salvo que primero fuera atacada. "
			],
			["Para ejemplificar el acuerdo y que no hubiera lugar a dudas.",
			false,
			"Considera otra opción. Más que un ejemplo, nombrar a Francia era una declaración abierta que el conflicto sería con ella."
			]		
		]
	],
	
	["Según el tratado de la Triple Alianza, ¿qué sucedería en caso de una agresión a los países firmantes?",
		[
			["Los demás iniciarían un ataque simultáneo al país agresor.",
			true,
			"¡Muy bien! Las alianzas se conformaron para defensa mutua en caso de guerra."
			],
			["Los otros miembros de la alianza lucharían para mantener la paz.",
			false,
			"Considera otra opción. La paz no era opción para ninguno de los países de la Triple Alianza."
			],
			["Se disolvería la alianza y cada país enfrentaría solo sus problemas. ",
			false,
			"Considera otra opción. Ningún país se adhirió a una alianza para quedarse solo. "
			],
			["Pactarían con el país agresor una nueva alianza.",
			false,
			"Considera otra opción. Esto no estaba contemplado, pues Alemania deseaba la guerra y no la paz con Francia."
			]		
		]
	], 
	
	["En promedio, ¿cuál fue el gasto armamentista de cada potencia en 1905?",
		[
			["Entre 500 y 1,200 millones de marcos",
			true,
			"¡Muy bien! El acero y las nuevas fuentes de energía impulsaron nuevas industrias, como la armamentista. "
			],
			["Entre 1,500 y 2,000 millones de marcos",
			false,
			"Considera otra opción. Este fue el gasto de Reino Unido en 1914."
			],
			["3,200 millones de marcos",
			false,
			"Considera otra opción. Este fue el gasto de Alemania en 1914."
			],
			["1,800 millones de marcos",
			false,
			"Considera otra opción. Este fue el gasto de Rusia en 1915."
			]		
		]
	],
	
	["¿Cuál potencia triplicó sus gastos militares en 1914 y por qué? ",
		[
			["Alemania, porque la guerra era inminente para este país.",
			true,
			"¡Muy bien! Las fábricas Krupp alemanas construyeron armas y carros de combate novedosos. "
			],
			["Reino Unido, para mantener y defender su imperio colonial.",
			false,
			"Considera otra opción. Reno Unido invirtió en armamento para defenderse, pero no triplicó sus gastos."
			],
			["Francia, para hacer frente a las amenazas de guerra alemanas.",
			false,
			"Considera otra opción. Francia invirtió en armamento para defenderse, pero no triplicó sus gastos."
			],
			["Rusia, para librar una guerra con Austria-Hungría.",
			false,
			"Considera otra opción. Rusia casi duplicó sus gastos militares."
			]		
		]
	]	
]

$(document).ready(function(){
	if(EsiOs() == true){
		$.getScript( "js/plugins/jquery.animate-enhanced.min.js" ).done(function( script, textStatus ) { Inicio(); });
	} else {
		Inicio();
	}
});


function Inicio(){
	/*mapa = true;
	grafica = true;
	audio = true;*/
	
	preguntas= Shuffle(preguntas);
	preguntas= Shuffle(preguntas);
	
	ChecaExaminar();
	
	
	$(".seccion1")
	.find(".tab")
	.css({
		opacity : 0
	})
	.unbind("click")
	.bind("click", function(){
		var elem = $(this);
		var padre = $(this).parent();
		if($(padre).hasClass("activa")){
			
			$(padre).find(".oculto").removeClass("yano");
			Retraso({
				func : function(){
					$(padre).removeClass("activa");
				},
				tiempo : 200
			});
		} else {
			$(this).parent().addClass("activa");
			Retraso({
				func : function(){
					$(padre).find(".oculto").addClass("yano");
					$(padre).find(".texto").find("p").klokAlinear({h:"center", t : "middle"});
				},
				tiempo : 2500
			});
		}
	});
	
	var menuFalsoMapa = klokMenuFalso({
		id : "menuMapa",
		clase : "menuMapa",
		colocar_en : $("#mapa"),
		valor_default : "Selecciona para Conocer Más",
		regresar_a_default : false,
		opciones : {
			"Imperio Austro-Húngaro" : {
				funcion : function(){
					MostrarTextoMapa("impaustrohungaro", "Zona de tensión, en él coexisten diversas nacionalidades que aspiran a tener su independencia y territorios, mismos que son codiciados por las potencias.");
				}
			},
			"Alemania" : {
				funcion : function(){
					MostrarTextoMapa("alemania", "Alemania quiere reunir en un solo territorio a la población de lengua y cultura alemana. Eso es el pangermanismo.");
				}
			},
			"Balcanes" : {
				funcion : function(){
					MostrarTextoMapa("balcanes", "Fue el polvorín que daría inicio a la guerra. Los países balcánicos entraron en guerra en 1912 y 1913 para hacerse de territorios. Serbia, apoyada de Rusia, quiere ser la potencia, pero Austria-Hungría se lo impide.");
				}
			},
			"Alsacia y Lorena" : {
				funcion : function(){
					MostrarTextoMapa("alsaciaLorena", "Francia reclama los territorios de Alsacia y Lorena, que estaban en manos de Alemania desde 1871.");
				}
			},
			"Reino Unido y Alemania" : {
				funcion : function(){
					MostrarTextoMapa("ukalemania", "El nacionalismo alemán quiere una Alemania poderosa, pero Reino Unido se interpone en su camino por la supremacía industrial comercial y marítima.");
				}
			},
			"Rusia y el Imperio Austro-Húngaro" : {
				funcion : function(){
					MostrarTextoMapa("rusiaimpaustrohungaro", "Rusia desea “liberar” a los eslavos del dominio del Imperio Austro-Húngaro y apoderarse de este territorio para tener paso hacia el mar Mediterráneo, por eso apoya a Serbia.");
				}
			}
		}
	});	
}

function EscondeMapa(){
	$("#mapa").animate({
		top : -560
	}, "easeOutQuad", function(){
		klokMenuFalsoReset($("#menuMapa"));
		MapaAOrigen();
		$("#mapa").hide();
		$(".subseccion1").removeClass("activa");
	});
	mapa = true;
	ChecaExaminar();
}

function MostrarTextoMapa(id, texto){	
	DeStyleNow(id, texto);
}

function CierraMapaInfo(){
	if($(".visto").length == 6){
		$('#cierra1').fadeIn();
	}
	$('.info_mapa').fadeOut();
	MapaAOrigen2();
}

function MuestraMapa(){
	$("#mapa").show();
	if($(".visto").length == 6){
		$('#cierra1').show();
	} else {
		$('#cierra1').hide();
	}
	$("#mapa").animate({
		top : 0
	}, "easeOutQuad");
}

function ChecaExaminar(){
	if(mapa == true && grafica == true && audio == true){
		$(".btactividad").show("drop", {direction: "left"});
	} else if(grafica == true && audio == true){
		$(".subseccion2").removeClass("activa");
	}
}

function MuestraExamen(){
	$(".hoja_ejercicio").hide();
	$(".ejercicio").show("drop", {direction: "left"});
	$(".examinar_inicio").show();
	$(".examinar_inicio").find(".texto").find("p").klokAlinear({h:"center", t : "middle"});
	$(".examinar_inicio").hide();
	$(".examinar_inicio").fadeIn();
	$(".btactividad").hide("drop", {direction: "right"});
}

function IniciarEjercicio(){
	$(".fondoejercicio").animate({
		left : -790
	}, 500);
	$(".examinar_inicio").fadeOut(function(){
		PreguntasEjercicio(0);	
	});
}

function PreguntasEjercicio( no ){
	$(".hoja_ejercicio").hide("drop", {direction: "left"}, function(){
		console.log(no + " " + preguntas.length);
		if(no == preguntas.length){
			RetroFinal();
		} else {
			var numero = Number(no + 1);
			$(".hoja_ejercicio").find(".numero").html("Pregunta No. "+numero);
			$(".hoja_ejercicio").find(".pregunta").html(preguntas[no][0]);
			var respuestas = Shuffle(preguntas[no][1]);
			var ul = $(".hoja_ejercicio").find(".respuestas");
			$(ul).empty();
			for(var p = 0; p < respuestas.length; p++){
				var li = $("<li></li>").appendTo($(ul));
				$(li).html(respuestas[p][0])
					.data("correcta", respuestas[p][1])
					.data("retro", respuestas[p][2])
					.click(function(){
						if(!$(this).hasClass("ya")){
							$(this).addClass("ya");
							if($(this).data("correcta") == true){
								MuestraRetro($(this).data("retro"), Number(no + 1));
							} else {
								MuestraRetro($(this).data("retro"), false);
							}
						}
					})
			}
			$(".hoja_ejercicio").show("drop", {direction: "right"});
		}
	});
}

function RetroFinal(){
	$(".retrofinal").fadeIn();
}

function Reset(){
	mapa = false;
	grafica = false;
	audio = false;
	$(".retrofinal").fadeOut(function(){
	
		$(".ejercicio").hide("drop", {direction: "left"}, function(){
			$(".fondoejercicio").css({left : 0});
			$(".oculto").removeClass("yano");
			$(".activa").removeClass("activa");
			$(".visto").removeClass("visto");
		});
		
		Inicio();
	});
	
}

function MuestraMapaInfo(id, texto){
	setTimeout(function(){
		$(".info_mapa").show();
		$(".info_mapa").find(".texto").find("p").html(texto).klokAlinear({h:"center", t : "middle"});
		$(".info_mapa").hide();
		$(".info_mapa").fadeIn(500);
	}, 500);
}

function MuestraGrafica(){
	$(".grafica").show("drop", {direction: "up"});
}

function EscondeRetro(){
	$(".ejercicio").find(".retroalimentacion").fadeOut();
}

function MuestraRetro(texto, siguiente){
	$(".ejercicio").find(".retroalimentacion").show();
	$(".ejercicio").find(".retroalimentacion").find(".textop").find("p").html(texto).klokAlinear({h:"center", t : "middle"});;
	$(".ejercicio").find(".retroalimentacion").hide();
	$(".ejercicio").find(".retroalimentacion").fadeIn();
	if(siguiente !== false){
		$(".ejercicio").find(".retroalimentacion").find(".bt_cerrar_ch").unbind("click").bind("click", function(){
			$(".ejercicio").find(".retroalimentacion").fadeOut(function(){
				PreguntasEjercicio( siguiente );
			});
		});
	} else {
		$(".ejercicio").find(".retroalimentacion").find(".bt_cerrar_ch").unbind("click").bind("click", function(){
			EscondeRetro();
		});
	}
}

function Grafica5(){
	$(".btcinco").addClass("activo");
	var arreglo = {
		"francia" : 854,
		"rusia" : 1603,
		"alemania" : 938,
		"ru" : 1257,
		"ah" : 555
	}
	var cnt = 1;
	$.each(arreglo, function(key, value){
		var h = (value*233)/3500;
		$(".barracinco."+key).animate({height : h}, 1000*(cnt/2), "easeOutBack", function(){
			$(this).addClass("grafik2");
		});
		cnt += 1;
	});
	ChecaGrafica();
	
}

function Grafica14(){
	$(".btcatorce").addClass("activo");
	var arreglo = {
		"francia" : 1286,
		"rusia" : 1834,
		"alemania" : 3244,
		"ru" : 1640,
		"ah" : 740
	}
	
	var cnt = 1;
	$.each(arreglo, function(key, value){
		var h = (value*233)/3500;
		$(".barracatorce."+key).animate({height : h}, 1000*(cnt/4), "easeOutBack", function(){
			$(this).addClass("grafik2");
		});
		cnt += 1;
	})
	ChecaGrafica();
}

function ChecaGrafica(){
	if($(".btcatorce").hasClass("activo") && $(".btcinco").hasClass("activo")){
		setTimeout(function(){
			MuestraGraficaFinal();
			$(".grf").fadeIn();
		}, 3000);		
	}
}

function GraficaACeros(){
	$(".barra").animate({height : 0}, 500, "easeOutQuad", function(){
		$(this).addClass("grafik2");
		$(".grf").fadeOut();
	});
	$(".btcatorce, .btcinco").removeClass("activo");
}

function EscondeGrafica(){
	
	GraficaACeros();
	setTimeout(function(){
		$(".grafica").hide("drop", {direction: "up"});	
	}, 1000);
	grafica = true;
	ChecaExaminar();
}

function MuestraGraficaFinal(){
	$(".grafica").find(".final").show("drop", {direction: "down"}, function(){
		$(".grafica").find(".final").find(".texto").find("p").klokAlinear({h:"center", t : "middle"});
	});
}

function EscondeGraficaFinal(){
	$(".grafica").find(".final").hide("drop", {direction: "down"});
}

function MuestraAudio(){
	$(".audio").show("drop", {direction: "right"}, function(){
		ReproduceAudio();
	});
}

function EscondeAudio(){
	
	$(".audio").hide("drop", {direction: "right"});
	var media = document.getElementById('sonido');
	media.currentTime = 0;
	media.pause();
	$("#audio_slider").css({
	        left : -13 
	    })
	audio = true;
	ChecaExaminar();
}

function ReproduceAudio(){
	$(".audio_play").fadeIn();
    $(".audio_pausa").fadeOut();
	var media = document.getElementById('sonido');
	media.addEventListener("pause", function() {
    	$(".audio_play").fadeIn();
    	$(".audio_pausa").fadeOut();
    }, true);
    media.addEventListener("play", function() {
    	$(".audio_play").fadeOut();
    	$(".audio_pausa").fadeIn();
    }, true);
    media.addEventListener("timeupdate", Progreso, true); 
    
    $(".audio_play").unbind("click").bind("click", function(){
	   media.play(); 
    });
    
     $(".audio_pausa").unbind("click").bind("click", function(){
	   media.pause(); 
    });
    
    $("#audio_slider").css({
	        left : -13 
	    });
}

function Progreso() { 
    var oAudio = document.getElementById('sonido'); 
    var elapsedTime = Math.round(oAudio.currentTime);
    var fWidth = (elapsedTime * 266) / oAudio.duration;
	if (fWidth > 0) {
	    $(".audio_slider").css({
	        left : -13 + fWidth
	    })
	}
}














