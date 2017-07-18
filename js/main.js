$(document).ready(function() {

	// -- FUNCION PERFILES --
	$(".btn_editar_profile").click(function() {
		$(".contenido_over_perfil").load(".sec_data_user");
		$(".sec_publicaciones").css({display:"none"});
		$(".sec_data_user").css({display:"none"}).fadeIn(800);
	});

	$(".btn_publication, .btn_reg").click(function() {
		$(".contenido_over_perfil").load(".sec_publicaciones");
		$(".sec_data_user").css({display:"none"});
		$(".sec_publicaciones").css({display:"none"}).fadeIn(800);
	});
	
	$.material.init();
	
	$('.carousel').carousel({
	  interval: 3000
	})

  $('.carousel_influencers, .carousel_destacados').owlCarousel({
  		autoplay:true,
	    autoplayTimeout:4000,
  		autoplaySpeed:1500,
	    rewind:true,
	    margin:10,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        450:{
	        	items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})


  $('.carousel_favoritos').owlCarousel({
  		// autoplay:true,
	    autoplayTimeout:5000,
  		autoplaySpeed:1500,
	    rewind:true,
	    margin:10,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        450:{
	        	items:2
	        },
	        600:{
	            items:3
	        }
	    }
	})



	$(".btn_buscar").click(function() {
		$(".buscador").slideDown(250);
	});

	$(".btn_cerrar_busqueda").click(function() {
		$(".buscador").slideUp(250);
	});


	// ---Funciones Cambio Scroll ---	
	$(window).scroll(function(){

		var cambio=($(window).scrollTop()>0)?true:false;

		if (cambio){	
			$(".h_logo").fadeOut();
			$(".logo_hover").fadeIn();
		}else{
			$(".h_logo").fadeIn();
			$(".logo_hover").fadeOut();
		};
	});



	// ---Funciones menu ---	
	$(".btn_menu").click(function() {
		$(".bg").fadeIn(200);
		$(".contenedor_gral").animate({"margin-left": '25%'}, 250);
		$(".menu_desplegable").animate({"left": '0'}, 250);
	});

	$(".bg, .cerrar_menu").click(function(event) {
		$(".bg").fadeOut(200);
		$(".menu_desplegable").animate({"left": '-100%'},250);
		$(".contenedor_gral").animate({"margin-left": '0'}, 250);
	});


	
	 var altura = $('.publicidad_lateral').offset().top;

	 $(window).on('scroll', function(){

        if( $(window).scrollTop() > altura ) {
            $('.publicidad_lateral').addClass('publicidad_lateral-fixed');
        } else {
            $('.publicidad_lateral').removeClass('publicidad_lateral-fixed');
        }
        
    })

	 $(window).scroll(function(){
		var cambio=($(window).scrollTop()>100)?true:false;
		if (cambio){
			$('.btn_new_post').css({"right": "2%"})
		}else{
			$('.btn_new_post').css({"right": "-100%"})
		};
	});

	// $(window).scroll(function(){
	// 	if( $(this).scrollTop() > 0 ){
	// 		$('.btn_new_post').animate({"right": "2%"}, 600)
	// 	} else {
	// 		$('.btn_new_post').css({"right": "-100%"})
	// 	}
	// });




	


});
