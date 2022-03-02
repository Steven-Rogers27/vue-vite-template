<script lang="ts" setup>
import { useCounterStore } from '@stores';
import { storeToRefs } from 'pinia';
import Comp from '@components/Comp.vue';

defineProps({
  msg: String
})

const counter = useCounterStore();
const { count } = storeToRefs(counter);
const { increment, } = counter;

const countClick = () => {
  counter.$patch({
    count: count.value + 1,
  });
};

const resetCount = () => {
  counter.$state = {count: 34, list: ['apollo']};
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="countClick">Count</button>
  <button @click="resetCount">Reset</button>
  <Comp />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
