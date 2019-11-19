// Menu "Burger"

$('.menu_btn').on('click', function(){
	$('.menu').toggleClass('menu_active');
	$(this).toggleClass('menu_btn_active');
});

// Button Back To Top

$('.back_top--wrapper').fadeOut();

function backToTop() {
	$(document).ready(function(){
	    $(window).on('scroll', () => {
	    	if ($(this).scrollTop() >= 120) {
	    		$('.back_top--wrapper').fadeIn();
	    	}

	    	else {
	    		$('.back_top--wrapper').fadeOut();
	    	}
	    });
	    $(".back_top").on("click", function (event) {
	        event.preventDefault();
	        let id  = $(this).attr('href'),
	            top = $(id).offset().top; 
	        $('body,html').animate({scrollTop: top}, 1000);
	    });
	});
}

backToTop()

// Count product and price

$(document).ready(function() {
  	function change(product_form, val) {
    	let $input = product_form.find('.product_number');
    	let count = parseInt($input.val()) + val;
    	count = count < 1 ? 1 : count;
    	$input.val(count);
    	let $price = product_form.find('.product_price');
    	$price.text(count * $price.data('price'));
  	}
  	$('.minus').click(function() {
    	change($(this).closest('.product_form'), -1);
  	});
  	$('.plus').click(function() {
    	change($(this).closest('.product_form'), 1);
  	});
  	$('.product_number').on("input", function() {
    	let $price = $(this).closest('.product_form').find('.product_price');
    	$price.text(this.value * $price.data('price'));
  	});
});