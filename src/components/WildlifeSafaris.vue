<script setup>
import { ref } from 'vue'
</script>

<template>
   
    <div class="page">
<v-container>
     <v-img src="public/destinations/wildlifesafaris/deanna-deshea-rDkv9Lla0Yw-unsplash.jpg" 
        height="60vh"
         cover
         class="imag"></v-img>
    
    
</v-container>
    </div>
</template>
<style scoped>
.image-card {
  transition: 0.3s; /* smooth animation for hover */
}

.image-card:hover {
  transform: scale(1.03); /* slightly enlarges the card when hovered */
  z-index: 1; /* keeps the hovered card on top */
}

.page{
    background-color: #F5E6C8;
       background-size: cover;
       height: 100%;
}
.imag {
  width: 100%;
  padding: 0%;
}
</style>