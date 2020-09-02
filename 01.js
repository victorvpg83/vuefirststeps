const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue',
        fruits: 
            [ 
                { name: 'apple', qty: 0 },
                { name: 'pear', qty:  12 }
            ],
        background: 'bg-warning',
        color: false,
        message: 'Hola Víctor',
        newFruit: '',
        total: 0,
        counter: 0
    },
    methods: {
        addFruit() {
            this.fruits.push({ name: this.newFruit, qty: 0 })
            this.newFruit = ''
        }
    },
    computed: {
        sumFruits() {
            this.total = 0
            for( fruit of this.fruits ) {
                this.total = this.total + fruit.qty
            }
            return this.total
        },
        inverted() {
            return this.message.split('').reverse().join('')
        },
        color2() {
            return {
                'bg-success': this.counter <= 10,
                'bg-warning': this.counter > 10 && this.counter <=20,
                'bg-danger': this.counter > 20
            }
        }
    }

})