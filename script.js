$(function() {

    $('.lab-link-acordion').click(function(){
        var $answer = $(this).find('.lab-link');
        if($answer.hasClass('open')){
          $answer.removeClass('open')
          $answer.slideUp();
        }
        else{
          $answer.addClass('open')
          $answer.slideDown();
        }
        
      });
      
    
  });