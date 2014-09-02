$(document).ready(function(){

// !Rewrite to remove jQuery

	var navClass = 'show',
			screenSize;

// !Update to be dynamic
	if (window.matchMedia) {
		if (window.matchMedia('(max-width: 532px)').matches) {
			screenSize = 'small';
		} else if (window.matchMedia('(min-width: 533px) and (max-width: 800px)').matches) {
			screenSize = 'medium';
		} else {
			screenSize = 'large';
		}
	}

	function hideNav() {
		$('#menuMob').removeClass(navClass);
		return true;
	}

	if (screenSize != 'large') {

		$('#menuMobBtn').click(function() {
			$('#menuMob').addClass(navClass);
		});

		$('#btnFechar').click(function() {
			hideNav();
		});

	}

	$('#cookies img').click(function() {
		var alturaCookies = $('#cookies').height()*2;
		$('#cookies').animate({'margin-top':'-'+alturaCookies+'px'});
	});



	/*var larguraTela = $(window).width();
	$('#debug').html(larguraTela);*/

	var larguraCase = $('#contWork .col').width();
	$('#contWork .col').height(larguraCase);

	$('.caseLeg').click(function() {
		$('.caseLegWrap',this).hide();
		$(this).stop(true).animate({'height':'100%'},function() {
			$('.caseDet',this).fadeIn();
		});

	});

	$( '.caseLeg' ).hover(
		function() {
			$('.caseLegWrap',this).hide();
			$(this).stop(true).animate({'height':'100%'},50,function() {
				$('.caseDet',this).fadeIn();
			});
		}, function() {
			$('.caseDet',this).hide();
			$(this).stop(true).animate({'height':'95px'},50,function() {
				$('.caseLegWrap',this).fadeIn();
			});
		}
	);

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		$('#sticker').css('top',scrollPos);
	});

	var offset = (screenSize === 'large') ? 157 : 50;

	$('.menuBtn a').on('click', function (e) {
		e.preventDefault();
		var menuTarget = e.currentTarget.getAttribute('href');
		if (screenSize != 'large') { hideNav(); }
		$('html, body').animate({scrollTop: $(menuTarget).offset().top-offset}, 500);
	});

	$('.top').click(function(){
		$('html, body').animate({scrollTop: $('html, body').offset().top-offset}, 250);
	});

	$('#logo').click(function(){
		$('html, body').animate({scrollTop: $('html, body').offset().top-offset}, 250);
	});

});
