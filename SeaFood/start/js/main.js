$(function(){

    $('.header-slider').slick({
        dots:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>'

        
    });
    
    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.product__content',
        focusOnSelect: true,
        vertical:true,
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade:true,
      });
                      

});