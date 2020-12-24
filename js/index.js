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
  $("#section1 .catchCopy__text").addClass("catchCopy__text--show");
  $("#section1 .section1__summary").addClass("section1__summary--show");
  if (device === "pc") {
    $("#section1").addClass("section1--pc");
  }

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
  var headerHeight = device === "sp" ? 60 : 100;
  // sectionのマージン
  var sectionMargin = device === "sp" ? 40 : 80;

  // sectionの位置
  var section2Pos = $("#section2").offset().top;
  var section3Pos = $("#section3").offset().top;
  var section4Pos = $("#section4").offset().top;
  var section5Pos = $("#section5").offset().top;
  var section6Pos = $("#section6").offset().top;
  var section7Pos = $("#section7").offset().top;

  function sectionPos() {
    section2Pos = $("#section2").offset().top;
    section3Pos = $("#section3").offset().top;
    section4Pos = $("#section4").offset().top;
    section5Pos = $("#section5").offset().top;
    section6Pos = $("#section6").offset().top;
    section7Pos = $("#section7").offset().top;
    console.log("section4Pos", section4Pos);
    console.log("section5Pos", section5Pos);
    console.log("section6Pos", section6Pos);
  }

  // carousel 描画が終わってから再取得
  setTimeout(() => {
    sectionPos();
  }, 500);

  console.log("section4Pos", section4Pos);
  console.log("section5Pos", section5Pos);
  console.log("section6Pos", section6Pos);

  // リサイズされたら位置取り直し
  $(window).resize(function () {
    sectionPos();
  });

  // ナビゲーション関連
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

  // scroll起因のアニメーション
  /** 間引くかどうか */
  var wait = false;
  $(window).scroll(function () {
    $(".section").each(function () {
      // scroll位置取得
      if (!wait) {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).outerHeight();

        wait = true;
        setTimeout(() => {
          wait = false;
        }, 50);
      }

      // 書くsectionでの昨日出し分け
      if (windowHeight + scroll > section2Pos + sectionMargin) {
        $("#section2").addClass("section__show");
      }
      if (windowHeight + scroll > section3Pos + sectionMargin) {
        $("#section3").addClass("section__show");
      }
      if (windowHeight + scroll > section4Pos + sectionMargin) {
        $("#section4").addClass("section__show");
      }
      if (windowHeight + scroll > section5Pos + sectionMargin) {
        $("#section5").addClass("section__show");
      }
      if (windowHeight + scroll > section6Pos + sectionMargin) {
        $("#section6").addClass("section__show");
        if (device !== "pc") {
          $("#section6 .section6__listItem").css({
            transform: "translateY(0)",
            opacity: "1",
          });
        } else {
          $("#section6 .section6__listItem").css({
            opacity: "1",
          });
        }
      }
      if (windowHeight + scroll > section7Pos + sectionMargin) {
        $("#section7").addClass("section__show");
      }
    });
  });
})(jQuery);
