/* eslint-disable no-alert */
// TODO[Gaurav] No need to use static methods here. Use all the methods and variables as object level.
class MyCheckBox {
    constructor(checks, noneCheck, maxSelection) {
        this.checks = checks
        this.maxSelection = maxSelection
        this.dayCount = 0

        for (let i = 0; i < this.checks.length; i += 1) {
            // eslint-disable-next-line func-names
            // TODO[gaurav] Mainfunction name change
            this.checks[i].addEventListener(
                'click',
                this.dayCheckBoxHandler.bind(this)
            )
        }

        this.noneCheck = noneCheck
        this.noneCheck.addEventListener(
            'click',
            this.handleNoneCheckClick.bind(this)
        )
    }

    increaseDayCount() {
        this.dayCount = this.dayCount + 1
    }

    decreaseDayCount() {
        this.dayCount = this.dayCount - 1
    }

    resetDayCount() {
        this.dayCount = 0
    }

    getCount() {
        return this.dayCount
    }

    printMsg() {
        let string = ''
        for (let i = 0; i < this.checks.length; i += 1) {
            if (this.checks[i].checked === true) {
                string = string + ' ' + this.checks[i].name
            }
        }
        alert(
            `Only ${this.maxSelection} days can be selected You have already selected ${string} `
        )
    }

    handleNoneCheckClick() {
        if (this.checked !== false) {
            for (let i = 0; i < this.checks.length; i += 1) {
                // eslint-disable-next-line func-names
                this.checks[i].checked = false
                this.resetDayCount()
            }
        }
    }

    dayCheckBoxHandler() {
        if (event.target.checked === false) {
            this.decreaseDayCount()
        } else {
            this.noneCheck.checked = false
            if (this.getCount() == this.maxSelection) {
                event.target.checked = false
                this.printMsg()
            } else {
                this.increaseDayCount()
            }
        }
    }
}

const MyCheckBoxObject = new MyCheckBox(
    document.getElementsByClassName('day'),
    document.getElementById('none'),
    3
)

// const checks = document.getElementsByClassName('meri')
