$(document).ready(function(){
    $('h1').addClass("one second");
    $("h2").removeClass("text");
    $("button").click(function(){
        $("button").toggleClass("active");
    });
    $("h2").css({
        'background':'yellow',
        'font-size':'30px',
        'color':'blue'
    })
    $('img').attr('alt', 'not found');
    $('canvas').attr({
        'height':"300",
        'width':'600'
    })
    $('img').removeAttr('alt');
});