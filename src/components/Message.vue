<template lang="pug">
    v-container(class="message-container").green.accent-4.white--text
        .d-flex.justify-center.py-1.text-h6 Product Added Successfully!
</template>
<script>
export default {
  name: "Message",
};
</script>
<style scoped>
.message-container {
  width: 40%;
  animation-duration: 3s;
  animation-name: fadeIn;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
