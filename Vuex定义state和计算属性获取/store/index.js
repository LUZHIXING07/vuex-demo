import { createStore } from 'vuex'

export default createStore({
  state: {
    // 定义状态(定义全局属性,可供任意组件调度)
    products: [
      { name: "小张", money: 100 },
      { name: "小王", money: 80 },
      { name: "小李", money: 95 },
      { name: "小陆", money: 90 },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
