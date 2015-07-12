$(function(){
    var $buttons = $('.left-menu');
    var $sub = $('.submenu');
    $buttons.on('click', function(){
        $buttons.removeClass('active');
        $(this).addClass('active');
        //$sub.removeClass('vis-content');

    });
    $('#contact').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').toggleClass('menuClick');
        $('.information').slideToggle(800);
    });
    $('#1b').on('click', function(){
        $sub.not('.subMenu1').removeClass('vis-content');
        $('.subMenu1').toggleClass('vis-content');
    });
    $('#2b').on('click', function(){
        $sub.not('.subMenu2').removeClass('vis-content');
        $('.subMenu2').toggleClass('vis-content');
    });
});