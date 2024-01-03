
$(function(){

// ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});

// ハンバーガー開閉メニュー
$(".openbtn1").click(function(){
  $('.hamburger').toggleClass('hamu-open');
});

// タイトルスライドイン（main-title）
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.main-fadeout').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout").removeClass("main-fadein");
    }
  });
});

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.main-fadeout3').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout3").removeClass("main-fadein");
    }
  });
});

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.main-fadeout2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout2").removeClass("main-fadein");
    }
  });
});

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.main-fadeout4').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout4").removeClass("main-fadein");
    }
  });
});

// ABOUTの画像とテキストフェードイン
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  // 1行目
  $('.right').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-right');
    }else {
      $(".right").removeClass("fadein-right");
    }
  });
  $('.left').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-left');
    }else {
      $(".left").removeClass("fadein-left");
    }
  });
  // 2行目
  $('.right-2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-right');
    }else {
      $(".right-2").removeClass("fadein-right");
    }
  });
  $('.left-2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-left');
    }else {
      $(".left-2").removeClass("fadein-left");
    }
  });
  // 3行目
  $('.right-3').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-right');
    }else {
      $(".right-3").removeClass("fadein-right");
    }
  });
  $('.left-3').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-left');
    }else {
      $(".left-3").removeClass("fadein-left");
    }
  });
});

// ボタンフェードイン（btn-1）
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.btn-1-fadeout').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('btn-1-fadein');
    }else {
      $(".btn-1-fadeout").removeClass("btn-1-fadein");
    }
  });
});

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.btn-1-fadeout2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('btn-1-fadein');
    }else {
      $(".btn-1-fadeout2").removeClass("btn-1-fadein");
    }
  });
});

// PRODUCT画像（img-wrap）
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.img-wrap-none').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('img-wrap');
    }else {
      $(".img-wrap-none").removeClass("img-wrap");
    }
  });
});
  


});