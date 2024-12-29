
<template>
  <div class="Home">
   <div class="count">
    {{ spore.count }}
   </div>
   <div class="button">
    <button @click="spore.minusCnopka">-</button>
    <button @click="spore.plusCnopka">+</button>
   </div>
   <br>
   <div>
    This counter is: {{ oddOrEven }}
   </div>
  
  </div>

</template>

<script setup>
import { computed, ref } from 'vue'
import { userCounterStore } from '@/stores/counter'

const spore = userCounterStore()

const  count = ref(0)

const plus = () => {
  count.value++
}
const minys = () => {
  count.value--
}
const oddOrEven = computed(() => {
  if (count.value % 2 === 0 ) return 'even'
  return 'odd'
})

</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons {
  font-size: 40px;
  margin: 10px;
}
</style>
