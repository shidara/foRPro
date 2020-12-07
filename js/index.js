(function ($) {
  // メニューボタンを押した際の挙動
  $("#header__navigationButton").click(function () {
    if ($("#header__navigationButton").hasClass("icon--menu")) {
      // メニューを開いた時の挙動
      $("#header__navigationButton")
        .removeClass("icon--menu")
        .addClass("icon--delete");
    } else {
      // メニューを閉じた時の挙動
      $("#header__navigationButton")
        .removeClass("icon--delete")
        .addClass("icon--menu");
    }
    $(".navigation").toggleClass("navigation--show");
    setTimeout(() => {
      $(".navigation .navigation__listItem").toggleClass(
        "navigation__listItem--animation"
      );
    }, 100);
    $(".body").toggleClass("body--preventScroll");
    // 上記だとスクロール位置が失われるので対策必要
  });

  // $(".slick01").slick();
})(jQuery);
