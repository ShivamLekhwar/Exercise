/* eslint-disable no-alert */
class MyCheckBox {
    constructor(checks, noneCheck, maxSelection) {
        this.checks = checks
        this.maxSelection = maxSelection
        this.dayCount = 0
        this.noneCheck = noneCheck
        $(this.checks).click(this.dayCheckBoxHandler.bind(this))
        $(this.noneCheck[0]).click(this.handleNoneCheckClick.bind(this))
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
            $(this.checks).prop('checked',false)
            this.resetDayCount()
        }
    }

    dayCheckBoxHandler(event) {
        if (event.target.checked === false) {
            this.decreaseDayCount()
        } else {
            this.noneCheck[0].checked = false
            if (this.getCount() === this.maxSelection) {
                event.target.checked = false
                this.printMsg()
            } else {
                this.increaseDayCount()
            }
        }
    }
}

const MyCheckBoxObject = new MyCheckBox($(".day"),$("#none"),3)
