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

  <main class="main-container">
    <router-view v-slot="{ Component, route }" class="page">
      <transition 
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
      >
        <component :is="Component"/>
      </transition>
    </router-view>
  </main>
</body>
</template>

<style lang="scss" scoped>
@use './style/general.scss';

.main-container {
  position: relative;
  .page {
    position: absolute;
  }
}
</style>