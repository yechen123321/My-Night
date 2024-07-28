import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)
import { defineStore } from 'pinia';

export const useSharedStore = defineStore({
  id: 'shared',
  state: () => ({
    sharedRef: null,
  }),
  actions: {
    setSharedRef(ref) {
      this.sharedRef = ref;
    },
  },
});
export default pinia

// import { useUserStore } from './modules/user'
// import { useCountStore } from './modules/counter'
// export { useUserStore, useCountStore }

export * from './modules/user'
export * from './modules/counter'
