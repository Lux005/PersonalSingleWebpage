		(function ($) {
		    var scrollAnimation = function () {
		        var bannerCaptionMarginTop = "35%";
		        var bannerCaptionMarginBottom = "1%";
		        if (($(".navbar.navbar-fixed-top").length > 0)) {
		            if (($(this).scrollTop() > 70)) {
		                $("body").addClass("navbar-compact"); //set compact navbar
		                //collapse top-banner

		                $(".top-banner").finish().animate({
		                    height: bannerCaptionMarginTop,
		                }, {
		                    duration: 500,

		                    step: function (now, fx) {
		                        $(window).trigger('resize');
		                    },
		                    complete: function () {
		                        $(window).trigger('resize');
		                        $(".top-banner-caption").css({
		                            top: "auto",
		                            bottom: bannerCaptionMarginBottom
		                        });
		                    }
		                });

		            } else {
		                $("body").removeClass("navbar-compact"); //set compact navbar
		                //expand top-banner
		                $(".top-banner-caption").css({
		                    top: bannerCaptionMarginTop,
		                    bottom: "auto"
		                });
		                $(".top-banner").finish().animate({
		                    height: "100%",
		                }, {
		                    duration: 500,

		                    step: function (now, fx) {
		                        $(window).trigger('resize');
		                    },
		                    complete: function () {

		                        $(window).trigger('resize');
		                        $(".top-banner-caption").css({
		                            top: bannerCaptionMarginTop,
		                            bottom: "auto"
		                        });
		                    }
		                });

		            }

		        }
		    };

		    var isotopeAnimation = function () {
		        if ($('.isotope-container').length > 0) {
		            $('.isotope-container').fadeIn();
		            var $container = $('.isotope-container').isotope({
		                itemSelector: '.isotope-item',
		                layoutMode: 'masonry',
		                transitionDuration: '0.5s',
		                filter: "*"
		            });

		            // filter items on button click
		            $('.filters').on('click', 'ul.nav li a', function () {

		                var filterValue = $(this).attr('data-filter');
		                $(".filters").find("li.active").removeClass("active");
		                $(this).parent().addClass("active");
		                $container.isotope({
		                    filter: filterValue
		                });
		                return false;
		            });
		        }
		    };

		    $(document).ready(function () {
		        $(".top-banner-image").backstretch([
		            "images/banner/b1.jpg", "images/banner/b5.jpg", "images/banner/b4.jpg", "images/banner/b6.jpg"
		        ], {
		            duration: 3000,
		            fade: 3000
		        });


		        $(window).scroll(function () {
		            scrollAnimation();
		        });
		        scrollAnimation();
		        (function () {
		            if ($(".modal").length > 0) {
		                $(".modal").each(function () {
		                    $(".modal").prependTo("body");
		                });
		            }
		        })();
		    }); // End document ready
		    $(window).on('load', function () {
		        isotopeAnimation();
		    });



		})(this.jQuery);