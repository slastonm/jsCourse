$(document).ready(function(){
    let getALl= $('h1');
    // $("*").text("Selected elementst");
    // $(".text, h1, .card").text("Selected elementst");  
    $("[class]").text("Selected");
    $("[id]").text("Selected");
    $(`a[href='jquery.html']`).text("Selected");
    $("p:has(span)").text("Block and span");
    $(":input").val('');
    $(":password").val('11111');
    $(":checkbox").prop('checked', true);
    $(":radio").prop('checked', true);
    $(":submit").text("Submit disabled");
})