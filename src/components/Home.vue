<script setup>
</script>

<template>
  <div class="home">
   
    <v-container fluid>
       <h1 class="home-title">Welcome to Safari-Guide</h1> 
      <v-row>
        <v-col cols="12" md="5">
          <v-card class="card-content" style="color: black;">
            <v-img src="public/homeimage.png"></v-img>
            <v-card-text style="font-size: 2vh;">
            Discover the heart of African tourism with SafariGuide — your trusted companion for exploring breathtaking destinations, luxury hotels, and authentic tour experiences. Whether you're planning a serene getaway, a wildlife adventure, or a cultural exploration, SafariGuide connects you to the best travel options with ease.
            From scenic national parks and coastal escapes to trusted tour companies and eco-friendly lodges, our platform helps travelers and explorers experience Africa’s beauty responsibly. Plan your journey, find hidden gems, and embrace the spirit of adventure — all in one place.
            Start your next adventure today with SafariGuide — where travel meets purpose. 🌍✨
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.home {
  background-image: url('/public/Lion attacks_ How to.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: flex-start; /* 👈 move to top */
  justify-content: flex-start; /* 👈 stay on left */
  padding: 10px; /* 👈 spacing from top & left edges */
}
.card-content {
  background-color: rgba(219, 219, 219, 0.85);
  padding: 0px;
  border-radius: 12px;
  font-size: 170%;
}
.home-title{
  text-decoration: underline black;
  font-style: bold;
}

</style>
