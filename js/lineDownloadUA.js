(function ($) {
  // UA
  var ua = navigator.userAgent;
  if (ua.indexOf("iPhone") > -1) {
    $(".lineForm__button--android").css({
      display: "none",
    });
  }
  if (ua.indexOf("Android") > -1) {
    $(".lineForm__button--ios").css({
      display: "none",
    });
  }
})(jQuery);
