<script>
import ContactsForm from '../components/ContactsForm.vue';
export default {
  name: 'Contacts',
  components:{
    ContactsForm
  }
}
</script>


<template>
  <div class="inner-container">
    <div class="title-container">
      <h1>Contacts</h1>
    </div>
    <ContactsForm />
  </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
.inner-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  .title-container {
    //width: 200px;
    //display: flex;
    //justify-content: space-between;
    h1 {
      text-transform: uppercase;
      font-size: 2.25rem;
      margin: 0;
      //text-align: start;
      display: inline-block;
      //width: 100%;
      font-stretch: 100%;
      letter-spacing: .2rem;
    }
  }
}
</style>