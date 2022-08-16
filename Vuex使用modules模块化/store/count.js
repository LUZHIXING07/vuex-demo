const countModule = {
    state: {
        // 定义状态(定义全局属性,可供任意组件调度)
        count: [
            { name: "小刘", age: 20 },
            { name: "小陈", age: 19 },
            { name: "小何", age: 21 },
            { name: "小安", age: 18 },
        ],
    },
    getters: {
        // 通过getters获取全局状态
        getCount: (state) => {
            return state.count;
        },
        // 应用到所有组件中
        resetCounts: (state) => {
            return state.count.map((count) => {
                return {
                    name: `${count.name}`,
                    age: `${count.age + 1}`,
                };
            });
        }
    },
    mutations: {
        // 专门用来修改全局状态(同步状态)
        increasingAge: (state, payload) => {
            state.count.forEach((count) => {
                count.age += payload;
            });
        },
    },
    actions: {
        // actions中处理的都是异步的操作
        increasingAge: ({ commit }, payload) => {
            setTimeout(() => {
                commit("increasingAge", payload);
            }, 1000);
        },
    },
};

export default countModule;
