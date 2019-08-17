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
// progress Bar
$(function(){
	$("#progress-element").waypoint(function(){
		$(".progress-bar").each(function() {
			$(this).animate({
				width: $(this).attr("aria-valuenow")+'%'
			},1000);
		});
		this.destroy();
	},{
		offset:'bottom-in-view'
	});
})

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
// progress Bar

$(".se").responsiveTabs({
	animation:'slide'
});
