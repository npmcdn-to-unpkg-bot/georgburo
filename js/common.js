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
	    margin:0,
	    items:1,
	    nav:true,
	    navText: false
	})


	//Табы
	$('.tabs__caption').on('click', 'span:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active')
			.eq($(this).index()).addClass('active');
	});

	//Картинка в модалке
	$("a[rel^='prettyPhoto']").prettyPhoto({
		show_title: false, /* true/false */
		markup: '<div class="pp_pic_holder"> \
					<div class="ppt">&nbsp;</div> \
					<div class="pp_top"> \
						<div class="pp_left"></div> \
						<div class="pp_middle"></div> \
						<div class="pp_right"></div> \
					</div> \
					<div class="pp_content_container"> \
						<div class="pp_left"> \
						<div class="pp_right"> \
							<div class="pp_content"> \
								<div class="pp_loaderIcon"></div> \
								<div class="pp_fade"> \
									<div class="pp_hoverContainer"> \
										<a class="pp_next" href="#">next</a> \
										<a class="pp_previous" href="#">previous</a> \
									</div> \
									<div id="pp_full_res"></div> \
									<div class="pp_details"> \
										<p class="pp_description"></p> \
										{pp_social} \
										<a class="pp_close" href="#">Close</a> \
									</div> \
								</div> \
							</div> \
						</div> \
						</div> \
					</div> \
					<div class="pp_bottom"> \
						<div class="pp_left"></div> \
						<div class="pp_middle"></div> \
						<div class="pp_right"></div> \
					</div> \
				</div> \
				<div class="pp_overlay"></div>',
		gallery_markup: '',
		social_tools: false /* html or false to disable */
	});



	//при наведении на иконку преимуществ, подсвечиваем ссылку
	$('.advantages-work--icon').mouseover(function(){
		$(this).siblings('p').addClass('active-link-icon');
	})

	$('.advantages-work--icon').mouseout(function(){
		$(this).siblings('p').removeClass('active-link-icon');
	})


	//Калькулятор. присваиваем выбранному элементу класс active
	$('.calc-list a').click(function(e){
		e.preventDefault();
		$(this).closest(".calc-list").find('a').removeClass('active');
  		$(this).addClass('active');

  		var resultStyle = $('.style-list a.active').attr('id');
  		var resultTech = $('.tech-list a.active').attr('id');
  		var resultSize = $('.size-list a.active').attr('id');

  		var qtyList = $('.qty-list a.active').attr('id');

  		var total = $('.form-column form').find('.result').text(resultStyle + ' '+ resultTech + ' ' + resultSize);
  		var totalQty = $('.form-column form').find('.qty-list-result').text(qtyList);

   		//console.log(total);
  		calcFunction();
  		calcFunctionTotalQty();
	})

	function calcFunction(){
		var total = $('.form-column .result').text();

		var personajPencilXs = 10000;
		var personajPencilSm = 12000;
		var personajPencilMd = 18000;
		var personajPencilLg = 25000;

		var personajPastelXs = 12000;
		var personajPastelSm = 16000;
		var personajPastelMd = 22000;
		var personajPastelLg = 27000;

		var personajOilSm = 30000;
		var personajOilMd = 40000;
		var personajOilLg = 50000;

		var familyPencilXs = 7000;
		var familyPencilSm = 9000;
		var familyPencilMd = 11000;
		var familyPencilLg = 15000;

		var familyPastelXs = 8000;
		var familyPastelSm = 12000;
		var familyPastelMd = 15000;
		var familyPastelLg = 20000;

		var familyOilXs = 20000;
		var familyOilSm = 23000;
		var familyOilMd = 25000;
		var familyOilLg = 35000;

		var romanticPencilXs = 9000;
		var romanticPencilSm = 12000;
		var romanticPencilMd = 15000;
		var romanticPencilLg = 20000;

		var romanticPastelXs = 10000;
		var romanticPastelSm = 16000;
		var romanticPastelMd = 20000;
		var romanticPastelLg = 26000;

		var romanticOilXs = 26000;
		var romanticOilSm = 30000;
		var romanticOilMd = 32000;
		var romanticOilLg = 46000;


		if(total == 'personaj pencil size-xs'){
			$('.price-block .cost').html(personajPencilXs + '<span class="rur">i</span>');
		}
		if(total == 'personaj pencil size-sm'){
			$('.price-block .cost').html(personajPencilSm + '<span class="rur">i</span>');
		}
		if(total == 'personaj pencil size-md'){
			$('.price-block .cost').html(personajPencilMd + '<span class="rur">i</span>');
		}
		if(total == 'personaj pencil size-lg'){
			$('.price-block .cost').html(personajPencilLg + '<span class="rur">i</span>');
		}

		if(total == 'personaj pastel size-xs'){
			$('.price-block .cost').html(personajPastelXs + '<span class="rur">i</span>');
		}
		if(total == 'personaj pastel size-sm'){
			$('.price-block .cost').html(personajPastelSm + '<span class="rur">i</span>');
		}
		if(total == 'personaj pastel size-md'){
			$('.price-block .cost').html(personajPastelMd + '<span class="rur">i</span>');
		}
		if(total == 'personaj pastel size-lg'){
			$('.price-block .cost').html(personajPastelLg + '<span class="rur">i</span>');
		}
		if(total == 'personaj oil size-sm'){
			$('.price-block .cost').html(personajOilSm + '<span class="rur">i</span>');
		}
		if(total == 'personaj oil size-md'){
			$('.price-block .cost').html(personajOilMd + '<span class="rur">i</span>');
		}
		if(total == 'personaj oil size-lg'){
			$('.price-block .cost').html(personajOilLg + '<span class="rur">i</span>');
		}

		if(total == 'family pencil size-xs'){
			$('.price-block .cost').html(familyPencilXs + '<span class="rur">i</span>');
		}
		if(total == 'family pencil size-sm'){
			$('.price-block .cost').html(familyPencilSm + '<span class="rur">i</span>');
		}
		if(total == 'family pencil size-md'){
			$('.price-block .cost').html(familyPencilMd + '<span class="rur">i</span>');
		}
		if(total == 'family pencil size-lg'){
			$('.price-block .cost').html(familyPencilLg + '<span class="rur">i</span>');
		}

		if(total == 'family pastel size-xs'){
			$('.price-block .cost').html(familyPastelXs + '<span class="rur">i</span>');
		}
		if(total == 'family pastel size-sm'){
			$('.price-block .cost').html(familyPastelSm + '<span class="rur">i</span>');
		}
		if(total == 'family pastel size-md'){
			$('.price-block .cost').html(familyPastelMd + '<span class="rur">i</span>');
		}
		if(total == 'family pastel size-lg'){
			$('.price-block .cost').html(familyPastelLg + '<span class="rur">i</span>');
		}

		if(total == 'family oil size-xs'){
			$('.price-block .cost').html(familyOilXs + '<span class="rur">i</span>');
		}
		if(total == 'family oil size-sm'){
			$('.price-block .cost').html(familyOilSm + '<span class="rur">i</span>');
		}
		if(total == 'family oil size-md'){
			$('.price-block .cost').html(familyOilMd + '<span class="rur">i</span>');
		}
		if(total == 'family oil size-lg'){
			$('.price-block .cost').html(familyOilLg + '<span class="rur">i</span>');
		}

		if(total == 'romantic pencil size-xs'){
			$('.price-block .cost').html(romanticPencilXs + '<span class="rur">i</span>');
		}
		if(total == 'romantic pencil size-sm'){
			$('.price-block .cost').html(romanticPencilSm + '<span class="rur">i</span>');
		}
		if(total == 'romantic pencil size-md'){
			$('.price-block .cost').html(romanticPencilMd + '<span class="rur">i</span>');
		}
		if(total == 'romantic pencil size-lg'){
			$('.price-block .cost').html(romanticPencilLg + '<span class="rur">i</span>');
		}

		if(total == 'romantic pastel size-xs'){
			$('.price-block .cost').html(romanticPastelXs + '<span class="rur">i</span>');
		}
		if(total == 'romantic pastel size-sm'){
			$('.price-block .cost').html(romanticPastelSm + '<span class="rur">i</span>');
		}
		if(total == 'romantic pastel size-md'){
			$('.price-block .cost').html(romanticPastelMd + '<span class="rur">i</span>');
		}
		if(total == 'romantic pastel size-lg'){
			$('.price-block .cost').html(romanticPastelLg + '<span class="rur">i</span>');
		}

		if(total == 'romantic oil size-xs'){
			$('.price-block .cost').html(romanticOilXs + '<span class="rur">i</span>');
		}
		if(total == 'romantic oil size-sm'){
			$('.price-block .cost').html(romanticOilSm + '<span class="rur">i</span>');
		}
		if(total == 'romantic oil size-md'){
			$('.price-block .cost').html(romanticOilMd + '<span class="rur">i</span>');
		}
		if(total == 'romantic oil size-lg'){
			$('.price-block .cost').html(romanticOilLg + '<span class="rur">i</span>');
		}

		if(total == 'personaj oil size-xs' || total == 'personaj oil size-sm' || total == 'personaj oil size-md' || total == 'personaj oil size-lg' || total == 'personaj oil undefined' ){
			$('.size-list .size-xs').parent().css("display", "none");
		}
		else{
			$('.size-list .size-xs').parent().css("display", "inline-block");
		}

		if( total.indexOf("romantic") !== -1){
			$('.qty-list .qty-one').parent().css("display", "none");
			$('.qty-list .qty-three').parent().css("display", "none");
			$('.qty-list + span').css("display", "none");
			$('.qty-two').addClass("active-qty");
		}
		else{
			$('.qty-list li').css("display", "inline-block");
			$('.qty-list + span').css("display", "block");
			$('.qty-two').removeClass("active-qty");
		}


	}

	function calcFunctionTotalQty(){
		var totalCostQty = parseInt($('.price-block .cost').text());
		var QtyTotal = $('.qty-list-result').text();
		var resultText = $('.form-column .result').text();

		if(QtyTotal == 'qty-two'){
			$('.price-block .cost').html((totalCostQty * 1.3) + '<span class="rur">i</span>');
		}
		if(QtyTotal == 'qty-three'){
			$('.price-block .cost').html((totalCostQty * 1.6) + '<span class="rur">i</span>');
		}
		if(resultText.indexOf("romantic") !== -1){
			$('.price-block .cost').html((totalCostQty * 1) + '<span class="rur">i</span>');
		}
	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});
