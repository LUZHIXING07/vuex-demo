import { createStore } from "vuex";
import productsModule from "./products";
import countModule from "./count";

export default createStore({
  modules: { productsModule, countModule },
});