/* eslint-disable no-alert */
class MyClass {
    constructor() {
        this.inputObject = document.getElementById('input1')
        this.startObject = document.getElementById('button1')
        this.pauseObject = document.getElementById('button2')
        this.resumeObject = document.getElementById('button3')
        this.div1Object = document.getElementById('div1')
        this.paraObject = document.getElementById('p1')
        this.startObject.addEventListener('click', this.mainFunction.bind(this))
    }

    mainFunction() {
        if (this.inputObject.value === '' || isNaN(this.inputObject.value)) {
            alert('enter a number please')
            this.inputObject.value = ''
        } else {
            this.startObject.style.display = 'none'
            this.paraObject.style.display = 'block'
            this.pauseObject.style.display = 'block'
            this.div1Object.style.display = 'none'

            MyClass.time = this.inputObject.value

            this.pause = false
            this.paraObject.textContent = MyClass.time

            const a = setInterval(() => {
                if (this.pause === false) {
                    this.pauseObject.addEventListener('click', () => {
                        this.pause = true
                        this.pauseObject.style.display = 'none'
                        this.resumeObject.style.display = 'block'
                    })
                    this.resumeObject.addEventListener('click', () => {
                        this.pause = false
                        this.pauseObject.style.display = 'block'
                        this.resumeObject.style.display = 'none'
                    })
                    if (MyClass.time > 0) {
                        MyClass.time -= 1
                        this.paraObject.textContent = MyClass.time
                    } else {
                        alert('times up')
                        this.div1Object.style.display = 'block'
                        this.inputObject.value = ''
                        this.pauseObject.style.display = 'none'
                        this.startObject.style.display = 'block'
                        this.paraObject.style.display = 'none'
                        clearInterval(a)
                    }
                }
            }, 1000)
        }
    }
}
const classObject = new MyClass()
