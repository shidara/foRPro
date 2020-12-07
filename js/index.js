(function ($) {
  // ロード時にキャッチコピーのフェードin
  $("#section1 .catchCopy__text").animate(
    {
      opacity: "1",
    },
    "slow",
    "swing"
  );

  // メニューボタンを押した際の挙動
  $("#header__navigationButton").click(function () {
    $(".navigation").toggleClass("navigation--show");
    setTimeout(() => {
      $(".navigation .navigation__listItem").toggleClass(
        "navigation__listItem--animation"
      );
    }, 100);
    $(".body").toggleClass("body--preventScroll");
    // 上記だとスクロール位置が失われるので対策必要
  });
})(jQuery);
