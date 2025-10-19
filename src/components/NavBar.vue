<script setup>

</script>

<template>

    <v-app-bar 
       elevate-on-scroll
  style="background-color: rgb(242, 223, 223);"
>
        <v-app-bar-title icon="public/travelnest1.png">Safari Guide</v-app-bar-title>
            
         <v-spacer></v-spacer>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/destinations">Destinations</v-btn>
        <v-btn to="/hotels">Hotels</v-btn>
        <v-btn to="/tourcompanies">Tour Companies</v-btn>
        <v-btn to="/travelblog">Travel Blog</v-btn>
       
        <v-btn to="/faqs">FAQs</v-btn>
        <v-btn to="/login">Log In</v-btn>
        <v-avatar to="/userprofile" v-if="isLoggedIn">
          <span>J</span>
        </v-avatar>
    </v-app-bar>


</template>
<style scoped>

    .search-bar {
  max-width: 200px;
}



</style>