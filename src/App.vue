<script setup>

import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'



</script>


<template>
<div class="page">
  <v-app  >
    
  <NavBar/>
  <v-main style="background-color: cornsilk;">
    <RouterView></RouterView>

   
  </v-main>
  </v-app> 
</div>
</template>


<style>
.pagea{
  background-color: #f0f8ff;
  min-height: 100vh;
  padding: 20PX;
}
.v-app-bar {
  position: relative;
  top: auto;
}
</style>

