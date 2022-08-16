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
    // 通过getters获取全局状态
    getProducts: (state) => {
      return state.products;
    },
    // 应用到所有组件中
    resetProducts: (state) => {
      return state.products.map((product) => {
        return {
          name: `${product.name}`,
          money: `${product.money / 2}`,
        };
      });
    }
  },
  mutations: {
    // 专门用来修改全局状态(同步状态)
    increaseSalary: (state, payload) => {
      state.products.forEach((product) => {
        product.money += payload;
      });
    },
  },
  actions: {
    // actions中处理的都是异步的操作
    increaseSalary: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increaseSalary", payload);
      }, 1000);
    }
  },
  modules: {
  }
})
