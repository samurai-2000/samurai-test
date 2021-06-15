const selector = selector => {return document.querySelector(selector)}
const nodeHide = function() {
    this.style.display = 'none'
}
const nodeShow = function() {
    this.style.display = ''
}

Object.prototype.hide = nodeHide
Object.prototype.show = nodeShow

selector('.box').hide()
selector('.box').show()

