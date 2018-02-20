'use strict';
(function () {

$(document).ready(function() {
        $('#subscribebutton').on('click', function(event){
            $(this).addClass('hide');
            $('#subscribeform').removeClass('hide');
            event.stopPropagation();
        })
    });


})();
