$(document).ready(function(){

	// $('#order').trigger('click');
  $('body').css('margin-top', $('#header_stick').height());

//--------------Google Maps-----------
				$('#gmap_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#canvas1').on('click', function () {
            $('#gmap_canvas').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#gmap_canvas").mouseleave(function () {
            $('#gmap_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });

 //--------------Google Maps-----------


	// $('.my-slider').unslider(
	// 	{
	// 		autoplay: true
	// 	});
	console.log('----->>>>',window.location.href.split('#')[1])	
	let section = window.location.href.split('#')[1]
	if(section && section.length){
		$('.list-group-item, .bhoechie-tab-content, .btn').removeClass('active');
		let id= '#' + section
		let classname= '.' + section
		$(id).addClass('active')
		$(classname).addClass('active')
	}
	$('#audiology').click(function(){
 		$('.list-group-item, .bhoechie-tab-content, .btn').removeClass('active');
		$(this).addClass('active')
 		$('.audiology').addClass('active');
	});
	$('#clinicallab').click(function(){
 		$('.list-group-item, .bhoechie-tab-content, .btn').removeClass('active');
 		$(this).addClass('active')
 		$('.clinicallab').addClass('active');
	});
	$('#diagnostic').click(function(){
 		$('.list-group-item, .bhoechie-tab-content, .btn').removeClass('active');
 		$(this).addClass('active')
 		$('.diagnostic').addClass('active');
	});
	$('#equipment').click(function(){
 		$('.list-group-item, .bhoechie-tab-content, .btn').removeClass('active');
 		$(this).addClass('active')
 		$('.equipment').addClass('active');
	});
	$('#homehealth').click(function(){
 		$('.list-group-item, .bhoechie-tab-content, .btn').removeClass('active');
 		$(this).addClass('active')
 		$('.homehealth').addClass('active');
	});
	$('#orthotics').click(function(){
 		$('.list-group-item, .bhoechie-tab-content, .btn').removeClass('active');
 		$(this).addClass('active')
 		$('.orthotics').addClass('active');
	});
	

	// $(".title-contact, .contact-email").fadeIn("slow");
/*	$('#myTabs a').click(function (e) {
  	e.preventDefault()
  	$(this).tab('show')
	})*/
// var scroll_pos = 0;
//         $(document).scroll(function() { 
//             scroll_pos = $(this).scrollTop();
//             if(scroll_pos > 50) {
                // $('header .subheader').css({'background':'#fff','border-bottom': '2px solid #efefef'})
               // $('header .navbar-default .navbar-nav>li>a').css('color','#fff');
               // $('body header .navbar .navbar-brand').css('background','transparent');
               // $('body header .navbar .navbar-brand').css('padding','5px');
               // $('.subheader .navbar-nav>li>a').css('padding-top','10px');
            // } else {
                // $('header .subheader').css({'background':'#fff','border-bottom': '0'})       
               // $('header .navbar-default .navbar-nav>li>a').css('color','#333');

               // $('body header .navbar .navbar-brand').css('padding','20px');
               // $('.subheader .navbar-nav>li>a').css('padding-top','10px');
               

            // }
        // });

$('#myCarousel').carousel({
    	interval:   4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});





// ----------------------------------------process tab-------------------------------
$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
// ----------------------------------------process tab-------------------------------

// $('#myModal').modal('toggle');
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
})


;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function CBPFWTabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	CBPFWTabs.prototype.options = {
		start : 0
	};

	CBPFWTabs.prototype._init = function() {
		// tabs elemes
		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.content > section' ) );
		// current index
		this.current = -1;
		// show current content item
		this._show();
		// init events
		this._initEvents();
	};

	CBPFWTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
			} );
		} );
	};

	CBPFWTabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].className = '';
			this.items[ this.current ].className = '';
		}
		// change current
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current';
		this.items[ this.current ].className = 'content-current';
	};

	// add to global namespace
	window.CBPFWTabs = CBPFWTabs;

})( window );