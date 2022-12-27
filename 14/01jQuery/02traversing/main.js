$(document).ready(function(){
    let targetElement = $('.target-element');
    if(targetElement.is('div')){
        targetElement.text('Div true');
    }
    let listElements = $('li');
    // listElements.not('.curent').text('New');
    listElements.slice(2,4).text('slice');

    // $('.curent').next().text("Next");
    $('.curent').nextAll().text("Next");
    // $('.curent').prevAll().text("Prev");
    $('.curent').prev().text("Prev");
    $('p span').wrap('<div></div>');
    $('p span').wrapInner('<em></em>');
});