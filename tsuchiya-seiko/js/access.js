
$(function(){

// ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});

// ハンバーガー開閉メニュー
$(".openbtn1").click(function(){
  $('.hamburger').toggleClass('hamu-open');
  $('body').toggleClass('body-overflow');
});

// main-fadein
$(function(){
  $('.main-fadeout').addClass('main-fadein');
  });

});