$(document).ready (function () {
  $("#form_t").validate({
   rules:{
     email:{
        required:true,
        minlength: 8
     },
     password:{
        required:true,
        minlength: 8
     }
   }
  })  
})


