$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });


  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  $('#paid').on('click',function(){
    $('#next1').removeAttr("disabled");
    $('#next1').attr({
      'data-toggle':"modal" ,
      'data-target':"#modal2",
      'data-dismiss':"modal"
    });
  });

  $('#free').on('click',function(){
    $('#next1').removeAttr("disabled");
    $('#next1').attr({
      'data-toggle':"modal" ,
      'data-target':"",
      'data-dismiss':"modal"
    });
  });

  $('#single').on('click',function(){
    $('#next2').removeAttr("disabled");
    $('#next2').attr({
      'data-toggle':"modal" ,
      'data-target':"#modal3",
      'data-dismiss':"modal"
    });
  });

  $('#multiple').on('click',function(){
    $('#next2').removeAttr("disabled");
    $('#next2').attr({
      'data-toggle':"modal" ,
      'data-target':"#modal4",
      'data-dismiss':"modal"
    });
  });