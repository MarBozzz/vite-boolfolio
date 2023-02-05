<script>
import Header from './partials/Header.vue'

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>


<template>
<body>
  <Header />

  <main>
    <router-view></router-view>
  </main>
</body>
</template>

<style lang="scss" scoped>
@use './style/general.scss';
</style>