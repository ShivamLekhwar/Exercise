class MyDiv {
  constructor() {
    this.divCount = 0
    $('#button').click(this.createDiv.bind(this))
  }

  increaseCount() {
    this.divCount = this.divCount + 1
  }

  getCount() {
    return this.divCount
  }

  createDiv() {
    const countID =this.getCount()
    $('.container').append('<div class="inner" id='+countID+'></div>')
    $('#'+countID).append('<p>'+this.getCount()+'</p>')
    $("#"+countID).click(function(){alert(countID)})
    this.increaseCount()
    
  }
}

const classObject = new MyDiv()
