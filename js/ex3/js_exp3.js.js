class MyClass {
  constructor() {
    this.checkBoxObject = document.getElementsByClassName('checkboxes')
    this.parentObject = document.getElementById('parent')
    for (let i = 0; i < this.checkBoxObject.length; i += 1) {
      this.checkBoxObject[i].addEventListener('click', this.checkBoxHandler.bind(this))
    }
  }

  checkBoxHandler(event) {
    if (event.target.checked === true) {
      // show div of child
      const childDiv = document.getElementById(event.target.value)
      childDiv.style.display = 'block'
      
      if (childDiv.id === 'child1') {
        this.parentObject.scrollBy(0, 5)
      }
      if (childDiv.id === 'child2') {
        this.parentObject.scrollBy(0, 25)
      }
      if (childDiv.id === 'child3') {
        this.parentObject.scrollBy(0, 45)
      }
      if (childDiv.id === 'child4') {
        this.parentObject.scrollBy(0, 65)
      }
      // all child of that check -- true
      const childCheck = document.getElementsByClassName(event.target.value)
      for (let i = 0; i < childCheck.length; i += 1) {
        childCheck[i].checked = true
      }
    }
    else {
      // hide child div
      const childDiv = document.getElementById(event.target.value)
      childDiv.style.display = 'none'
      // all child of that check -- false
      const childCheck = document.getElementsByClassName(event.target.value)
      for(let i = 0; i < childCheck.length; i += 1) {
        childCheck[i].checked = false
      }
    }
  }
}

const classObject = new MyClass()
