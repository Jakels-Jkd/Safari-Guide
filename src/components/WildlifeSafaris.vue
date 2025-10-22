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
        <v-carousel cycle interval="4000" pause-on-hover>
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
      <P style="font-size: 1.6em; text-align: center; font-weight: bolder;">Lets dive in!!</P>
      <br></br>
      <v-row align="stretch">
        <v-col  cols="12" md="6" >
        
          <h2 style="text-align: center;text-decoration: underline;">1. Lions - The Kings of the Savannah</h2>
         
          <p style="font-size: 1.3em;">
            Lions, often called the “kings of the savannah,” are iconic symbols of strength, courage, and majesty. These
            magnificent big cats are known for their social nature, living in groups called prides that showcase complex
            family bonds and teamwork. Male lions, with their majestic manes, patrol and protect the territory, while
            lionesses are skilled hunters, working together to provide for the pride.
            Lions play a crucial role in maintaining the balance of their ecosystem, regulating prey populations and
            ensuring the health of the grasslands. Observing a lion in the wild is an awe-inspiring experience — from
            their powerful roar echoing across the plains to their graceful yet powerful movements while hunting or
            resting under the shade of acacia trees.
            Conservation efforts are vital to protect these iconic creatures, as their numbers face threats from habitat
            loss, human-wildlife conflict, and poaching. By visiting responsible wildlife reserves and supporting
            eco-tourism, travelers can contribute to the survival of lions and experience the thrill of seeing these
            magnificent predators in their natural habitat.  </p>
        </v-col>
        <v-col cols="12" md="6" class="d-flex">
            <v-img 
            class="jam"

            src="public/destinations/wildlifesafaris/lions/ramon-vloon-_t99u7ktTnU-unsplash.jpg"></v-img>
        
            </v-col>
            <v-col cols="12" md="6" class="d-flex">
              
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
</style>