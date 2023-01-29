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
    <h3>
      <router-link :to="{name: 'project-detail', params:{slug: project.slug}}">{{project.name}}</router-link>
    </h3>
    <!-- <h3>{{project.name}}</h3> -->
    <h5 v-if="project.type">Type: <strong>{{project.type.name}}</strong></h5>
    <div class="technologies" v-if="project.technologies.length">
      <span v-for="technology in project.technologies" :key="technology.id">{{technology.name}}</span>
    </div>
    <p>{{project.summary}}</p>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../style/general.scss';
.card{
  //width: calc(100% / 2 - 60px);
  margin: 30px 20px;
  padding: 20px;
  background-color: bisque;
  font-size: .8rem;
  border-radius: 10px;
  border: 1px solid black;

  h3 {
  text-transform: capitalize;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 20px;
  }
  h5 {
    font-size: .9rem;
    text-align: center;
    margin-bottom: 20px;
  }
  .technologies {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    span {
    display: inline-block;
    padding: 5px;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;
    }
  }
}
</style>