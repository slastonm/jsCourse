$(document).ready(function(){
    $('.custom').click(function(){
        $(this).animate({
            width:'700px',
            opacity:'0.5'
        },4000);
    });
    $('.second').click(function(){
        $(this).hide( 2000);
    });
    $('button').click(function(){
        $(".one").slideToggle(2000);
    })
});