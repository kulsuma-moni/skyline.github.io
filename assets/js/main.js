(function($){
    "use strict";
    	// Sticky MENU JS CODE
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('.header_area').addClass('menu-shrink animated slideInDown');
		} else {
			$('.header_area').removeClass('menu-shrink animated slideInUp');
		}
	});

     // data-background
    $("[data-background]").each(function(){
        $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
    });
    // Hero Car Slider
    $('.hero_car_img').owlCarousel({
        rtl:false,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dots:true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})(jQuery);



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })

  })()