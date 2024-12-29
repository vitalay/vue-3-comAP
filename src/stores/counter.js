
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
  },
  getters: {
    addOrEven: (state) => {
        if (state.count % 2 === 0) return 'even'
				return 'odd'
    }
  } 

})