$(function(){

// ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});

// ハンバーガー開閉メニュー
$(".openbtn1").click(function(){
  $('.hamburger').toggleClass('hamu-open');
});

// main-fadein
$(function(){
  $('.main-slide-h1').addClass('main-slidein');
  $('.main-slide-p').addClass('main-slidein');
  });

// 画像のフェードイン
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.p01').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight) {
      $('.main-line-fadeout').addClass('main-line-fadein');
    }else {
      $(".main-line-fadeout").removeClass("main-line-fadein");
    }
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('p-div-fadein');
    }else {
      $(".p01").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 200) {
      $(".p02").addClass('p-div-fadein');
    }else {
      $(".p02").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 800) {
      $(".p03").addClass('p-div-fadein');
    }else {
      $(".p03").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 900) {
      $(".p04").addClass('p-div-fadein');
    }else {
      $(".p04").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 1300) {
      $(".p05").addClass('p-div-fadein');
    }else {
      $(".p05").removeClass("p-div-fadein");
    }
  });
});
// ----------fadinここまで--------------------
});