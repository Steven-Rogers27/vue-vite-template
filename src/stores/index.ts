import { defineStore, createPinia, } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return {
			count: 0,
			list: [],
		};
	},

	getters: {
		doubleCount(state) {
			return state.count * 2; 
		},
		doublePlusOne(state): number {
			return this.doubleCount * 2 + 1;
		},
	},

	actions: {
		increment() {
			this.count++;
		},
	},
});

export default createPinia();