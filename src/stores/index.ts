import { defineStore, createPinia, } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return {
			count: 0,
		};
	},

	actions: {
		increment() {
			this.count++;
		},
	},
});

export default createPinia();