class MyForm {
  constructor() {
    this.formSubmitButton = document.getElementById('button1')
    this.numberInputField = document.getElementById('inputField1')
    this.resultOutputField = document.getElementById('inputField2')
    this.formSubmitButton.addEventListener('click', this.formSubmissionHandler.bind(this))
  }

  formSubmissionHandler(event) {
    if (this.numberInputField.value === '') {
      alert('please enter a something')
    } else if (isNaN(this.numberInputField.value)) {
      this.resultOutputField.value = false
      event.preventDefault();
    } else {
      this.resultOutputField.value = true
      alert('your form is submitted')
    }
  }
}

const classObject1 = new MyForm()
