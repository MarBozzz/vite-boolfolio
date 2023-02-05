<script>
import axios from 'axios';
import {BASE_URL} from '../data/data'

export default {
  name: 'ContactForm',
  data(){
    return{
      name:'',
      email:'',
      object:'',
      message:'',
      errors:{},
      loading: false,
      showform: true
    }
  },
  methods:{
    sendForm(){
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        object: this.object,
        message: this.message,
      }

      axios.post(`${BASE_URL}contacts`, data)
      .then(result => {
        this.loading = false;
        //console.log(result.data.errors);
        //console.log(this.showform);
        if(!result.data.success){
          this.errors = result.data.errors;
        }else{
          this.showform = false;
          this.name = '';
          this.email = '';
          this.object = '';
          this.message = '';
          this.errors = {}
        }
      })
    }
  }
}
</script>


<template>
  <form v-if="showform" @submit.prevent="sendForm()">
    <div>
      <input class="name" :class="{'is-invalid':errors.name}" v-model.trim="name" type="text" placeholder="Name">
      <p v-for="(error, index) in errors.name" :key="'name'+index" class="error">{{ error }}</p>
    </div>
    <div>
      <input class="email" :class="{'is-invalid':errors.email}" v-model.trim="email" type="text" placeholder="E-Mail">
      <p v-for="(error, index) in errors.email" :key="'email'+index" class="error">{{ error }}</p>
    </div>
    <div>
      <input class="object" :class="{'is-invalid':errors.object}" v-model.trim="object" type="object" placeholder="Object">
      <p v-for="(error, index) in errors.object" :key="'object'+index" class="error">{{ error }}</p>
    </div>
    <div>
      <textarea class="text-area" :class="{'is-invalid':errors.message}" v-model.trim="message" id="" cols="30" rows="5" placeholder="Write your text here..."></textarea>
      <p v-for="(error, index) in errors.message" :key="'message'+index" class="error">{{ error }}</p>
    </div>
    <div class="button-container">
      <button type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }}</button>
    </div>
  </form>
  <h3 v-else>E-Mail sent</h3>
</template>

<style lang="scss" scoped>
form {
  .is-invalid {
    border: 1px solid red !important;
  }
  .error {
    color: red;
  }
  p {
    margin: 0 0 .5rem 0;
    font-size: .8rem;
  }
  .name {
    width: calc(100% / 2);
    min-width: 200px;
    height: 25px;
    margin-top: 5px;
    padding-left: 5px;
    border: none;
    background-color: rgba($color: #ffffff, $alpha: .95);
    border-radius: 5px;
  }
  .email {
    width: calc(100% / 3 * 2);
    min-width: 200px;
    height: 25px;
    margin-top: 5px;
    padding-left: 5px;
    background-color: rgba($color: #ffffff, $alpha: .9);
    border: none;
    border-radius: 5px;
  }
  .object {
    width: calc(100% / 6 * 5);
    min-width: 200px;
    height: 25px;
    margin-top: 5px;
    border: none;
    padding-left: 5px;
    background-color: rgba($color: #ffffff, $alpha: .85);
    border-radius: 5px;
  }
  .text-area {
    width: 99%;
    min-width: 205px;
    margin-top: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: .9rem;
    padding-left: 5px;
    background-color: rgba($color: #ffffff, $alpha: .8);
    overflow: auto;
    border: none;
    border-radius: 5px;
  }
  .name:hover,
  .email:hover,
  .object:hover,
  .text-area:hover
   {
    color: rgb(66, 89, 18);
    outline-style: inset;
    outline-color: rgb(146, 195, 41);
  }
  .name:focus,
  .email:focus,
  .object:focus,
  .text-area:focus {
    outline-style: inset;
    border: 1px solid rgb(146, 195, 41);
  }
  .button-container {
    display: flex;
    justify-content: end;
    margin-right: 0;
    margin-top: 5px;
    min-width: 210px;
    border-bottom: 1px dotted red;
    button {
      width: calc(100% / 6);
      height: 30px;
      background-color: rgb(66, 89, 18);
      border: none;
      border-radius: 5px;
      min-width: 50px;
      &:hover {
        cursor: pointer;
        color: red;
        transform: scale(1.025);
      }
    }
  }
}
h3 {
  color: rgb(66, 89, 18);
}
</style>