$(function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('body').toggleClass('active');
        $('.menu').toggleClass('active');
    })

    $('.menu a').click(function(){
        $('.menu-btn').removeClass('active');
        $('body').removeClass('active');
        $('.menu').removeClass('active');
    })



});

if($(window).width() < 768) {

$('.features__list').slick({
    
    slidesToShow: 1,
    arrows: false,
    centerMode: true,

  });
}


$(".menu, .footer__menu, .features__item, .main-screen, .footer__menu").on("click","a:not('.privacy-link')", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);

});

// ------start sticky header------

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
    }); 
//-------start mobil menu----------

//start cookies js
$('.cookies__button').click(function(){
    $('.cookies-banner').fadeOut();
})

//end cookies js
