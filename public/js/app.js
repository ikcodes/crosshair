$(function () {
	$(document).foundation();

	//====================//
	//  HELPER FUNCTIONS	//
	//====================//
	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	//==========================//
	//  MANAGE HERO TEXT ROLLUP	//
	//==========================//
	var initialDelay = 50;
	var rollbackDelay = 200;

	setTimeout(function () {
		// Call onload
		rollupHeroText();
	}, initialDelay);

	function rollupHeroText() {
		// If it's in the viewpoint, add 'loaded'. If it leaves, remove it ONCE.
		if ($(".hero-text > h1").is(":visible")) {
			if ($(".hero-text > h1").isInViewport()) {
				setTimeout(function () {
					$(".hero-text > h1").addClass("loaded");
				}, rollbackDelay);
			} else if ($(".hero-text > h1").hasClass("loaded")) {
				$(".hero-text > h1").removeClass("loaded");
			}
		}
	}

	//====================//
	//  MANAGE NAV HEIGHT	//
	//====================//
	var scrollLength = 150;
	var $nav = $("#nav");
	function adjustSlimNav() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop <= scrollLength) {
			$nav.removeClass("slim");
		} else {
			$nav.addClass("slim");
		}
	}

	//====================//
	//   LOGIN DROPDOWN   //
	//====================//
	$("#openLoginDropdown > a").click(function (e) {
		// e.preventDefault();

		$ld = $(".login-dropdown");
		if ($ld.is(":visible")) {
			$ld.slideUp();
		} else {
			$ld.slideDown();
		}
	});

	//====================//
	//  FLIP NAV BURGER		//
	//====================//
	$("#navFlip").click(function (e) {
		e.preventDefault();

		var $nav = $("#nav");
		if (!$nav.hasClass("in")) {
			$nav.addClass("in");
		} else {
			$nav.removeClass("in");
		}
	});

	//=====================//
	//  SCROLL MANAGEMENT  //
	//=====================//
	$(window).on("resize scroll", function () {
		rollupHeroText();
		adjustSlimNav();
	});

	//====================//
	//  SCROLL MAGIC      //
	//====================//
	$(".scroll-magic").click(function (e) {
		e.preventDefault();
		var scrollTarget = $(this).attr("data-scroll");
		$.scrollTo(scrollTarget, {
			duration: 500,
		});
	});
});
