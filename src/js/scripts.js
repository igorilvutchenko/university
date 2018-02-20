'use strict';
(function () {

/*Sandvich*/

$(document).ready(function() {
        $('.sandvich').on('click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $('body').on('click', function(event) {
            $('.sandvich').removeClass('oppenned');
        })
        $('.cls').on('click', function(event){
            $('.sandvich').removeClass('oppenned');
            event.stopPropagation();
        });
    });



/*Izotope sorting*/

$('.news-list').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.news',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
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


$(document).ready(function() {
 
 
   $(".arrow-up").click(function(e) {
    e.preventDefault();
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, 700, "swing");
   });
 
 
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})


$(document).ready(function() {
  $('.event-date').on('click', function(event){
      $(this).pickmeup('.date').show();
  })
});


})();
