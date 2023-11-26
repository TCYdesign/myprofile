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

$('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });


  $(window).scroll(function(){
    $('section').each(function (){
      const pos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('fadein');
      }
    });
  });

  $('.works-pic img').click(function(){
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src',imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // ×を押したら閉じる
  $('.close-btn').click(function(){
    $('.modal').fadeOut();
    return false
  });
});