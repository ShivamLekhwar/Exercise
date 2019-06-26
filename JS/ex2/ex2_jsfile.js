/* eslint-disable no-alert */

class MyCheckBox {
    constructor() {
        this.checks = document.getElementsByClassName('meri')

        for (let i = 0; i < this.checks.length; i += 1) {
            // eslint-disable-next-line func-names

            this.checks[i].addEventListener('click', this.mainFunction)
        }
    }

    static increaseCount() {
        this.count = this.count + 1
    }

    static decreaseCount() {
        this.count = this.count - 1
    }

    static initializeCount() {
        this.count = 0
    }

    static getCount() {
        return this.count
    }

    static uncheckAll() {
        for (let i = 0; i < this.array.length; i += 1) {
            this.array[i].checked = false
        }
    }

    static initializeArray() {
        this.array = []
    }

    static cutArray(checkedIndex) {
        const cut = this.array.indexOf(checkedIndex)
        this.array.splice(cut, 1)
    }

    static printMsg() {
        alert(
            `Only 3 days can be selected. You have already selected ${this.array[0].name},${this.array[1].name} and ${this.array[2].name}`
        )
    }

    static checkInclude(checkedIndex) {
        if (!this.array.includes(checkedIndex)) return true
        return false
    }

    static pushArray(checkedIndex) {
        this.array.push(checkedIndex)
    }

    mainFunction() {
        if (this.id === 'none') {
            // console.log('zingalala')
            MyCheckBox.uncheckAll()
            MyCheckBox.initializeCount()
            MyCheckBox.initializeArray()
            MyCheckBox.nonecheck = this
        } else if (this.checked === false) {
            if (MyCheckBox.array.indexOf(this) !== -1) {
                MyCheckBox.cutArray(this)
                MyCheckBox.decreaseCount()
            }
        } else if (MyCheckBox.getCount() >= 3) {
            this.checked = false
            MyCheckBox.printMsg()
        } else if (MyCheckBox.checkInclude(this)) {
            if (MyCheckBox.nonecheck.checked === true) {
                MyCheckBox.nonecheck.checked = false
            }
            MyCheckBox.increaseCount()
            MyCheckBox.pushArray(this)
        }
    }
}

MyCheckBox.count = 0
MyCheckBox.array = []
MyCheckBox.nonecheck = false

const MyCheckBoxObject = new MyCheckBox()
// const checks = document.getElementsByClassName('meri')
