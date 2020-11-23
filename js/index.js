(function ($) {
  // メニューボタンを押した際の挙動
  $("#header__navigationButton").click(function () {
    $("#header__navigationButton").toggleClass(
      "header__navigationButton--close"
    );
    $(".navigation").toggleClass("navigation--show");
    $(".body").toggleClass("body--preventScroll");
    // 上記だとスクロール位置が失われるので対策必要
  });
})(jQuery);
