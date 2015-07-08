$(function(){
    var $buttons = $('.left-menu');
    $buttons.on('click', function(e){
        e.preventDefault();
        $buttons.removeClass('active');
        $(this).addClass('active');
    });

    $('#1b').on('click', function(){
        //$('.subMenu1').slideToggle(600);
        $('.products').removeClass('vis-content');
        $('.pults').addClass('vis-content');
    });

    $('#2b').on('click', function(){
        //$('.subMenu2').slideToggle(600);
        $('.products').removeClass('vis-content');
        $('.tech').addClass('vis-content');
    });
    $('#contact').click(function(e){
        $(this)
        .toggleClass('active').toggleClass('menuClick');
                $('.information').slideToggle(800);
    });
});