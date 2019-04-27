$(document).ready(function () {
  $('#test').click(function () {
    const name = $('#name').val()
      if (name == '') {

         alert("Please Enter Your Name");

      } else {

         $('#api-image').attr('src', `https://joeschmoe.io/api/v1/${name}`)
         name.val('')

      }
  });
});
