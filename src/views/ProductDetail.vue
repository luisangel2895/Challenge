<template lang="pug">
  v-container
    .id {{ this.$route.params.id }}
    v-dialog(transition='dialog-top-transition' max-width='600')
      template(v-slot:activator='{ on, attrs }')
        v-btn(color='primary' v-bind='attrs' v-on='on') From the top
      template(v-slot:default='dialog')
        v-card
          v-toolbar(color='primary' dark='') Opening from the top
          v-card-text
            .text-h2.pa-12 Hello world!
          v-card-actions.justify-end
            v-btn(text='' @click='dialog.value = false') Close
  
</template>
<script>
export default {
  name: "ProductDetail",
  computed: {
    id: () => {
      return;
    },
  },
  mounted() {},
};
</script>
