$(function(){
    var $buttons = $('.left-menu');
    var $sub = $('.submenu');
    $buttons.on('click', function(){
        $buttons.removeClass('active');
        $(this).addClass('active');
    });
    $('#contact').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.pop').fadeToggle();
    });
    $('.top-menu').on('click', function(){
        $('.menus').removeClass('active');
        $sub.slideUp(600);
        $(this).addClass('active');
    });
    $('#1b').on('click', function(){
        $('.menus').not('#1b').removeClass('active');
        $sub.not('.subMenu1').slideUp(600);
        $('.subMenu1').slideToggle(600);
    });
    $('#2b').on('click', function(){
        $('.menus').not('#2b').removeClass('active');
        $sub.not('.subMenu2').slideUp(600);
        $('.subMenu2').slideToggle(600);
    });
});