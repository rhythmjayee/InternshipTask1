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
    $('#modal1-done').addClass("d-none");
    $('#next1').removeClass("d-none")
  });

  $('#free').on('click',function(){
    $('#next1').addClass("d-none");
    $('#modal1-done').removeClass('d-none');
    
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

  $('#online').on('click',function(){
    $('offline').removeAttr("required");
  });
  $('#offnline').on('click',function(){
    $('#online').removeAttr("required");
  });

  // var Total=$('#validationprice').val();
  var count=1;
  var remove=['b11'];
  // var totalArr=[];
  var total=0;

  // $('#totalCost').text(Total);

//category button
  $('#category').on('click',function(){
    $('#b1').removeClass("d-none");
    $('#bb1').removeClass('d-none');
    var out='<div class="row" id="r'+(++count)+'"> <div class="col-1"> <span>'+(count)+'.</span> </div><div class="col-10"> <div class="card" style="width:20em;"> <div class="card-header" id="h'+(count)+'"> <div class="row"> <div class="col-10"> <div class="d-flex justify-content-start mr-auto"> <h6><span id="s'+(count)+'"></span></h6> </div></div><div class="col-1  " id="b'+(count)+'"> <button type="button" class="btn btn-light ml-auto d-flex" data-toggle="collapse" data-target="#c'+(count)+'" aria-expanded="true" aria-controls="collapseOne"> <i class="fa fa-arrow-down"></i> </button> </div></div></div><div id="c'+(count)+'"class="collapse show" aria-labelledby="h'+(count)+'" data-parent="#accordion"> <div class="card-body"> <div class="form-group"> <div class="row"> <div class="col-10"> <label for="Category'+(count)+'">Category?</label> <input type="text" class="form-control" id="Category'+(count)+'" style="width: 15em;" placeholder="Example:Entry,food etc"> </div><div class="col-1"id="bb'+(count)+'"> <button role="button" class=" btn btn-light"><i class="fa fa-minus"></i></button> </div></div></div><div class="form-group"> <label for="Description'+(count)+'">Description</label> <input type="text" class="form-control" id="Description'+(count)+'" style="width: 15em;"placeholder="Description"> </div><div class="form-group"> <label for="p'+(count)+'">Price of ticket?</label> <input type="number" class="form-control" style="width: 15em;" id="p'+(count)+'" placeholder="Price per ticket" required> </div></div></div></div></div></div>'
    $('#accordion').append(out);


 //for total cost
 $('#p'+count).on('change',function(){
        
  var price=$('#p'+count).val();
  total=Number(total)+Number(price);
  $('#totalCost').text(total);
});

    //minus button
    $('#bb'+count).on('click',function(){
      var price=$('#p'+count).val();
      total=Number(total)-Number(price);
      $('#totalCost').text(total);
      $("#r"+count).remove();
      });

//for collapse title
      $("#c"+count).on('hidden.bs.collapse',function(){
        var title=$('#Category'+count).val();
        var price=$('#p'+count).val();
        total=Number(total)+Number(price);
        
        $('#s'+count).removeClass('d-none');
          $('#s'+count).text(title+':'+price);
      });

      //for hide title on show collapse
      $("#c"+count).on('shown.bs.collapse',function(){
          $('#s'+count).addClass('d-none');
      });
      
     

  });

  




//problem with total cost,numbering





$("#bb1").on('click',function(){
  var price=$('#p1').val();
  total=Number(total)-Number(price);
  $('#totalCost').text(total);
  $("#r1").remove();
  
});

$("#c1").on('hidden.bs.collapse',function(){
  var title=$('#Category1').val();
  var price=$('#p1').val();
  total=Number(total)+Number(price);
  
  $('#s1').removeClass('d-none');
    $('#s1').text(title+':'+price);
});
$("#c1").on('shown.bs.collapse',function(){
    $('#s1').addClass('d-none');
});

$('#p1').on('change',function(){
  
  var price=$('#p1').val();
  total=Number(total)+Number(price);
  $('#totalCost').text(total);
});

