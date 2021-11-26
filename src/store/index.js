import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    productSelected: null,
  },
  getters: {
    getProducts: (state) => state.products,
    getProductSelected: (state) => state.productSelected,
  },
  mutations: {
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    GET_PRODUCT_SELECTED(state, payload) {
      let productSelected = state.products.find((product) => {
        return product.ProductID === Number(payload);
      });
      state.productSelected = productSelected;
    },
  },
  actions: {
    async getProductsAsync({ commit }) {
      const products = await axios.get("productList.json");
      commit("GET_PRODUCTS", products.data);
    },
  },
  modules: {},
});
