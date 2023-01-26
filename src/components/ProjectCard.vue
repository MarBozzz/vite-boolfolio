<script>


export default {
  name: 'ProjectCard',
  data(){
    return{
      
    }
  },
  props:{
    project: Object
  }
}
</script>
<template>
  <div class="card" >
    <h4>{{project.name}}</h4>
    <p>{{project.summary}}</p>
  </div>
  
</template>


<style lang="scss" scoped>


.card{
  width: calc(100% / 2 - 40px);
  margin: 30px 20px;
  padding: 20px;
  background-color: bisque;
  font-size: .8rem;
  h4 {
    text-transform: capitalize;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>