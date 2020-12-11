(function ($) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".header").addClass("header--shadow");
    } else {
      $(".header").removeClass("header--shadow");
    }
  });
})(jQuery);
