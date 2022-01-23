$(document).ready(() => {
    
    var activeMenu = 0;

    $(".hamburger").click(function(){

        $('.hamburger').toggleClass("is-active");
        $('.hamburger').children().toggleClass("burger-click");
    
        $("nav").stop().animate({width:'toggle'}, 400);
        
        if(activeMenu == 0){
            $('html').css('overflow', 'hidden');
            
            activeMenu = 1;
        } else {
            $('html').css('overflow', 'auto');

            activeMenu = 0;
        }
    });

});