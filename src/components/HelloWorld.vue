<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@stores';

defineProps({
  msg: String
})

const counter = useCounterStore();
const count = ref(0)

const countClick = () => {
  counter.count++;
  counter.$patch({
    count: counter.count + 1,
  });
  counter.increment();
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="countClick">Count</button>
  <span>{{ counter.count }}</span>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
