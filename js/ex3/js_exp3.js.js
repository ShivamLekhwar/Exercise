class MyClass {
    constructor() {
        this.checkBoxObject = document.getElementsByClassName('checkboxes')

        for (let i = 0; i < this.checkBoxObject.length; i += 1) {
            this.checkBoxObject[i].addEventListener('click', this.mainFunction)
        }
    }

    mainFunction() {
        const children = document.getElementsByClassName('child')

        for (let i = 0; i < children.length; i += 1) {
            if (this.checked === false && this.value === children[i].id) {
                children[i].style.display = 'none'

                if (children[i].id === 'child1') {
                    const colorObject = document.getElementsByClassName(
                        'colors'
                    )
                    for (let k = 0; k < colorObject.length; k += 1) {
                        colorObject[k].checked = false
                    }
                } else if (children[i].id === 'child2') {
                    const drinkingObject = document.getElementsByClassName(
                        'drinking'
                    )
                    for (let k = 0; k < drinkingObject.length; k += 1) {
                        drinkingObject[k].checked = false
                    }
                } else if (children[i].id === 'child3') {
                    const filmObject = document.getElementsByClassName('film')
                    for (let k = 0; k < filmObject.length; k += 1) {
                        filmObject[k].checked = false
                    }
                } else if (children[i].id === 'child4') {
                    const bikeObject = document.getElementsByClassName('biking')
                    for (let k = 0; k < bikeObject.length; k += 1) {
                        bikeObject[k].checked = false
                    }
                }
            } else if (this.value === children[i].id) {
                children[i].style.display = 'block'
                const parentObject = document.getElementById('parent')

                if (children[i].id === 'child1') {
                    parentObject.scrollBy(0, 5)
                } else if (children[i].id === 'child2') {
                    parentObject.scrollBy(0, 25)
                } else if (children[i].id === 'child3') {
                    parentObject.scrollBy(0, 45)
                } else if (children[i].id === 'child4') {
                    parentObject.scrollBy(0, 65)
                }
            }
        }
    }
}

const classObject = MyClass()
