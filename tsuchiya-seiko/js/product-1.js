
$(function(){

// ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});

// ハンバーガー開閉メニュー
$(".openbtn1").click(function(){
  $('.hamburger').toggleClass('hamu-open');
});

$(function(){
$('.img01').addClass('img-fadein');
});

// タイトルスライドイン（main-title）
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.img02').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $('.img02').addClass('img-fadein-gray');
    }else {
      $(".img02").removeClass("img-fadein-gray");
    }
    if (scrollAmount > position - windowHeight + 600) {
      $('.img03').addClass('img-fadein');
    }else {
      $(".img03").removeClass("img-fadein");
    }
    if (scrollAmount > position - windowHeight + 1100) {
      $('.img04').addClass('img-fadein-gray');
    }else {
      $(".img04").removeClass("img-fadein-gray");
    }
  });
});
});
