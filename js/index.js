(function ($) {
  // メニューボタンを押した際の挙動
  $("#header__navigationButton").click(function () {
    if ($("#header__navigationButton").hasClass("icon--menu")) {
      $("#header__navigationButton")
        .removeClass("icon--menu")
        .addClass("icon--delete");
    } else {
      $("#header__navigationButton")
        .removeClass("icon--delete")
        .addClass("icon--menu");
    }
    $(".navigation").toggleClass("navigation--show");
    $(".body").toggleClass("body--preventScroll");
    // 上記だとスクロール位置が失われるので対策必要
  });
})(jQuery);
