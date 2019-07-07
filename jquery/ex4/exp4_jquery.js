class MyForm {
  constructor() {
    this.formSubmitButton = $("#submit_button")
    this.numberInputField = $("#inputField1")
    this.resultOutputField = $("#inputField2")
    $(this.formSubmitButton).click(this.formSubmissionHandler.bind(this))
  }

  formSubmissionHandler(event) {
    if ($(this.numberInputField[0]).val() == '') {
      alert('please enter a something')
    } else if ($.isNumeric($(this.numberInputField[0]).val())) {
      $(this.resultOutputField).val(true)
      alert('your form is submitted') 
    } else {
       $(this.resultOutputField).val(false)
      event.preventDefault();
    }
  }
}

const classObject1 = new MyForm()
