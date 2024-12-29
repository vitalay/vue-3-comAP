
import { defineStore } from 'pinia'

export const userCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 11
  }),
  actions: {
    plusCnopka() {
      this.count++
    },
    minusCnopka() {
      this.count--
    }
  } 

})