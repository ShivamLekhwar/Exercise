class MyDiv {
    static increaseCount() {
        this.count = this.count + 1
    }

    static getCount() {
        return this.count
    }

    // eslint-disable-next-line class-methods-use-this
    createDiv() {
        const divObject = document.getElementsByClassName('container')

        const newElement = document.createElement('div')

        newElement.setAttribute('class', 'inner')
        const a = MyDiv.getCount()

        newElement.setAttribute('id', a)
        newElement.addEventListener('click', () => {
            // eslint-disable-next-line no-alert
            alert(newElement.innerHTML)
        })
        const content = document.createTextNode(MyDiv.getCount())
        newElement.append(content)

        divObject[0].append(newElement)
        MyDiv.increaseCount()
    }
}

MyDiv.count = 0

const classObject = new MyDiv()

const buttonObject = document.getElementById('button')
buttonObject.addEventListener('click', () => {
    classObject.createDiv()
})
