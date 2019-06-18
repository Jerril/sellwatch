	$(document).ready(function(){

	/*
	dropdown
	*/
	var dropdownBtn = document.querySelectorAll('[data-target]');

	dropdownBtn.forEach(function(e, i) {

	    e.addEventListener('click', function(e) {
	        e.preventDefault();

	        e.stopPropagation();

	        var dropdown = this.getAttribute('data-target');

            var target = document.querySelector(dropdown);

            target.classList.toggle('open__dropdown');

	    });

	});

	var dd = document.querySelectorAll('.navbar__dropdown');

	window.addEventListener('click', function () {

		dd.forEach(function (e, i) {
			e.classList.remove('open__dropdown');
		});
	});

	dd.forEach(function (e, i) {
		e.addEventListener('click', function(evt) {
			evt.stopPropagation();
		});
	});
	

	/*
	cart dialog
	*/
	var cartBtn = document.querySelector('[data-toggle]'),
	    closeBtn = document.querySelector('.dialog__close-btn');

	cartBtn.addEventListener('click', function(e) {
	    e.preventDefault();
	    document.querySelector('.dialog').classList.add('open__dialog');
	});

	closeBtn.addEventListener('click', function(e) {
	    e.preventDefault();
	    document.querySelector('.dialog').classList.remove('open__dialog');
	});

	/*
	navbar-scroll
	*/
    var navbar = document.querySelector('.navbar');
         
    window.addEventListener('scroll', function(e){

    	 if(this.scrollY > 100){
    	 	navbar.classList.add('navbar-scroll-collapse');
    	 }else{     
            navbar.classList.remove('navbar-scroll-collapse');
    	 }
    });
    
    /*
    owl carousel
    */
    $(document).ready(function(){
  		$(".owl-carousel").owlCarousel({
  			items: 1,
  			loop: true,
  			touchDrag: true, 
  			nav: true,
  			autoplay: true,
  			navText: ['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']
  		});
	});

});
