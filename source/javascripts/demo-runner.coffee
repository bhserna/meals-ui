html = (state) ->
  """
  <div>
    <h1>Control de Demo</h1>
    <p>Paso actual <strong>#{state.currentStep}</strong></p>
    <button data-before #{if state.currentStep is 1 then "disabled"}>
      <i class="fa fa-arrow-left"></i>
    </button>
    <button data-next #{if state.currentStep is 5 then "disabled"}>
      <i class="fa fa-arrow-right"></i>
    </button>
  </div>
  """

render = (state) ->
  state.element.html($ html(state))
  showStep(state)

  state.element.find("[data-next]").click ->
    state.currentStep += 1
    render(state)

  state.element.find("[data-before]").click ->
    state.currentStep -= 1
    render(state)


showStep = (state) ->
  $("[data-order-step]").addClass("is-hidden")
  $("[data-order-step~='#{state.currentStep}']").removeClass("is-hidden")

$ ->
  state =
    currentStep: 1
    element: $(".js-demo-runner")

  render(state)
