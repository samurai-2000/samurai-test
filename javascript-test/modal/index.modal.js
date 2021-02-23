const wrapper = document.getElementById('wrapper')
const modal = document.getElementById('modal')
const btn_close = document.getElementById('close')
const btn_open = document.getElementById('open')

const toggle = () => {
    
    if (getComputedStyle(wrapper).display == 'flex') {
        modal.style.transform = 'translateY(-120%)'
        setTimeout(() => {
           wrapper.style.display = '' 
        }, 500)
    } else {
        wrapper.style.display = 'flex'
        setTimeout(() => {
            modal.style.transform = 'translateY(0)'
         }, 200)
    }
    
}

btn_open.addEventListener('click', toggle)
btn_close.addEventListener('click', toggle)

document.addEventListener('click', (event)=> {
    if (event.target == wrapper) {
        toggle()
    } else {
        event.stopImmediatePropagation()
    }
})