$(document).ready(function(){
	
	/*var largura = $("p").width();
	
	alert(largura);*/
	
	$("#menuMobBtn").click(function() {
		$("#menuMob").animate({left:0});
	});
	
	$("#btnFechar").click(function() {
		$("#menuMob").animate({left:"-1000px"},500,function() {
			$("#menuMobBtn").fadeTo("fast",1);
		});
	});
	
	$("#cookies img").click(function() {
		var alturaCookies = $("#cookies").height()*2;
		$("#cookies").animate({"margin-top":"-"+alturaCookies+"px"});
	});
	
	
	
	/*var larguraTela = $(window).width();
	$("#debug").html(larguraTela);*/
	
	var larguraCase = $("#contWork .col").width();
	$("#contWork .col").height(larguraCase);
	
	$(".caseLeg").click(function() {
		$(".caseLegWrap",this).hide();		
		$(this).stop(true).animate({"height":"100%"},function() {
			$(".caseDet",this).fadeIn();
		});
		
	});
	
	$( ".caseLeg" ).hover(
		function() {
			$(".caseLegWrap",this).hide();
			$(this).stop(true).animate({"height":"100%"},50,function() {
				$(".caseDet",this).fadeIn();
			});
		}, function() {
			$(".caseDet",this).hide();
			$(this).stop(true).animate({"height":"95px"},50,function() {
				$(".caseLegWrap",this).fadeIn();
			});
		}
	);
	
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		$("#sticker").css("top",scrollPos);
	})
	
	$("#btnServices").click(function(){
		$("#menuMob").animate({left:"-1000px"},1000);
		$('html, body').animate({scrollTop: $("#contServices").offset().top-157}, 500);
	});
	
	$("#btnWork").click(function(){
		$("#menuMob").animate({left:"-1000px"},1000,function() {
			$('html, body').animate({scrollTop: $("#contWork").offset().top-157}, 500);
		});
	});
	
	$("#btnAbout").click(function(){
		$("#menuMob").animate({left:"-1000px"},1000);
		$('html, body').animate({scrollTop: $("#contAbout").offset().top-157}, 250);
	});
	
	$("#btnTouch").click(function(){
		$("#menuMob").animate({left:"-1000px"},1000);
		$('html, body').animate({scrollTop: $("#contTouch").offset().top-157}, 250);
	});
	
	$("#btnGreat").click(function(){
		$("#menuMob").animate({left:"-1000px"},1000);
		$('html, body').animate({scrollTop: $("#contGreat").offset().top-157}, 250);
	});
	
	$(".top").click(function(){
		$('html, body').animate({scrollTop: $("html, body").offset().top-157}, 250);
	});
	
	$("#logo").click(function(){
		$('html, body').animate({scrollTop: $("html, body").offset().top-157}, 250);
	});

});