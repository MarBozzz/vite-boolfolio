<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About Us</router-link></li>
      <li><router-link :to="{ name: 'contacts' }">Contacts</router-link></li>
      <li><router-link :to="{ name: 'projects-list' }">Projects</router-link></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  li {
    margin: 20px 20px;
    a {
      text-decoration: none;
      color: black;
      &:hover, &.router-link-exact-active {
        color: green;
      }
    }
  }
}
</style>