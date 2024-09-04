<template>
  <div>
    <h1 class="title">AI-UI</h1>
    <nav class="nav">
      <router-link to="/button">Button</router-link>
      <router-link to="/card">card</router-link>
      <router-link to="/collapse">collapse</router-link>
      <router-link to="/dialog">dialog</router-link>
      <router-link to="/dropdown">dropdown</router-link>
      <router-link to="/icon">icon</router-link>
      <router-link to="/pager">pager</router-link>
      <router-link to="/tooltip">tooltip</router-link>
    </nav>
    <div class="displayArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>