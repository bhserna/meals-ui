(function() {
  var html, render, showStep;

  html = function(state) {
    return "<div>\n  <h1>Control de Demo</h1>\n  <p>Paso actual <strong>" + state.currentStep + "</strong></p>\n  <button data-before " + (state.currentStep === 1 ? "disabled" : void 0) + ">\n    <i class=\"fa fa-arrow-left\"></i>\n  </button>\n  <button data-next " + (state.currentStep === 8 ? "disabled" : void 0) + ">\n    <i class=\"fa fa-arrow-right\"></i>\n  </button>\n</div>";
  };

  render = function(state) {
    state.element.html($(html(state)));
    showStep(state);
    state.element.find("[data-next]").click(function() {
      state.currentStep += 1;
      return render(state);
    });
    return state.element.find("[data-before]").click(function() {
      state.currentStep -= 1;
      return render(state);
    });
  };

  showStep = function(state) {
    $("[data-order-step]").addClass("is-hidden");
    return $("[data-order-step~='" + state.currentStep + "']").removeClass("is-hidden");
  };

  $(function() {
    var state;
    state = {
      currentStep: 1,
      element: $(".js-demo-runner")
    };
    return render(state);
  });

}).call(this);
