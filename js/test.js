$(function(){
    'use strict';
    //adjust slider height
    var windowheight=$(window).height(),
        upperheight=$('.upper-bar').innerHeight(),
        navheight=$('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowheight-(upperheight+navheight))
    //featured work shuffle
    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')==='all')
        {
            $('.shuffle-images .row .col-md').css('opacity','1');
        }
        else
        {
            $('.shuffle-images .row .col-md').css('opacity','0.09');
           $( $(this).data('class')).parent().css('opacity','1');
        }
    });
    $('.slider .carousel-indicators li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});