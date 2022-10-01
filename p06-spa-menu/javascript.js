$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".isi").slideToggle("slow");

	$('nav ul li.off').each(function(index, el) {
		var isiID = el.id.split('-')[1];
		$('.isi#' + isiID).hide();
	});
});

$('nav').delegate('.off', 'click', function(event) {
	var pilihIsi = this.id.split('-')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.isi:visible').fadeOut('slow', function() {
		$('.isi#' + pilihIsi).fadeIn('slow');
	});

	var $this = $(this);
	$this.removeClass('off').addClass("on");
    $this.siblings().addClass('off').removeClass('on');

    });
});
