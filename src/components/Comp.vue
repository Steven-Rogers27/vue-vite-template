<script lang="ts">
import { mapWritableState, mapStores, } from 'pinia';
import { useCounterStore } from '@stores'; 

export default {
  computed: {
    ...mapWritableState(useCounterStore, {
      workCount: 'count',
      workList: 'list',
    }),
    ...mapStores(useCounterStore),
  },
  created() {
    this.counterStore.$subscribe((mutation, state) => {
      console.log(mutation, state);
    }, { detached: true });
  },
}
</script>

<template>
  <span>{{ counterStore.doublePlusOne }}</span>
  <ul>
    <li v-for="c in workList" :key="c">
      {{c}}
    </li>
  </ul>
</template>