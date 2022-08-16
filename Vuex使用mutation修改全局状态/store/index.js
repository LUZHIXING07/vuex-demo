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
    // 专门用来修改全局状态
    increaseSalary: (state) => {
      state.products.forEach((product) => {
        product.money += 10;
      });
    },
  },
  actions: {
  },
  modules: {
  }
})
