<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BEM from './views/BEM.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <BEM /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/study">自己学习</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    width: 100%;
    background-color: #369;
  }
}
</style>
