<script setup>
import { ref } from 'vue'

</script>

<template>

  <div class="page">
    <v-container pa="0%">

      <h1 style="text-align: center; text-decoration: underline;">Wildlife & Safaris</h1>
      <p style="font-size: 1.25em;">Discover Africa’s untamed beauty through its wildlife and safaris — where nature
        thrives, adventure awaits, and every encounter leaves a lasting memory.</p>
      <p style="font-size: 1.25em;"> Kenya we're rich in both Wildlife both offering the best flora and fauna We offer
        the best Safari experience join us and create memories . </p>
      <v-row>
        <v-carousel cycle interval="2000" pause-on-hover>
          <v-carousel-item
            src="public/destinations/wildlifesafaris/deanna-deshea-rDkv9Lla0Yw-unsplash.jpg"></v-carousel-item>
          <v-carousel-item src="public/destinations/wildlifesafaris/lion chasing prey.png"></v-carousel-item>
          <v-carousel-item
            src="public/destinations/wildlifesafaris/rohan-reddy-MagqGwVEK7Q-unsplash.jpg"></v-carousel-item>
          <v-carousel-item src="public/destinations/wildlifesafaris/laela-Yy2a8KCbodg-unsplash.jpg"></v-carousel-item>
          <v-carousel-item
            src="public/destinations/wildlifesafaris/giusi-borrasi-2KB7G8WD7CE-unsplash.jpg"></v-carousel-item>
        </v-carousel>
      </v-row>
 
   <br></br>
      <h1 style="text-align: center; text-decoration: underline;"><b>Wildlife</b></h1>

      <P> Experience the wild up close — from majestic elephants to rare bird species, explore the beauty of nature in
        its purest form.</P>
      <P>Welcome and Explore the vast rich wildlife in Kenya from the king of the jungle and its pride and enjoy best
        stories of how they became the rulers of their individual pride.
      </P>
      <P style="font-size: 1.9em; text-align: center; font-weight: bolder;">Lets dive in!!</P>
      <br></br>
    </v-container>
    <v-container>
      <v-row align="stretch">
       <v-col>
        <v-card>
            <v-card-title style="text-align: center; font-weight: bolder; font-size: 1.5em;">Lions - The Kings of the Savannah</v-card-title>
            <v-img src="public/destinations/wildlifesafaris/lions/ramon-vloon-_t99u7ktTnU-unsplash.jpg"
            ></v-img>
        </v-card>
       </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
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

.page {
  background-color: #d2d2d2;
  background-size: cover;
  height: 100%;
  padding: 0;
}

.imag {
  width: 100%;
  padding: 0%;
}

.cards {
  width: 50vh;
  height: 100%;
  padding: 0%;
  justify-self: flex-start;

}
.jam{
  float: right;
  width: 1050px;
  height: 550px;
  margin-top: 50px;
  border-radius: 8px;
  object-fit: fill;

}
.jake{
  float: left;
  width: 1050px;
  height: 550px;
  margin-top: 50px;
  border-radius: 8px;
  object-fit: fill;

}
</style>