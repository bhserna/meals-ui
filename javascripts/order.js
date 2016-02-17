(function() {
  $(function() {
    $(".order-v2").css({
      maxHeight: $(window).height()
    });
    $(".order").css({
      maxHeight: $(window).height()
    });
    $(window).resize(function() {
      $(".order-v2").css({
        maxHeight: $(window).height()
      });
      return $(".order").css({
        maxHeight: $(window).height()
      });
    });
    return $(".js-order-toggle").click(function() {
      $(".order-v2").toggleClass("order-v2--closed");
      return $(".order-v2").toggleClass("order-v2--open");
    });
  });

}).call(this);
