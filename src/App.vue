<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/hourslocation">Hours & Location</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/catering">Catering</RouterLink>
      </nav>
      <div class="subheader">
      <img
      alt="Burrito King Logo"
      class="logo"
      src="@/assets/bkPeppers.jpg"
      width="125"
      height="125"
    />
      <HelloWorld msg="Burrito King" />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  border-radius: 50%;
  display: block;
  margin: 35px auto 2rem;
}

nav {
  font-size: 12px;
  white-space: nowrap;
}

nav a.router-link-exact-active {
  color: #402e15;
  background-color: #d69b49;
  border-radius: 5px;
  border: solid 2px #402e15;
}

nav a.router-link-exact-active:hover {
  background-color: #953a33;
  color: #fff;
}

nav a {
  display: inline-block;
  font-family: "CactusTequila";
  font-size: 40px;
  padding: 10px 20px;
  margin: 5px;
}

.subheader {
  display:flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 35px 2rem 0 0;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 3rem;
    margin: 30px auto;
  }
}
</style>
