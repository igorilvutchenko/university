'use strict';



(function(){  //ajax for partners form
  // console.log($('#partnerform'));
  $('#partnerform').on('submit', function(e){
    e.preventDefault(); 

    var data = {};
    var errors = [];

    $('.form-input').each(function(index, el){
      var id = $(el).attr('id');
      data[id] = $(el).val();
      if (!data[id].length) errors.push({
        field: '#' + id,
        error: $(el).attr('data-error')
      });
    });

    if (errors.length) {
      errors.forEach(function(el){
        $(el.field).attr('placeholder', el.error);
        $(el.field).addClass('error');
      });
    };

    $.ajax({
      url: $('#partnerform').attr('action'),
      type: 'POST',
      data: data,
      beforeSend: function(){
        $('.form-button').attr('disabled', 'disabled');
      }
    })
    .done(function(response){
      console.log(response);
      if (response.status == 'ok') {
        alert(response.message);
      } else  {
        alert(response.message);
      }
      $('.form-button').removeAttr('disabled', 'disabled');

    })
    .fail(function(){
      alert('Error. Try again later');
    });
    // console.log(errors);
  }); //ajax for partners form
})();


(function(){ //ajax for enroll form
  // console.log($('#partnerform'));
  $('#enrollform').on('submit', function(e){
    e.preventDefault(); 

    var data = {};
    var errors = [];

    $('.form-input').each(function(index, el){
      var id = $(el).attr('id');
      data[id] = $(el).val();
      if (!data[id].length) errors.push({
        field: '#' + id,
        error: $(el).attr('data-error')
      });
    });

    if (errors.length) {
      errors.forEach(function(el){
        $(el.field).attr('placeholder', el.error);
        $(el.field).addClass('error');
      });
    };

    $.ajax({
      url: $('#enrollform').attr('action'),
      type: 'POST',
      data: data,
      beforeSend: function(){
        $('.form-button').attr('disabled', 'disabled');
      }
    })
    .done(function(response){
      console.log(response);
      if (response.status == 'ok') {
        alert(response.message);
      } else  {
        alert(response.message);
      }
      $('.form-button').removeAttr('disabled', 'disabled');

    })
    .fail(function(){
      alert('Error. Try again later');
    });
    // console.log(errors);
  }); //ajax for subscrir form

  })();

  (function(){ //ajax for subscribe form
  // console.log($('#partnerform'));
  $('#subcribeform').on('submit', function(e){
    e.preventDefault(); 

    var data = {};
    var errors = [];

    $('.form-input').each(function(index, el){
      var id = $(el).attr('id');
      data[id] = $(el).val();
      if (!data[id].length) errors.push({
        field: '#' + id,
        error: $(el).attr('data-error')
      });
    });

    if (errors.length) {
      errors.forEach(function(el){
        $(el.field).attr('placeholder', el.error);
        $(el.field).addClass('error');
      });
    };

    $.ajax({
      url: $('#subcribeform').attr('action'),
      type: 'POST',
      data: data,
      beforeSend: function(){
        $('.form-button').attr('disabled', 'disabled');
      }
    })
    .done(function(response){
      console.log(response);
      if (response.status == 'ok') {
        alert(response.message);
      } else  {
        alert(response.message);
      }
      $('.form-button').removeAttr('disabled', 'disabled');

    })
    .fail(function(){
      alert('Error. Try again later');
    });
    // console.log(errors);
  }); //ajax for subscrir form

  })();