<template lang="pug">
  v-container(style="width:80%;")
    product(v-for="(product, key) in getProducts" :key="key" :product="product")
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Product from "../components/Product.vue";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    ...mapActions(["getProductsAsync"]),
  },
  components: {
    Product,
  },
  mounted() {
    this.getProductsAsync();
  },
};
</script>
