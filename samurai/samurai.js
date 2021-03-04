class Samurai {

    constructor(options) {
        this.$els = options.selectors
        this.methods = options.methods
        this.init()
    }

    init() {
        for (var key in this.methods) {
            this.methods[key]()
        }
    }
    
    hide() {
        this.style.display = 'none'
    }
    

    
}

const box = document.querySelector('.box')

new Samurai({
    
    methods: ({
        start() {
            
        }
    }),

})
box.hide()

