$(document).ready(function(){
    $('.push').click(function(){
        $(this).toggleClass("active");
        $(this).siblings().toggleClass("active");
    });
});
