jQuery(function($){
  $('.slideclass').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false
  });

  $('.slideclass1').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 700,
    fade: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    cssEase: 'linear',
    dots: false,
  });
  // toggle active class
	$('.toggle').click(function(){
		$('ul').toggleClass('active');
  });
  
  // smooth scroll
   var scrollLink = $('.scroll');
  //  smoth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
       scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // active link switching
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top - 20;

      if(sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('activee');
        $(this).parent().siblings().removeClass('activee');
      }
    });
  });
  });

// google map API
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:38.971145, lng: -94.7730676},
          zoom: 12,
        });

        // add marker
        var marker = new google.maps.Marker({
          position: {lat:38.971145, lng: -94.7730676}, 
          map: map
        });
      }
