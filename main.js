$(document).ready(function(){
    
    myFunction = function(){

        var userName = $('#user');
        var password = $('#password');
        var confirmPassword = $('#con-password');
        var button = $('#btn');
        var modal = $('#myModal');

        if ( userName.val() !== "" && password.val() !== "" && confirmPassword.val() !== "" ) {
            
            if ( password.val() == confirmPassword.val() ) {

                button.attr({
                    "data-toggle": "modal",
                    "data-target": "#emptyFields"
                });

                changeData = function() {

                    $('#emptyFields h5').addClass('text-success').text("Success");

                    $('#emptyFields #m-body').addClass('text-capitalize').text("Your account was successfully verified!");

                    $('.modal-footer button').removeClass('btn-secondary').addClass('btn-success');

                }

                changeData();

                $(':input','#form')
                .not(':button, :submit, :reset, :hidden')
                .val('');

            } else {


                
            }

        } else {

            button.attr({
                "data-toggle": "modal",
                "data-target": "#emptyFields"
            });

        }

    };

    $('#myTable tbody tr td:nth-child(5)').prepend('+91 ');
    $('#myTable tbody tr td').addClass('align-middle');

});