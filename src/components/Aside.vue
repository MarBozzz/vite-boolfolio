<script>

import axios from 'axios';
import {BASE_URL} from '../data/data'
import {store} from '../data/store'

export default {
  name: 'Aside',
  data(){
    return{
      store,
    }
  },
  methods: {
    getApiByTypeTechnology(uri,id){
      axios.get(`${BASE_URL}projects/${uri}/${id}`)
      .then(result => {
        //console.log(result.data);
        store.projects = result.data;
        store.show_paginate = false;
      })
    },
    setMainTitle(title){
      store.main_title = title
    }
  }
}
</script>

<template>
    <aside>
    <div class="types">
      <h2>Types</h2>
      <button 
        @click="getApiByTypeTechnology('project-type',kind.id); setMainTitle('My '+kind.name+' Projects')"
        v-for="kind in store.types " :key="'type'+kind.id">{{ kind.name }}
      </button>

      <!-- emit per passare dati dal componente figlio al genitore -->
      <button 
        @click="$emit('getApi')"
        >All Projects
      </button>

    </div>
    <div class="technologies">
      <h2>Technologies</h2>
      <button
        @click="getApiByTypeTechnology('project-technology',technology.id); setMainTitle('My '+technology.name+' Projects')"
        v-for="technology in store.technologies" :key="'technology'+technology.id">{{ technology.name }}</button>
    </div>
  </aside>
</template>


<style lang="scss" scoped>
  aside {
    width: 20%;
    height: 100%;
    .types {
      height: 50%;
      border-bottom: 1px solid black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        width: 100px;
      }
    }
    .technologies {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        width: 100px;
      }
    }
  }

</style>