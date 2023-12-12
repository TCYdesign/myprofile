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