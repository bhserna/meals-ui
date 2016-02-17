$ ->
  $(".order-v2").css(maxHeight: $(window).height())
  $(".order").css(maxHeight: $(window).height())

  $(window).resize ->
    $(".order-v2").css(maxHeight: $(window).height())
    $(".order").css(maxHeight: $(window).height())

  $(".js-order-toggle").click ->
    $(".order-v2").toggleClass("order-v2--closed")
    $(".order-v2").toggleClass("order-v2--open")
