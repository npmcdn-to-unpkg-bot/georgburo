$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Форма заказа в модальном окне
	$('.callme-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//Каруселька портфолио
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    items:4,
	    nav:true,
	    navText: false,
	    responsive: false
	})

	//Каруселька отзывы
	$('.owl-carousel-review').owlCarousel({
	    loop:true,
	    margin:10,
	    items:1,
	    nav:true,
	    navText: false
	})

	//Калькулятор. присваиваем выбранному элементу класс active
	$('.calc-list a').click(function(e){
		e.preventDefault();
		$(this).closest(".calc-list").find('a').removeClass('active');
  		$(this).addClass('active');
	})

});

$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});
