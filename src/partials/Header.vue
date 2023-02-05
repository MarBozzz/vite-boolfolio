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
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin: 0 20px;
    a {
      text-decoration: none;
      color: black;
      text-transform: uppercase;
      font-size: .8rem;
      &:hover, &.router-link-exact-active {
        color: white;
        font-size: .85rem
      }
    }
  }
}
</style>