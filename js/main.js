$(function(){
  $(".slider__inner").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000
  });
});