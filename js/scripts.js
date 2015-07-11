$(function(){
    var $buttons = $('.left-menu');
    $buttons.on('click', function(){
        $buttons.removeClass('active');
        $(this).addClass('active');
    });
    $('#contact').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').toggleClass('menuClick');
        $('.information').slideToggle(800);
    });
});