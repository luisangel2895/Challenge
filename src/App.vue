<template lang="pug">
v-app
  v-app-bar(app='' color='teal' dark='').darken-2
    .d-flex.align-center
      v-img.shrink.mr-2(alt='Angel Logo' contain='' src='https://avatars.githubusercontent.com/u/16966767?v=4' transition='scale-transition' width='40')
    v-spacer
    v-btn(href='https://angelorellana.com/' target='_blank' text='')
      span.mr-2 Angel Orellana
      v-icon mdi-open-in-new
  v-main
    router-view
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
