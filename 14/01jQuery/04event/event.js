$(document).ready(function(){
    // $("button").on("click", function(){
    //     $(this).text('Clicked');
    // });
    // $("button").on({
    //     click:function(){
    //         $(this).text('Clicked');
    //     },
    //     mouseover:function(){
    //         $(this).text('mouseover');
    //     },
    //     mouseout:function(){
    //         $(this).text('mouseout');
    //     }
    // });
    $('button').hover(
        function(){
            $(this).text('mouseover');
        },
        function(){
            $(this).text('mouseout');
        }
    );
    
});