(function($){
  'use strict';
  $(window).load(function(){
    $('.iniinvisible').show("scale",{},1000);
  });

  $(document).ready(function(){
    $(".ele-no1 > p, .ele-no3 > p").hide();
  });

  $(".ele-no1").hover(function(){
    $('.ele-no1 > h2').slideUp();
    $('.ele-no1 > p').show();
  }, function(){
    $('.ele-no1 > p').hide();
    $('.ele-no1 > h2').slideDown();
  });

  $(".ele-no3").hover(function(){
    $('.ele-no3 > h2').slideUp();
    $('.ele-no3 > p').show();
  }, function(){
    $('.ele-no3 > p').hide();
    $('.ele-no3 > h2').slideDown();
  });


})(jQuery);
