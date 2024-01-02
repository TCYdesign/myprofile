
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
  $('.img01').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 0) {
      $('.img01').addClass('img-fadein');
    }else {
      $(".img01").removeClass("img-fadein");
    }
    if (scrollAmount > position - windowHeight + 600) {
      $('.img02').addClass('img-fadein-gray');
    }else {
      $(".img02").removeClass("img-fadein-gray");
    }
    if (scrollAmount > position - windowHeight + 1100) {
      $('.img03').addClass('img-fadein');
    }else {
      $(".img03").removeClass("img-fadein");
    }
    if (scrollAmount > position - windowHeight + 1600) {
      $('.img04').addClass('img-fadein-gray');
    }else {
      $(".img04").removeClass("img-fadein-gray");
    }
  });
});

});
// ----------fadinここまで--------------------
