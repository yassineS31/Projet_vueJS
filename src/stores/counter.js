import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            console.log('increment')
            this.count++
           
        },
        decrement() {
            console.log('decrement')

            this.count--
        },
        reset() {
            console.log('reset')

            this.count=0
        },
    },
// C'est ca qui utilise le plugin de persistance
    persist:true,
});