
<template>
  <h1 class="row-title">Example</h1>
  <div class="row">
    <Al-Button type="primary" @click="visible=true">Dialog One</Al-Button>
    <Al-Button type="primary" @click="visible2=true">Dialog Two</Al-Button>
    <Al-Button type="primary" @click="visible3=true">Dialog Two</Al-Button>
  </div>
  <Al-Dialog v-model:visible="visible" @close="visible=false">Basic dialog</Al-Dialog>
  <Al-Dialog v-model:visible="visible2" @close="visible2=false" 
  title="This is a custom title" 
  width="30vw"
  top="40vh"
  >Basic dialog</Al-Dialog>
  <Al-Dialog v-model:visible="visible3" @close="visible3=false">
    Basic dialog
    <template #footer>
      <Al-Button @click="visible3=false">Cancle</Al-Button>
      <Al-Button type="primary" @click="visible3=false">Continue</Al-Button>
    </template>
  </Al-Dialog>

</template>


<script setup>
import { ref } from 'vue';
const visible=ref(false);
const visible2=ref(false);
const visible3=ref(false);
</script>
