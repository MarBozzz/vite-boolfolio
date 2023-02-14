<script>
export default {
  name: 'About',
  data(){
    return {
      message: 'Work in Progress',
      localTime: ''
    }
  },
  methods:{
    showLocaleTime: function () {
      var time = this;
      setInterval(function () {
       time.localTime = new Date().toLocaleTimeString();
    }, 1000);
   }
  },
  mounted (){
    this.showLocaleTime()
  }
}
</script>


<template>
  <div class="inner-container">
    <h1>About</h1>
    <div class="interval">
      <h2>{{ message }}</h2>
      <h2>{{ localTime }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
.inner-container {
  display: flex;
  flex-direction: column;
  .interval {
    display: flex;
    align-items: center;
    flex-direction: column;
    h2, h3 {
      color: rgb(66, 89, 18)
    }
  }
}
</style>