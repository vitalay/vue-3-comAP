<template>
  <div class="count">
    {{ spore.count }}
  </div>
</template>

<script setup>
import { userCounterStore } from '@/stores/counter'

const spore = userCounterStore();

</script>

<style>

</style>