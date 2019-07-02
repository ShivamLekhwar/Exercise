/* eslint-disable no-alert */
class MyClass {
  constructor() {
    this.inputTime = document.getElementById('input1')
    this.startButton = document.getElementById('button1')
    this.pauseButton = document.getElementById('button2')
    this.resumeButton = document.getElementById('button3')
    this.div1Object = document.getElementById('div1')
    this.paraObject = document.getElementById('p1')
    this.time = 0
    this.startButton.addEventListener('click', this.startButtonHandler.bind(this))
  }

  checkInvalidInput() {
    if (this.inputTime.value === '' || isNaN(this.inputTime.value)) {
      alert('enter a number please')
      this.inputTime.value = ''
    }
  }

  startfunction() {
    this.startButton.style.display = 'none'
    this.paraObject.style.display = 'block'
    this.pauseButton.style.display = 'block'
    this.div1Object.style.display = 'none'
    this.time = document.getElementById('input1').value
    this.pause = false
    this.paraObject.textContent = this.time
  }

  pauseFunction() {
    this.pause = true
    this.pauseButton.style.display = 'none'
    this.resumeButton.style.display = 'block'
  }

  resumeFunction() {
    this.pause = false
    this.pauseButton.style.display = 'block'
    this.resumeButton.style.display = 'none'
  }

  decreaseAndPrintTime() {
    this.time -= 1
    this.paraObject.textContent = this.time    
  }

  timeupAndReset() {
    alert('times up')
    this.div1Object.style.display = 'block'
    this.inputTime.value = ''
    this.pauseButton.style.display = 'none'
    this.startButton.style.display = 'block'
    this.paraObject.style.display = 'none'        
  }

  startButtonHandler() {
    this.checkInvalidInput()
    this.startfunction()
    const timeInterval = setInterval(() => {
      if (this.pause === false) {
        this.pauseButton.addEventListener('click', () => { this.pauseFunction() })
        this.resumeButton.addEventListener('click', () => { this.resumeFunction() })
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
