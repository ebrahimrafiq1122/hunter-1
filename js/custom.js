$(document).ready(function(){
    // banner slide


    $('.banner_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        fade:true,
        prevArrow: '<i class="fas fa-arrow-alt-circle-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-arrow-alt-circle-right right-arrow"></i>',
    });


    // service slide
    $('.service_slide').slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        vertical:true,
        prevArrow: '<i class="fas fa-chevron-up up-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-down down-arrow"></i>',
    });


    // img slide
    $('.img_slider').slick({
        slidesToShow:3,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll:1,
        vertical:true,
        asNavFor:'.text_slider',
        prevArrow: '<i class="fas fa-chevron-up up-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-down down-arrow"></i>',
    });

    // text slider

    $('.text_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        vertical:true,
        arrows:false,
        asNavFor:'.img_slider',
    });

    // counter  
    $('.counter').counterUp({
    delay: 10,
    time: 10000,
    });


});
