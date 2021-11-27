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
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_PRODUCT_SELECTED(state, payload) {
      state.productSelected = payload;
    },
  },
  actions: {
    async getProductsAsync({ commit }) {
      const products = await axios.get("productList.json");
      commit("SET_PRODUCTS", products.data);
    },
    async getPorductAsync({ commit }, payload) {
      const products = await axios.get("../productList.json");
      const productSelected = products.data.find((product) => {
        return product.ProductID === Number(payload);
      });
      commit("SET_PRODUCT_SELECTED", productSelected);
    },
  },
  modules: {},
});
