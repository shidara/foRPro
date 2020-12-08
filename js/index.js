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
    $(".hamburgerMenu").toggleClass("hamburgerMenu--close");
  });

  // やること
  function hoge(entries) {
    if (entries[0].intersectionRatio == 0) {
      return;
    } else {
      console.log("fuga", entries);
    }
  }

  var section2 = document.getElementsByClassName("section");

  // 各sectionが表示領域に入ったかチェック
  var observer = new IntersectionObserver(hoge);
  observer.observe(section2);
})(jQuery);
