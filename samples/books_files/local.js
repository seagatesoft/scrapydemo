var jQ = jQuery.noConflict();

var cartTimer = 500;
var cartTimeOutId = null;

jQ(document).ready(
	function() {
		var navHomepage = '<ul id="nav-homepage" class="level0">'+jQ("#nav-temp ul.level0").html()+'</ul>';
		jQ("#nav-temp").remove();
		jQ('.cms-index-index .nav-primary').append(navHomepage).show();
		// Language Show
		langShow();
		// Top Cart
		hoverTopCart();
		// Scroll header
		jQ(window).scroll(moveScroll);
		// Top Menu
		topMenu();

		jQ(".cms-index-index .breadcrumbs, .cms-index-defaultindex .breadcrumbs").remove();

		jQ(".view-detail").on('click', function(){
			var dataUrl = jQ(this).attr('data-url');
			window.location.href = dataUrl;
		});
	}
);

function langShow() {
	jQ("#select-language").mouseover(function() {
		jQ("#select-language .language-option").css("display","block");
	})
	.mouseout(function() {
		jQ("#select-language .language-option").css("display","none");
		jQ("#select-language .current-lang").css("display","block");
	});
}

function hoverTopCart() {
	jQ("#block-top-cart").mouseover( function() {
			if (cartTimeOutId == null) {
				jQ("#block-top-list").css("display","block");
			} else {
				clearTimeout(cartTimeOutId);
				cartTimeOutId = null;
			}
		})
		.mouseout( function() {
			if (cartTimeOutId != null) {
				clearTimeout(cartTimeOutId);
				cartTimeOutId = null;
			}
			cartTimeOutId = setTimeout( function() {
				jQ("#block-top-list").css("display","none");
				cartTimeOutId = null;
			},cartTimer);
		}
	);
	jQ("#block-top-list").mouseover( function() {
			if (cartTimeOutId == null) {
				jQ("#block-top-list").css("display","block");
			} else {
				clearTimeout(cartTimeOutId);
				cartTimeOutId = null;
			}
		})
		.mouseout( function() {
			if (cartTimeOutId != null) {
				clearTimeout(cartTimeOutId);
				cartTimeOutId = null;
			}
			cartTimeOutId = setTimeout( function() {
				jQ("#block-top-list").css("display","none");
				cartTimeOutId = null;
			},cartTimer);
		}
	);
}

function moveScroll() {
	var scroll = jQ(window).scrollTop();
	var anchor = jQ(".main-container").offset().top;
	var anchor2 = 0;
	if (jQ("body").hasClass("cms-index-index")) {
		anchor2 = jQ("#banner-fade").outerHeight(true);
		if (scroll >= anchor2) {
			jQ(".nav-top li.level0.first").addClass("show");
		} else {
			jQ(".nav-top li.level0.first").removeClass("show");
		}
	}
}

function topMenu() {
	jQ("#nav-homepage li.level1, #topnav li.level1").mouseover( function() {
		var biph = jQ(this).attr("data-biph");
		jQ(this).css("background-position", biph);
		jQ(this).children("ul.level1").css("display","block");
		jQ(this).children("a.level1").children(".triangle").css("display","block");
	})
	.mouseout( function() {
		var bip = jQ(this).attr("data-bip");
		jQ(this).css("background-position", bip);
		jQ(this).children("ul.level1").css("display","none");
		jQ(this).children("a.level1").children(".triangle").css("display","none");
	});
}

function replaceImg(stat,obj,img) {
	obj.style.backgroundImage = "url('"+img+"')";
	if (stat == "in") {
		obj.style.backgroundPosition = "16px 12px";
	} else {
		obj.style.backgroundPosition = "19px 12px";
	}
}