class MyCheckbox {
  constructor() {
    this.checkBoxObject = $('.checkboxes')
    $(this.checkBoxObject).click(this.checkBoxHandler)
  }

  checkBoxHandler() {
    if (this.checked) {
      $(this).parent().siblings("div").show()
      const parentDiv = $(this).parentsUntil("div")
      parentDiv[0].scrollIntoView()
      $(this).parent().siblings("div").find("input").prop("checked",true)
    }
    else {
      $(this).parent().siblings("div").hide()
      $(this).parent().siblings("div").find("input").prop("checked",false)
    }
  }
}

const classObject = new MyCheckbox()
