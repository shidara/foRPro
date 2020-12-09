(function ($) {
  // UA
  var ua = navigator.userAgent;
  var device = "";
  if (
    ua.indexOf("iPhone") > -1 ||
    (ua.indexOf("Android") > -1 && ua.indexOf("Mobile") > -1)
  ) {
    device = "sp";
  } else if (ua.indexOf("iPad") > -1 || ua.indexOf("Android") > -1) {
    // タブレット
    device = "tab";
  } else {
    device = "pc";
  }
  // ロード時にキャッチコピーのフェードin
  $("#section1 .catchCopy__text")
    .animate(
      {
        opacity: "1",
      },
      "slow",
      "swing"
    )
    .css({
      transform: "translateY(0)",
    });

  setTimeout(() => {
    $("#section1 .section1__form").css({
      transform: "translateY(0)",
      opacity: "1",
    });
  }, 700);

  // メニューボタンを押した際の挙動
  $("#header__navigationButton").click(function () {
    $(".navigation").toggleClass("navigation--show");
    $(".hamburgerMenu").toggleClass("hamburgerMenu--close");
  });

  // Headerのサイズ
  console.log("ua", device);
  var headerHeight = device === "sp" ? 60 : 100;
  // sectionの位置
  var section3Pos = $("#section3").offset().top;
  var section4Pos = $("#section4").offset().top;
  var section5Pos = $("#section5").offset().top;
  var section6Pos = $("#section6").offset().top;

  function sectionPos() {
    section3Pos = $("#section3").offset().top;
    section4Pos = $("#section4").offset().top;
    section5Pos = $("#section5").offset().top;
    section6Pos = $("#section6").offset().top;
  }

  // リサイズされたら位置取り直し
  $(window).resize(function () {
    sectionPos();
  });

  $(".navigation__listItemButton").click(function () {
    if (device === "sp") {
      $(".navigation").toggleClass("navigation--show");
      $(".hamburgerMenu").toggleClass("hamburgerMenu--close");
    }
    // 押したボタンの番号
    var currentNum = $(this).attr("data-transform");

    setTimeout(() => {
      if (currentNum === "3") {
        $("html,body").animate({ scrollTop: section3Pos - headerHeight });
      } else if (currentNum === "4") {
        $("html,body").animate({ scrollTop: section4Pos - headerHeight });
      } else if (currentNum === "5") {
        $("html,body").animate({ scrollTop: section5Pos - headerHeight });
      } else if (currentNum === "6") {
        $("html,body").animate({ scrollTop: section6Pos - headerHeight });
      }
    }, 200);
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
