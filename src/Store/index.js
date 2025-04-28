import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', {
  state: () => ({ msg: 'Hello' })
})