class MyClass {
    constructor() {
        this.buttonObject = document.getElementById('button1')
        this.firstInputObject = document.getElementById('inputField1')
        this.secondInputObject = document.getElementById('inputField2')
        this.buttonObject.addEventListener(
            'click',
            this.mainFunction.bind(this)
        )
    }

    mainFunction(event) {
        event.preventDefault()
        if (this.firstInputObject.value === '') {
            alert('please enter a value')
        } else if (!isNaN(this.firstInputObject.value)) {
            this.secondInputObject.value = true
        } else {
            this.secondInputObject.value = false
        }
    }
}

const classObject = new MyClass()
