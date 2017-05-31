$(function() {
    $('.error').hide();
    
    $("#submit").click(function() {
        // validate form 
        $('.error').hide();
            var email = $("input#email").val();
            if (email == "") {
            $("label#email_error").show();
            $("input#email").focus();
            return false;
        }
            var message = $("#message").val();
            if (message == "") {
            $("label#message_error").show();
            $("#message").focus();
            return false;
        }
    });
});