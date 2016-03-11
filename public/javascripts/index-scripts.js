(function($){
  'use strict';
  $(window).load(function(){
    $('.iniinvisible').show("scale",{},1000);
  });

  $(document).ready(function(){
    $(".ele-no1 > p, .ele-no3 > p").hide();
    $("#signup-modal").hide();
  });

  $(".ele-no1").hover(function(){
    $('.ele-no1 > h2').hide();
    $('.ele-no1 > p').show();
  }, function(){
    $('.ele-no1 > p').hide();
    $('.ele-no1 > h2').show();
  });

  $(".ele-no3").hover(function(){
    $('.ele-no3 > h2').hide();
    $('.ele-no3 > p').show();
  }, function(){
    $('.ele-no3 > p').hide();
    $('.ele-no3 > h2').show();
  });

  $("#signup-toggle").click(function(){
    $("#login-modal").hide();
    $("#signup-modal").show();
  })
  $("#login-toggle").click(function(){
    $("#signup-modal").hide();
    $("#login-modal").show();
  })


})(jQuery);
