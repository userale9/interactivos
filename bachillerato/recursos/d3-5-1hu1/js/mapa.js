var zonas = [
	$("#balcanes"), $("#rusiaimpaustrohungaro"), $("#impaustrohungaro"), $("#alemania"), $("#ukalemania"), $("#alsaciaLorena")
];

$(zonas).each(function(){
	$(this).hide();
});

function StyleNow( ob ){
	$(ob).hide();
}

function DeStyleNow( id, texto ){	
	$(zonas).each(function(){	
		if($(this) != $("#"+id)){
			$(this).fadeOut();
		}
	});
	
	$("#elmapiux").animate({
		width : 688,
		height : 468,
		top : 0,
		left : 0
	}, 500, "easeOutCubic", function(){
		$("#"+id).fadeIn(function(){
		    var ancho = $("#"+id)[0].getBoundingClientRect().width;
		    var alto = $("#"+id)[0].getBoundingClientRect().height;
		    
		    
		    
		    var prop = (688/ancho)*.8;
		    var proph = (468/alto)*.8;
		    
		    if(688 * prop > 688){
			    prop = proph;
		    }
		    
		   /* 
		   	var top = $("#"+id)[0].getBoundingClientRect().top;
		    var left = $("#"+id)[0].getBoundingClientRect().left;
		   	var nuevoTop = (0 - (top * prop)) + ((468 - (alto * prop))/2);
		    var nuevoLeft = (0 - (left * prop)) + ((688 - (ancho * prop))/2);*/
		    
		    var top = $("#"+id)[0].getBoundingClientRect().top - $("#map").offset().top;
		    var left = $("#"+id)[0].getBoundingClientRect().left - $("#map").offset().left;
		    
		    var nuevoTop = (0 - (top * prop)) + ((468 - (alto * prop))/2);
		    var nuevoLeft = (0 - (left * prop)) + ((688 - (ancho * prop))/2);
		    
		    if(id == "rusiaimpaustrohungaro"){
			    nuevoLeft = 0;
			    nuevoTop = 0;
		    }
			    
		    $("#elmapiux").animate({
		        width : 688 * prop,
		        height : 468 * prop,
		        top : nuevoTop,
		        left : nuevoLeft
		    }, 500, "easeOutCubic", function(){
			    parent.MuestraMapaInfo(id, texto);
		    })
		});
	})	
}

function MapaAOrigen(){
	$("#elmapiux").css({
		width : 688,
		height : 468,
		top : 0,
		left : 0
	});
	
	$(zonas).each(function(){
		$(this).hide();
	});
}

function MapaAOrigen2(){
	$("#elmapiux").animate({
		width : 688,
		height : 468,
		top : 0,
		left : 0
	}, 500);
}