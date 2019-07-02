class MyDiv {
  constructor() {
    this.parentDiv = document.getElementsByClassName('container')
    this.addDivButton = document.getElementById('button')
    this.divCount = 0
    this.addDivButton.addEventListener('click',this.createDiv.bind(this))  
  }

  increaseCount() {
    this.divCount = this.divCount + 1
  }

  getCount() {
    return this.divCount
  }

  createDiv() {
    const newDivElement = document.createElement('div')
    newDivElement.setAttribute('class', 'inner')
    newDivElement.setAttribute('id', () => this.getCount())
    newDivElement.addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      alert(newDivElement.innerHTML)
    })
    const content = document.createTextNode(this.getCount())
    newDivElement.append(content)
    this.parentDiv[0].append(newDivElement)
    this.increaseCount()
  }
}

const classObject = new MyDiv()
