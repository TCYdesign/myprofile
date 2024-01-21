$(function(){
$('a[href^="#"]').click(function () {
  const speed = 400;
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
  if ($(this).scrollTop() > 3000) {
    $('#page-top').fadeIn();
  } else {
    $('#page-top').fadeOut();
  }
});


$(function(){
  $('.yoko').addClass('fade-in');
  });

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.about-left').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fade-in-aboutleft');
    }
  });
});

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.about-right').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 140) {
      $(this).addClass('fade-in-aboutright');
    }
  });
});


$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.b-right').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fade-in-b-right');
    }
  });
  $('.b-left').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fade-in-b-left');
    }
  });

  $('.company-left').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 250) {
      $(this).addClass('fade-in-aboutleft');
    }
  });
  $('.company-right').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 250) {
      $(this).addClass('fade-in-aboutright');
    }
  });
});


});