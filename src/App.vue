<script>

import axios from 'axios'

import ProjectCard from './components/ProjectCard.vue'

export default {
  name : 'App',
  components:{
    ProjectCard
  },
  data(){
    return{
      //titolo: 'prova',
      baseUrl: 'http://127.0.0.1:8000/api/',
      projects : []
    }
  },
  methods:{
    getApi(){
      axios.get(this.baseUrl + 'projects')
      .then(result => {
        this.projects = result.data.projects;
        console.log(this.projects);
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>


<template>
  <h1>Progetti</h1>
  <div class="container">
    <!-- <div v-for="project in projects" :key="project.id">
      <h3>{{project.name}}</h3>
      <p>{{project.summary}}</p>
    </div> -->
    <ProjectCard 
      v-for="project in projects" 
      v-show="project.cover_image != '' "
      :key="project.id"
      :project="project"
       />

  </div>
</template>


<style lang="scss">
@use './style/general.scss';
</style>