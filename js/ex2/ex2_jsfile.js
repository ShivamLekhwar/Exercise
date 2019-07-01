/* eslint-disable no-alert */
// TODO[Gaurav] No need to use static methods here. Use all the methods and variables as object level.
class MyCheckBox {
    constructor(checks, noneCheck, maxSelection) {
        this.checks = checks
        this.maxSelection = maxSelection

        for (let i = 0; i < this.checks.length; i += 1) {
            // eslint-disable-next-line func-names
            // TODO[gaurav] Mainfunction name change
            this.checks[i].addEventListener('click', this.mainFunction.bind(this))
        }

        this.noneCheck = noneCheck
        this.noneCheck.addEventListener('click', this.handleNoneCheckClick.bind(this))
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
            `Only 3 days can be selected.`
        )
    }

    static checkInclude(checkedIndex) {
        if (!this.array.includes(checkedIndex)) return true
        return false
    }

    static pushElementToArray(checkedIndex) {
        this.array.push(checkedIndex)
    }

    handleNoneCheckClick() {
        if (this.checked !== false) {
            for (let i = 0; i < this.checks.length; i += 1) {
                // eslint-disable-next-line func-names
                this.checks[i].checked = false;
                MyCheckBox.initializeCount();
            }
        }
    }

    mainFunction() {
        if (event.target.checked === false) {
            MyCheckBox.decreaseCount()
        } else {
            this.noneCheck.checked = false;
            if(MyCheckBox.getCount() == this.maxSelection) {
                event.target.checked = false
                MyCheckBox.printMsg()
            } else {
                MyCheckBox.increaseCount()
            }
        }
    }
}
// TODO[gaurav]: change name to what the count shows.
MyCheckBox.count = 0
// TODO[gaurav]: change name to what the array stores.
MyCheckBox.array = []
MyCheckBox.nonecheck = false

const MyCheckBoxObject = new MyCheckBox(document.getElementsByClassName('meri'), document.getElementById('none'), 3)
const MyCheckBoxObject2 = new MyCheckBox(document.getElementsByClassName('meri2'), document.getElementById('none2'), 2)
// const checks = document.getElementsByClassName('meri')
