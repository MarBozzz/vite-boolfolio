<script>								
import axios from 'axios';								
import {BASE_URL} from '../data/data'
import {store} from '../data/store'

export default {								
  name:'FormSearch',								
  data(){								
    return{
      tosearch: '',
      store					
    }								
  },								
  methods:{	
    getApi(){
      //console.log(this.tosearch);
      axios.get(BASE_URL + 'projects/search', {
        params:{
          tosearch: this.tosearch
        }
      })	
      .then(result => {
        this.tosearch = '';
        store.projects = result.data;
        //console.log(store.projects);
        store.show_paginate = false
      })		
    }
  }																
}								
</script>								
								
<template>								
								
  <input v-model.trim="tosearch" @keyup.enter="getApi" type="text" placeholder="Search">								
  <button @click="getApi">Search</button>								
								
</template>								
								
								
<style lang="scss" scoped>	
@use '../style/general.scss';
							
input{								
  margin-bottom: 30px;								
  width: 400px;								
  padding: 5px 10px;								
  border-radius: 5px;								
  border: 1px solid brown;								
  margin-right: 20px;								
}								
								
button{															
  background-color: white;								
  padding: 5px 10px;								
  border: 1px solid brown;								
  border-radius: 5px;		
  &:hover {
    cursor: pointer;	
  }						
}								
</style>								