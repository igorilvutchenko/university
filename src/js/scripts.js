'use strict';
(function () {

/*Sandvich*/

$(document).ready(function() {
        var clickEvent = window.innerWidth > 768 ? 'click' : 'touchstart';
        $('body').on(clickEvent, '#sandvich', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
            // event.preventDefault();
        })
        
        $('body').on(clickEvent, function(event) {
            $('.sandvich').removeClass('oppenned');
            event.stopPropagation();
        })
        $('.cls').on(clickEvent, function(event){
            $('.sandvich').removeClass('oppenned');
            event.stopPropagation();
        });
    });

/*Izotope sorting*/

$('.newslist').isotope({
  itemSelector: '.news',
  masonry: {
    columnWidth: '.news-size',
    gutter: 25
  }
})

/*Izotope filter*/

// cache container
var $container = $('#container');
// initialize isotope
$container.isotope({
  // options...
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

/*Dropdown selector*/

$(document).ready(function() {
  $('#dd').on('click', function(event){
      $('#dropdownmenu').toggleClass('hide');
      event.stopPropagation();
  })
});


/*Call/hide form*/
$(document).ready(function() {
  $('#enrollbutton').on('click', function(event){
      $(this).addClass('hide');
      $('#enrollform').removeClass('hide');
      event.stopPropagation();
  })
});

$(document).ready(function() {
  $('#enrollsendbutton').on('click', function(event){
      $('#enrollform').addClass('hide');
      $('#enrollbutton').removeClass('hide');
      event.stopPropagation();
  })
});

/*Call/hide form*/
$(document).ready(function() {
  $('#buttonteam').on('click', function(event){
      $('#team').removeClass('hide');
      event.stopPropagation();
  })
});

$(document).ready(function() {
  $('body').on('click', function(event){
      $('#team').addClass('hide');
      event.stopPropagation();
  })
});

$(document).ready(function() { 
   $(".anchor").click(function(e) {
    e.preventDefault();
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, 700, "swing");
   }); 
});



})();
