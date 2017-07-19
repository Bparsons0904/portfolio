// Change carousel to selected position
$('.panel').click(function() {
		var position = $(this).data('id');
		var group = $(this).data('group');
		$(group).carousel(position);
	})
	// Move return to top button above footer
$(window).scroll(function() {
	if ($(window).scrollTop() + $(window).height() > $(document).height() - $('.footer').height()) {
		$('#back-to-top').addClass('footer-return');
	} else {
		$('#back-to-top').removeClass('footer-return');
	}
});
jQuery(window).trigger('resize').trigger('scroll');
// Set Video to VP height
function setVideoHeight() {
	var height = $(window).height();
	var vidHeight = $('#cover').height();
	var calcHeight = vidHeight - 300 - height;
	var newHeight = "-" + calcHeight.toString() + "px"
	$(".fillWidth").css("margin-bottom", newHeight);
}
setVideoHeight();
// Create equal heights for about div's for vertical-align
$(function() {
	$('.about').matchHeight();
});
// Close mobile nav on seleciton
$('.nav a').on('click', function() {
	$('.navbar-toggle').click();
});
$('.nav a').on('touchend', function() {
	$('.navbar-toggle').click();
});
// Set speed for skills corousel
$('#front-cards').carousel({
	interval: 4000
})
$('#back-cards').carousel({
	interval: 4000
})
$('#framework-cards').carousel({
		interval: 4000
	})
// iOS Double Click Workaround
$("#myNavbar ul li a").on("touchend", function(event) {
  window.location.href = $(this).attr("href");
});
	// Core of typewriter function from https://css-tricks.com/snippets/css/typewriter-effect/
function setupTypewriter(t) {
	var HTML = t.innerHTML;
	t.innerHTML = "";
	var cursorPosition = 0,
		tag = "",
		writingTag = false,
		tagOpen = false,
		typeSpeed = 50,
		tempTypeSpeed = 0;
	var type = function() {
		if (writingTag === true) {
			tag += HTML[cursorPosition];
		}
		if (HTML[cursorPosition] === "<") {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = "";
				tagOpen = true;
				writingTag = true;
				tag += HTML[cursorPosition];
			}
		}
		if (!writingTag && tagOpen) {
			tag.innerHTML += HTML[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (HTML[cursorPosition] === " ") {
				tempTypeSpeed = 0;
			} else {
				tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			}
			t.innerHTML += HTML[cursorPosition];
		}
		if (writingTag === true && HTML[cursorPosition] === ">") {
			tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement("span");
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}
		cursorPosition += 1;
		if (cursorPosition < HTML.length - 1) {
			setTimeout(type, tempTypeSpeed);
		}
	};
	return {
		type: type
	};
}
var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();
// Smooth Scrolling, core code from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 750, function() {
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) {
					return false;
				} else {
					$target.attr('tabindex', '-1');
					$target.focus();
				};
			});
		}
	}
});
// Scroll to top Source Code from https://bootsnipp.com/snippets/featured/link-to-top-page
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function() {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 750);
		return false;
	});
	$('#back-to-top').tooltip('show');
});
(function($) {
	/**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *     the user visible viewport of a web browser.
	 *     only accounts for vertical position, not horizontal.
	 */
	$.fn.visible = function(partial) {
		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};
})(jQuery);
var win = $(window);
var allMods = $(".resume-timeline");
allMods.each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
		el.addClass("already-visible");
	}
});
win.scroll(function(event) {
	allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("come-in");
		}
	});
});
