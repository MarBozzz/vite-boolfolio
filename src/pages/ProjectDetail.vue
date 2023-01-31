<script>

import axios from 'axios';
import { BASE_URL } from '../data/data';

export default {
  name: 'ProjectDetail',
  data(){
    return {
      project: {}
    }
  },
  methods: {
    getApi(){
      //console.log(BASE_URL);
      axios.get(BASE_URL + 'projects/' + this.$route.params.slug)
        .then(result => {
          this.project = result.data;
          //console.log(result.data);
        })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>


<template>
  <div class="project-container">
    <h1>{{project.name}}</h1>
    <h4 class="type" v-if="project.type">Type: {{project.type.name}}</h4>
    <div v-if="project.cover_image" class="image">
      <img :src="project.cover_image" :alt="project.name">
    </div>
    <div class="technologies" >
      <span v-for="technology in project.technologies" :key="technology.id" class="technology">{{technology.name}}</span>
    </div>
    <div class="summary" v-html="project.summary"></div>
    <h3>Client name: {{project.client_name}}</h3>
    <p v-if="project.user">Projected by: <i>{{ project.user.name }}</i> </p>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';

  .project-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: darkolivegreen;
    color: white;
    width: 70%;
    h1 {
      color: orange;
      text-transform: capitalize;
    }
    .image {
      margin-top: 20px;
      width: 250px;
      height: 300px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      img {
        width: 100%;
      }
    }
    .type {
      color: violet;
    }
    .technology {
      color: azure;
      margin: 10px 5px;
      display: inline-block;
      border: 1px solid black;
      background-color: black;
    }
    .summary {
      padding: 10px 50px;
    }
    h3 {
      padding: 10px 0;
    }
  }
</style>