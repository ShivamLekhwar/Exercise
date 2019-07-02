class MySelectBox {
  constructor() {
    this.addRemoveButton = document.getElementsByClassName('button')
    this.firstSelectBox = document.getElementById('select1')
    this.secondSelectBox = document.getElementById('select2')
    this.addRemoveButton[0].addEventListener('click', this.addRemoveHandler.bind(this))
    this.addRemoveButton[1].addEventListener('click', this.addRemoveHandler.bind(this))
  }

  addRemoveHandler(event) {
    let removeIndexId = this.firstSelectBox.id
    let addIndexId = this.secondSelectBox.id

    if (event.target.id === 'button2') {
      addIndexId = this.firstSelectBox.id
      removeIndexId = this.secondSelectBox.id
    }
    const option = document.getElementById(removeIndexId).options
    let selectCount = 0

    for (let i = 0; i < option.length; i += 1) {
      if (option[i].selected === true) {
        selectCount += 1
      }
    }

    // console.log(selectCount)
    for (let i = 0; i < selectCount; i += 1) {
      const index = document.getElementById(removeIndexId).selectedIndex
      const newOptionObject = document.createElement('option')
      newOptionObject.appendChild(document.createTextNode(option[index].text))
      document.getElementById(removeIndexId).remove(index)
      document.getElementById(addIndexId).append(newOptionObject)
    }
  }
}

const classObject = new MySelectBox()
