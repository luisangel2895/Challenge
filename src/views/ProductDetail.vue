<template lang="pug">
  v-container(v-if="getProductSelected" style="width:80%;")
    .d-flex.flex-row.justify-space-between
      .image-product
          v-img(:src="getProductSelected.PictureURL" max-width="350")
          .badgets.d-flex.flex-row.justify-space-between
            .clearance.red.darken-1.white--text.pa-3(style="position:relative; top:-50px") Clearance
            .clearance.red.darken-1.white--text.pa-3(style="position:relative; top:-50px")  Shipping
      .text-product.d-flex.flex-column.mx-4
        .text-name.text-h4 {{ getProductSelected.Name }}
        .text-stars.my-3 ✨✨✨✨✨
        .text-description.my-3 {{ getProductSelected.Description }}
      .price-product.d-flex.flex-column(style="min-width:300px").mx-3
        .d-flex.flex-row
          .final-price-product.mt-3.text-h4 {{ getProductSelected.Price | price }}
          .retail-price-product.text-decoration-line-through.ml-2.text-h5 {{ getProductSelected['Retail Price'] | price}}
        .d-flex.mt-auto.justify-center.red--text.text-h5(v-if="getProductSelected.Stock > 0") Stock: {{ getProductSelected.Stock }}
        .d-flex.mt-auto.justify-center.red--text.text-h5(v-else) Out of Stock
        .d-flex.flex-column.mt-auto
          v-btn(dark, color="teal" @click="showMessage").mx-4 Add to Cart
    .d-flex.flex-row.justify-star.my-3
      .d-flex.flex-column
        .text-brand.d-flex.flex-row.align-center
          .d-flex.text-h6.mx-3 Brand: 
          .d-flex {{ getProductSelected.Brand }}
        .text-color.d-flex.flex-row.align-center
          .d-flex.text-h6.mx-3 Color: 
          .d-flex {{ getProductSelected.Color }}
    message(v-if="show" style="position: absolute; top:20px; margin-left:30%;")
</template>
<script>
import Message from "../components/Message.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductDetail",
  data: () => ({
    show: false,
  }),
  components: {
    Message,
  },
  computed: {
    ...mapGetters(["getProductSelected"]),
  },
  methods: {
    ...mapActions(["getPorductAsync"]),
    showMessage() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
  filters: {
    price: (price) => {
      return `$ ${price}`;
    },
  },
  mounted() {
    this.getPorductAsync(this.$route.params.id);
  },
};
</script>
