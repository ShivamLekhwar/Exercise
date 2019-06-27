class MySelectBox {
    constructor(id) {
        this.id = id
    }

    addRemove() {
        let temp1 = 'select1'
        let temp2 = 'select2'

        if (this.id === 'button2') {
            temp1 = 'select2'
            temp2 = 'select1'
        }

        const index = document.getElementById(temp1).selectedIndex
        const option = document.getElementById(temp1).options
        const newOptionObject = document.createElement('option')

        newOptionObject.appendChild(document.createTextNode(option[index].text))
        document.getElementById(temp1).remove(index)
        document.getElementById(temp2).append(newOptionObject)
    }
}

MySelectBox.id = ''

const classObject = new MySelectBox(
    document.getElementsByClassName('select')[0]
)

const buttons = document.getElementsByClassName('button')
for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', classObject.addRemove)
}
