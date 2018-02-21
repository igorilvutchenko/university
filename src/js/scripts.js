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

$('.newslist').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.news',
  // percentPosition: true,
  masonry: {
    // use element for option
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


})();
