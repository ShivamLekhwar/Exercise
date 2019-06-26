class MyClass {
    constructor() {
        this.cb = document.getElementsByClassName('checkboxes')

        for (let i = 0; i < this.cb.length; i += 1) {
            this.cb[i].addEventListener('click', this.mainFunction)
        }
    }

    mainFunction() {
        const children = document.getElementsByClassName('child')

        for (let i = 0; i < children.length; i += 1) {
            if (this.checked === false && this.value === children[i].id) {
                children[i].style.display = 'none'

                if (children[i].id === 'child1') {
                    const c1 = document.getElementsByClassName('colors')
                    for (let k = 0; k < c1.length; k += 1) {
                        c1[k].checked = false
                    }
                } else if (children[i].id === 'child2') {
                    const d1 = document.getElementsByClassName('drinking')
                    for (let k = 0; k < d1.length; k += 1) {
                        d1[k].checked = false
                    }
                } else if (children[i].id === 'child3') {
                    const f1 = document.getElementsByClassName('film')
                    for (let k = 0; k < f1.length; k += 1) {
                        f1[k].checked = false
                    }
                } else if (children[i].id === 'child4') {
                    const b1 = document.getElementsByClassName('biking')
                    for (let k = 0; k < b1.length; k += 1) {
                        b1[k].checked = false
                    }
                }
            } else if (this.value === children[i].id) {
                children[i].style.display = 'block'
                const pp = document.getElementById('parent')

                if (children[i].id === 'child1') {
                    pp.scrollBy(0, 5)
                } else if (children[i].id === 'child2') {
                    pp.scrollBy(0, 25)
                } else if (children[i].id === 'child3') {
                    pp.scrollBy(0, 45)
                } else if (children[i].id === 'child4') {
                    pp.scrollBy(0, 65)
                }
            }
        }
    }
}

const classObject = MyClass()
