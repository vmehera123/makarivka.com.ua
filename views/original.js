$(document).ready(function () {
	var $document = $(document);

	$document.on("scroll", function () {
		onScrollHeroWrapperHandler();
		onScrollNavbarHandler();
	});
	$document.trigger("scroll");

	$(".carousel").carousel({
		interval: 5000 //changes the speed
	});

	function onScrollNavbarHandler() {
		var top = $document.scrollTop(),
			$navbar = $(".navbar.navbar-inverse.navbar-fixed-top");

		top?
			$navbar.removeClass("transparent-navbar") :
			$navbar.addClass("transparent-navbar");
	}

	function onScrollHeroWrapperHandler() {
		var $height = $(window).height(),
			$header = $(".hero-wrapper"),
			$main = $(".main-content"),
			top = $document.scrollTop();

		if (top >= $height) {
			$main.css({
				opacity: 1,
				position: "static"
			});
			$header.css({
				height: "auto",
				position: "static"
			});
		} else {
			$main.css({
				opacity: calculateOpacity(top, $height),
				position: "fixed"
			});
			$header.removeAttr("style");
		}
	}

	function calculateOpacity(top, height) {
		var result = top / height;

		if (result > 1) return 1;

		return result;
	}
});