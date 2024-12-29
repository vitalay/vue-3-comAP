
<template>
  <div class="Home">
   <div class="count">
    {{ spore.count }}
   </div>
   <div class="button">
    <button @click="spore.minusCnopka">-</button>
    <button @click="spore.plusCnopka">+</button>
   </div>
   <hr>
   <div>
    This counter is: {{ spore.addOrEven }}
   </div>
   <hr>
   <div>
    <h3>Edit counter:</h3>
    <input
     v-model="spore.count"
     type="Number"
     >
   </div>
  
  </div>

</template>

<script setup>

import { userCounterStore } from '@/stores/counter'

const spore = userCounterStore();
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
