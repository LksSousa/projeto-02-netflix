$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//var autoplay = "?rel=0&arp;autoplay=1";
$( ".item" ).hover(
    function() {
      $( this ).children(".box-filme").hide();
      $( this ).children(".video").fadeIn(500);
      /*$( this ).children(".video").fadeIn(function(){
          $(this).children("iframe").attr("src", function(){
              return this.src + autoplay;
            });
      });*/
    },
    function() {
      $( this ).children(".box-filme").show();
      $( this ).children(".video").fadeOut(100);
    }
);