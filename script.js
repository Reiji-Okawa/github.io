$(function() {
  var count = 0;
  document.getElementById("hoge").value=count.toString(10);
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

    $('#hoge-btn').click(function() {
      var count = Number(document.getElementById("hoge").value, 10);
      count += 1;
      document.getElementById("hoge").value = count.toString(10);
    })

    $('.up-btn').click(function() {
      var tag = document.getElementById('tag');
      var tag_list = tag.getElementsByTagName('li');
      var tag_c_1 = tag_list[0];
      tag.appendChild(tag_c_1);
    })
    $('.down-btn').click(function() {
      var tag = document.getElementById('tag');
      var tag_list = tag.getElementsByTagName('li');
      var length = tag_list.length
      for (var i=0;i<length-1;i++){
        var tag_c_1 = tag_list[i];
        tag.appendChild(tag_c_1);  
      }
    })
    
    
  });