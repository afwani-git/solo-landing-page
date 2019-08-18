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
// isotope-filter
$(window).on('load',function(){
	$(".isotope-container").isotope({});
	$('.isotope-filter').on('click','button',function(){
		let val =  $(this).attr('data-filter');
		$(".isotope-container").isotope({
			filter:val
		});
		$(".isotope-filter").find(".activeMe").removeClass('activeMe');
		$(this).addClass('activeMe');
	});
});
$(function(){
	$("#portofolio-warpper").magnificPopup({
		delegate:'a',
		type:'image',
		gallery:{
			enabled:true
		}
	})
})