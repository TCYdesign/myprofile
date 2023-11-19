$(function(){
$('.fade').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  speed: 2500,
  // cssEase: 'linear'
});

$('.nav').hover(
  function () {
    $(this).animate({ 'opacity': 0.6 });
  },
  function () {
    $(this).animate({ 'opacity': 1.0 });
  }
); 

$(window).scroll(()=>{
  if($(window).scrollTop() > 100){
    $('#pagetop').fadeIn();
  }else{
    $('#pagetop').fadeOut();
  }
});
});