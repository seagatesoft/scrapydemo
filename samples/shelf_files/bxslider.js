var $j = jQuery.noConflict();

$j(document).ready(
	function() {
		$j('.bxslider').bxSlider({
			auto:true,
			pause:12000
		});

		$j('.slides').bxSlider({
			slideWidth: 130,
			minSlides: 2,
			maxSlides: 4,
			moveSlides: 1
		});

		var getHigh = $j('#banner-fade .bx-viewport').css('height');
		var minHigh = '-'+getHigh;

		$j('#banner-fade .bx-controls.bx-has-pager.bx-has-controls-direction').css('height',getHigh);
		$j('#banner-fade .bx-controls.bx-has-pager.bx-has-controls-direction').css('margin-top',minHigh);
	}
);