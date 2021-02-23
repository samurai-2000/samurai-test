const dragAndDrop = () => {
    const card = document.querySelector('.js-card')
    const cells = document.querySelectorAll('.js-cell')

    const dragStart = function () {
        setTimeout(() => {
            this.style.display = 'none'
        }, 0);
    }
    const dragEnd = function () {
        setTimeout(() => {
            this.style.display = ''
        }, 0);
    }
    const dragOver = function (event) {
        event.preventDefault()
    }
    const dragEnter = function (event) {
        event.preventDefault()
        this.style.background = 'grey'
    }
    const dragLeave = function () {
        this.style.background = ''
    }
    const dragDrop = function () {
        this.append(card)
        this.style.background = ''
    }

    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop)
    })

    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}
dragAndDrop()

