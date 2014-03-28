$(document).ready(function(){
    $('.push').click(function(){
        $(this).toggleClass("active");
        $(this).siblings().toggleClass("active");
    });

    $('#start-chat-closed .open-chat').click(function() {
        $('#start-chat-closed').hide();
        $('#start-chat-opened').show();
    });

    $('#start-chat-opened .turn-chat').click(function() {
        $('#start-chat-opened').hide();
        $('#start-chat-closed').show();
    });


    $('.login-registr .forgot-password-button').click(function() {
       $('.login-registr').hide();
       $('.forgot-password').show();
    });

    $('.forgot-password .actions-back').click(function() {
       $('.forgot-password').hide();
       $('.login-registr').show();
    });

});
