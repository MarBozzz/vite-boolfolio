<script>

import axios from 'axios';
import {BASE_URL} from '../data/data'
import {active_base_url} from '../data/data'
import {store} from '../data/store'

import ProjectCard from '../components/ProjectCard.vue'
import FormSearch from '../components/FormSearch.vue'
import Aside from '../components/Aside.vue'


export default {
  name : 'App',
  components:{
    ProjectCard,
    FormSearch,
    Aside
  },
  data(){
    return{
      BASE_URL,
      active_base_url,
      //active_base_url: BASE_URL + 'projects',
      //projects : [], aggiunto in store
      store,
      //pagination:{
      //  current: 1,
      //  last: null
      //}
    }
  },
  methods:{
    getApi(url){
      axios.get(url)
      .then(result => {
        store.main_title = 'All my Projects'
        store.projects = result.data.projects.data;
        store.links = result.data.projects.links;
        store.types = result.data.types;
        store.technologies = result.data.technologies;
        //console.log(this.projects.data);
        //console.log(store.links);
        //console.log(store.types);
        store.show_paginate = true
        //this.pagination.current = result.data.projects.current_page
        //this.pagination.last = result.data.projects.last_page
      })
    },
  },
  mounted(){
    //this.getApi(1);
    this.getApi(this.active_base_url);
  }
}
</script>


<template>

<div class="wrapper">
  <div class="project-container">

    <h1>{{ store.main_title }}</h1>

    <FormSearch />

    <div class="card-container">
      <ProjectCard 
        v-for="project in store.projects" 
        v-show="project.cover_image != '' "
        :key="'project'+project.id"
        :project="project"
        />
    </div>

    <div v-if="store.show_paginate" class="paginator">
      <button						
        v-for="link in store.links" :key="link.label"						
        :disabled="link.active || !link.url"						
        @click="getApi(link.url)"						
        v-html="link.label" ></button>						

        <!-- <button
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
            > > | </button> -->
    </div>

  </div>

  <Aside @getApi="getApi(active_base_url)" />

</div>

</template>


<style lang="scss" scoped>
@use '../style/general.scss';
.wrapper {
  display: flex;
  height: 100%;
  .project-container {
    width: 80%;
    overflow: auto;
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
  }
}
</style>