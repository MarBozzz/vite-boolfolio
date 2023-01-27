<script>

import axios from 'axios';
import {BASE_URL} from '../data/data'

import ProjectCard from '../components/ProjectCard.vue'

export default {
  name : 'App',
  components:{
    ProjectCard
  },
  data(){
    return{
      //titolo: 'prova',
      BASE_URL,
      projects : []
    }
  },
  methods:{
    getApi(){
      axios.get(this.BASE_URL + 'projects')
      .then(result => {
        this.projects = result.data.projects;
        //console.log(this.projects);
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
  <div class="card-container">
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


<style lang="scss" scoped>
@use '../style/general.scss';
.card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>