<template lang="pug">
    v-container.elevation-1.ma-3
        .d-flex.flex-row.justify-space-between
            .d-flex.flex-row
                .image-product.d-flex.flex-row
                    v-img(:src="product.ThumbnailURL" max-width="150")
                .text-product.d-flex.flex-column.justify-center.pl-3
                    .name-product.text-h6 {{ product.Name }}
                    .d-flex.flex-row
                        .final-price-product.mt-3 {{ product.Price | price }}
                        .retail-price-product.text-button.text-decoration-line-through {{ product['Retail Price'] | price}}
            .d-flex.flex-row.align-center
                v-btn(dark, color="teal" @click="goDetail").darken-4 View Details
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  filters: {
    price: (price) => {
      return `$ ${price}`;
    },
  },
  methods: {
    goDetail() {
      this.$router.push({
        name: "DetailProduct",
        params: {
          id: this.product.ProductID,
        },
      });
    },
  },
};
</script>
