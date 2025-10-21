<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<template>
  <div class="page">
    <v-container fluid class="aimee">
      <v-row>
        <v-col class="container">
          <v-img src="public/destinations/christopher-ford-lA-9wH3AlYY-unsplash.jpg" height="60vh" cover class="imag">
            <v-card-title class="heading">Tour Kenya:The heart of Africa</v-card-title>
            <v-card-text style="font-size: 1.5em; 
          text-align: center;
           color: aliceblue;">welcome to kenya...Hakuna matata!.</v-card-text>
            <!-- 🔍 Search Bar -->

            <v-text-field v-model="searchQuery" placeholder="Search..." hide-details solo flat rounded clearable
              prepend-inner-icon="mdi-magnify" class="search" />

          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <h1></h1>
    <br></br>
    <v-container>
      <h1 style="text-align: center;"><b>welcome and experience kenya from inland tours to all the way to the
          marines.</b></h1>
      <v-text style="font-size: 1.2em;">Discover breathtaking destinations that bring nature, culture, and adventure
        together. Explore top spots, hidden gems, and eco-friendly experiences that make every journey
        unforgettable.</v-text>
      <br></br>Kenya we create memories.
      <br></br>
    </v-container>
    <h1 style="font-size: 2em;
         color: black;
         text-decoration:underline;
         text-align: center; ">Welcome & Explore Kenya </h1>
    <h1 style="font-size: 2em;
         color: black;
         text-decoration:underline;
         text-align: center; "> Karibu</h1>
    <br></br>
    <v-container>

      <v-row class="no-gutters justify-center">
        <v-col cols="12" md="4">
          <v-card class="image-card">
           <router-link to="/wildlifesafaris"> <v-img src="public/destinations/laela-OHM88hDgNZ4-unsplash.jpg" height="300px" cover /></router-link>
            <V-text class="image-texts">1. Wildlife & Safaris</V-text>

          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/marine.png" height="300px" cover />
            <V-text class="image-texts">2. Islands & Marine Attractions</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/laela-OHM88hDgNZ4-unsplash.jpg" height="300px" cover />
            <V-text class="image-texts">3. Sandy Beaches & Coastal Attractions</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/thomas-bennie-1jlJrr4XGkU-unsplash (1).jpg" height="300px" cover />
            <V-text class="image-texts">4. Beautiful Sceneries & Mountains</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/brian-kungu-kr4A0_7JhSc-unsplash.jpg" height="300px" cover />
            <V-text class="image-texts">5. Kenyan cultures</V-text>
          </v-card>
        </v-col> <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/pravin-wakode-bhDb6Gd0BVw-unsplash.jpg" height="300px" cover />
            <V-text class="image-texts">6. Historical Sites & Monuments</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/frantisek-duris-7j-aTZwAB7s-unsplash.jpg" height="300px" cover />
            <V-text class="image-texts">7. Adventure & Outdoor Activities (includes adventure sports)</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/bibhash-polygon-cafe-banerjee-3QPNiZ_Nqjs-unsplash.jpg" height="300px"
              cover />
            <V-text class="image-texts">8. Lakes(inland islands) & Wetlands</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/man-a-stylist-uQa4DN8HAb0-unsplash.jpg" height="300px" cover />
            <V-text class="image-texts">9. Forest & Nature Reserves</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/youhana-nassif-yv3NsDUFK7g-unsplash.jpg" height="300px" cover />
            <V-text class="image-texts">10. Desert & Semi-Arid Regions</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/watersportinsagana.png" height="300px" cover />
            <V-text class="image-texts">11.Water Sports & Rapids</V-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="image-card">
            <v-img src="public/destinations/ecotourism.png" height="300px" cover />
            <V-text class="image-texts">12. Spiritual & Eco Tourism</V-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
    <v-container>
      <v-row>
        <h1 style="text-align: center; text-decoration: underline;">Explore, Experience, and Embrace Kenya!!</h1>
        <p style="font-size: 1.4em;">From the golden savannahs of the Maasai Mara to the calm shores of Lake Naivasha
          and the rich cultures of Lamu, Kenya is a destination like no other. Whether you seek adventure, relaxation,
          or discovery — each corner of this land tells a story waiting for you to explore.
          Begin your journey today, and experience the magic that makes Kenya truly unforgettable.</p>
        +
        <v-carousel cycle interval="2000" pause-on-hover>
          <v-carousel-item src="public/destinations/finaldestination.png"></v-carousel-item>
          <v-carousel-item src="public/destinations/finaldestination2.png"></v-carousel-item>
          <v-carousel-item src="public/destinations/finaldestination3.png"></v-carousel-item>
          <v-carousel-item src="public/destinations/destination3 (1).png"></v-carousel-item>
          <v-carousel-item src="public/destinations/destination3 (2).png"></v-carousel-item>
          <v-carousel-item src="public/destinations/destination3 (3).png"></v-carousel-item>
          <v-carousel-item src="public/destinations/destination3 (4).png"></v-carousel-item>
          <v-carousel-item src="public/destinations/destinations2/Screenshot 2025-10-19 235253.png"></v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </div>

  <div class="destinations-footer">
    <p style="text-align: center;">2025 @safariguide
      <br></br>
      From the rolling plains of the Maasai Mara to the tranquil beaches of Diani,
      Kenya invites you to explore, connect, and create memories that last a lifetime.
    </p>
    <P style="text-align: center;">
      Your next great adventure begins here.
    </p>
    <P style="text-align: center; font-size: 1.5em;">Karibu Kenya.</P>
  </div>
</template>

<style scoped>
.page {
  background-color: color-mix(in srgb-linear, color percentage, color percentage);
  background-size: cover;

}

.container {
  background-position: center;
  background-size: cover;
  height: 50vh;
  width: 100%;

}

.imag {
  width: 100%;
  padding: 0%;
}

.heading {
  color: aliceblue;
  text-decoration: underline;
  text-decoration-color: azure;
  font-size: 4em;
  text-align: center;

}

.aimee {
  padding: 0%;

}

.search {
  width: 50%;
  max-width: 100%;
  background-color: rgb(254, 254, 254);
  justify-self: center;

  opacity: var(170%);
  border-radius: 60px;
  height: 4.5em;
  white-space: initial;

}

.new {
  width: 500px;

}

.image-texts {
  color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-size: 1.5em;
}

.image-card {
  margin: 0 12px;
}

.destinations-footer {
  background: linear-gradient(135deg, #e6f4ea, #c8e6c9);
  color: #1b5e20;
  width: 100%;
  border-top: 2px solid #81c784;
  height: 15vh;
}

.image-card {
  transition: 0.3s;
  /* smooth animation for hover */
}

.image-card:hover {
  transform: scale(1.03);
  /* slightly enlarges the card when hovered */
  z-index: 1;
  /* keeps the hovered card on top */
}
</style>