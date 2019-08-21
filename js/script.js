$(window).on('load',function(){
	$("#status").fadeOut();
	$("#preloader").delay(450).fadeOut();
});
$(function(){
	$("#team-members").owlCarousel({
		items:2,
		autoplay:true,
		loop:true,
		smartSpeed:700,
		autoplayHoverPause:true,
		nav:true,
		dots:false,
		navText:['<i class=" ico fa fa-angle-left"></i>','<i class=" ico fa fa-angle-right"></i">'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			}
		}
	});
})
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
$(".se").responsiveTabs({
	animation:'slide'
});
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
$(function(){
	$("#testimonial-slinder").owlCarousel({
		items:1,
		autoplay:true,
		loop:true,
		smartSpeed:700,
		autoplayHoverPause:true,
		nav:true,
		dots:false,
		navText:['<i class=" ico fa fa-angle-left"></i>','<i class=" ico fa fa-angle-right"></i">']
	});
});
$(function(){
	$("#client-list").owlCarousel({
		items:6,
		autoplay:true,
		loop:true,
		smartSpeed:500,
		autoplayHoverPause:true,
		nav:true,
		dots:false,
		navText:['<i class=" ico fa fa-angle-left"></i>','<i class=" ico fa fa-angle-right"></i">']
	});
})
$(function(){
	Scroll();

	$(window).scroll(function(){
		Scroll();
	})

	function Scroll(){
		$(window).scroll(function(){
			if($(window).scrollTop()>57){
				$("nav").addClass('white-nav-top');
				$(".navbar-brand img").attr("src","img/logo/logo-dark.png");
			}else{
				$("nav").removeClass('white-nav-top');
				$(".navbar-brand img").attr("src","img/logo/logo.png");
			}
		});
	}
});