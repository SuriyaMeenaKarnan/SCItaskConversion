$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        autoplay: true, 
        autoplayTimeout:2000,
        items:1
    });
   
   });

   $(document).ready(function() {
 
    $("#owl-speakers").owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        autoplay: true, 
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin: 150,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
   
   });