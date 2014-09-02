$(document).ready(function(){

// To do: Rewrite to remove jQuery

	var navClass = 'show',
			screenSize;

// To do: Add listener
	if (window.matchMedia) {
		if (window.matchMedia('(max-width: 532px)').matches) {
			screenSize = 'small';
		} else if (window.matchMedia('(min-width: 533px) and (max-width: 800px)').matches) {
			screenSize = 'medium';
		} else {
			screenSize = 'large';
		}
	}

	var menuMob = document.getElementById('menuMob'),
			menuMobBtn = document.getElementById('menuMobBtn'),
			btnFechar = document.getElementById('btnFechar');

	function hideNav() {
		menuMob.classList.remove(navClass);
		return true;
	}

	if (screenSize != 'large') {

		menuMobBtn.addEventListener('click', function() {
			menuMob.classList.add(navClass);
		});

		btnFechar.addEventListener('click', hideNav);

	}

	// Fade out & remove cookie banner.
	// To do: add cookie / localstorage check
	var cookieBanner = document.getElementById('cookies'),
			cookieTrigger = cookieBanner.querySelector('img');
	cookieTrigger.addEventListener('click', function() {
		cookieBanner.addEventListener('transitionend', function () {
			cookieBanner.remove();
			document.body.classList.remove('show-cookies');
		});
		cookieBanner.classList.add('hide');
	});

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
