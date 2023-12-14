
$(function(){

$('a[href^="#"]').click(function () {
  const speed = 800;
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

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.box').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 300) {
      $(this).addClass('box rotateX');
    }
  });
});

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.box2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 300) {
      $(this).addClass('box rotateX2');
    }
  });
});

});