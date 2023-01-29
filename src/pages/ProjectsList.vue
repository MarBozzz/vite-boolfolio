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
      BASE_URL,
      projects : [],
      pagination:{
        current: 1,
        last: null
      }
    }
  },
  methods:{
    getApi(page){
      this.pagination.current = page;
      axios.get(this.BASE_URL + 'projects', {
        params:{
          page: this.pagination.current
        }
      })
      .then(result => {
        this.projects = result.data.projects.data;
        //console.log(this.projects.data);
        this.pagination.current = result.data.projects.current_page
        this.pagination.last = result.data.projects.last_page
      })
    }
  },
  mounted(){
    this.getApi(1);
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

  <div class="paginator">
        <button
            :disabled="pagination.current === 1"
            @click="getApi(1)"
            > |	&lt; </button>

        <button
            :disabled="pagination.current === 1"
            @click="getApi(pagination.current - 1)"
            > &larr; </button>

        <button
            v-for="i in pagination.last" :key="i"
            :disabled="pagination.current === i"
            @click="getApi(i)"
            > {{i}} </button>

        <button
            :disabled="pagination.current === pagination.last"
            @click="getApi(pagination.current + 1)"
            > &rarr; </button>

        <button
            :disabled="pagination.current === pagination.last"
            @click="getApi(pagination.last)"
            > > | </button>
    </div>

</template>


<style lang="scss" scoped>
@use '../style/general.scss';
.card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
}
.paginator{
    button{
        padding: 5px 10px;
        margin: 0 3px;
    }
}
</style>