<template>
  <div class="About">
    <h1>About</h1>
    <button class="counter-button"
    @click="spore.plusCnopka"
    >
      {{ spore.count }}
    </button>
  </div>
</template>
<script setup>
import { userCounterStore } from '@/stores/counter'

const spore = userCounterStore();

</script>

<style>
.counter-button {
  font-size: 50px;
}
</style>