(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


// simplyCountdown('#cuenta', {
// 	year: 2024, // required
// 	month: 2, // required
// 	day: 19, // required
// 	hours: 7, // Default is 0 [0-23] integer
// 	minutes: 31, // Default is 0 [0-59] integer
// 	seconds: 0, // Default is 0 [0-59] integer
// 	words: { //words displayed into the countdown
// 		days: 'Día',
// 		hours: 'Hora',
// 		minutes: 'Minuto',
// 		seconds: 'Segundo',
// 		pluralLetter: 's'
// 	},
// 	plural: true, //use plurals
// 	inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
// 	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
// 	enableUtc: true, //Use UTC as default
// 	onEnd: function() {
// 		document.getElementById('portada').classList.add('oculta');
// 		return; 
// 	}, //Callback on countdown end, put your own function here
// 	refresh: 1000, // default refresh every 1s
// 	sectionClass: 'simply-section', //section css class
// 	amountClass: 'simply-amount', // amount css class
// 	wordClass: 'simply-word', // word css class
// 	zeroPad: false,
// 	countUp: false
// });


