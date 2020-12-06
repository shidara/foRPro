(function ($) {
  $(".section5__carouselList").slick({
    arrows: true,
    dots: true, //前/次にスライドを切り替える矢印
    slidesToShow: 3, // 表示するスライド数
    slidesToScroll: 3, // 1回で動くスライド数
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})(jQuery);
