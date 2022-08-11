(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

   

  /* magnificPopup img view */
  $(".popup-video").magnificPopup({
    type: "video",
    gallery: {
      enabled: true
    }
  }); 
 
  
 
})(jQuery);
