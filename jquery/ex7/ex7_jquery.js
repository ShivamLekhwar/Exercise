/* eslint-disable no-alert */
class MyClass {
    constructor() {
        this.time = 0
        this.pause = false
        $('#startButton').click(this.startButtonHandler.bind(this))
    }

    checkInvalidInput() {
        if ($('#inputTime').val() == '' || !$.isNumeric($('#inputTime').val())) {
            alert('enter a number please')
            $('#inputTime').val('')
        }
    }

    startfunction() {
        $('#startButton').hide()
        $('#timer').show()
        $('#pauseButton').show()
        $('#inputDiv').hide()
        this.time = $('#inputTime').val()
        $('#timer').text(this.time)
    }

    pauseFunction() {
        this.pause = true
        $('#pauseButton').hide()
        $('#resumeButton').show()
    }

    resumeFunction() {
        this.pause = false
        $('#pauseButton').show()
        $('#resumeButton').hide()
    }

    decreaseAndPrintTime() {
        this.time -= 1
        $('#timer').text(this.time)
    }

    timeupAndReset() {
        alert('times up')
        $('#inputDiv').show()
        $('#inputTime').val('')
        $('#pauseButton').hide()
        $('#resumeButton').hide()
        $('#startButton').show()
        $('#timer').hide()
    }

    startButtonHandler() {
        this.checkInvalidInput()
        this.startfunction()
        const timeInterval = setInterval(() => {
            if (this.pause === false) {
                $('#pauseButton').click(this.pauseFunction.bind(this))
                $('#resumeButton').click(this.resumeFunction.bind(this))
                if (this.time > 0) {
                    this.decreaseAndPrintTime()
                } else {
                    this.timeupAndReset()
                    clearInterval(timeInterval)
                }
            }
        }, 1000)
    }
}
const classObject = new MyClass()
