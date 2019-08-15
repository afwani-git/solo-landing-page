// load
$(window).on('load',function(){
	$("#status").fadeOut();
	$("#preloader").delay(450).fadeOut();
});
// member
$(function(){
	$("#team-members").owlCarousel({
		items:2,
		autoplay:true,
		loop:true,
		smartSpeed:700,
		autoplayHoverPause:true,
		nav:true,
		dots:false,
		navText:['<i class=" ico fa fa-angle-left"></i>','<i class=" ico fa fa-angle-right"></i">']
	});
})
