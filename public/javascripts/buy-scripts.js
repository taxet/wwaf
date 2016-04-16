(function($){
  'use strict';

  $(".ele").hover(function(){
    console.log("in");
    $('.bottom-slide').show();
  }, function(){
    console.log("out");
    $('.bottom-slide').hide();
  });


})(jQuery);