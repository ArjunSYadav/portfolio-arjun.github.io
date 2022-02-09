$(document).ready(function(){

$('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
    // $('a').smoothScroll();
});

$(window).on(toggleClass,function(){

    $('menu').removeClass('fa-times');
    $('header').removeClass('toggle');
   
});





});