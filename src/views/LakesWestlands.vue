<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="lakes-page">

    <div class="page">
      <h2 class="title">LAKES & WETLANDS OF KENYA</h2>
      <p class="subtitle">Where the Sky Comes Down to Drink</p>
    </div>

    <v-container class="py-16 px-6">
      <h1 class="display-3 text-center font-weight-black mb-16" style="text-decoration: underline overline; color:#006064;">
        Mirrors of Heaven on Earth
      </h1>

      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-pink-900">1. Lake Nakuru – The Pink Sea</h3>
          <p class="tribe-description">
            Once home to two million flamingos — a moving pink carpet visible from space. <br>
            Black rhinos drink beside white pelicans. <br>
            When the birds rise together, the sky forgets it is sky. <br>
            This is not a lake. This is a living prayer.
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel height="520" show-arrows cycle interval="4500" hide-delimiter-background class="rounded-xl elevation-20">
            <v-carousel-item src="public/coverImages/christopher-ford-lA-9wH3AlYY-unsplash.jpg" cover />
            <v-carousel-item src="public/destinations/lakes/Screenshot 2025-12-10 075533.png" cover />
            <v-carousel-item src="public/coverImages/bibhash-polygon-cafe-banerjee-3QPNiZ_Nqjs-unsplash.jpg" cover />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-red-900">2. Lake Bogoria – The Boiling Lake</h3>
          <p class="tribe-description">
            Over 200 hot springs and geysers erupt from pink soda water. <br>
            Steam rises like ancestral spirits. <br>
            The Endorois people still come here to heal. <br>
            Even the flamingos know this place is sacred.
          </p>
        </v-col>
        <v-col cols="12" md="12" order-md="2">
          <v-img src="public/destinations/lakes/Screenshot 2025-12-10 075648.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-teal-900">3. Lake Naivasha – The Breathing Heart</h3>
          <p class="tribe-description">
            Kenya’s only freshwater Rift Valley lake. <br>
            Hippos own the night. Fish eagles own the day. <br>
            Crescent Island — walk among giraffes with no fence between you and freedom. <br>
            Joy Adamson wrote “Born Free” here. Some places still remember.
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel height="520" show-arrows cycle interval="4500" class="rounded-xl elevation-20">
            <v-carousel-item src="public/destinations/lakes/Screenshot 2025-12-10 075925.png" cover />
            <v-carousel-item src="public/coverImages/bibhash-polygon-cafe-banerjee-3QPNiZ_Nqjs-unsplash.jpg" cover />
            <v-carousel-item src="public/destinations/lakes/Screenshot 2025-12-10 080039.png" cover />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-cyan-900">4. Baringo & Elementaita – Twin Jewels</h3>
          <p class="tribe-description">
            Baringo — 500 bird species, crocodile islands, Njemps fishermen who sing to hippos. <br>
            Elementaita — mirror-still water at dawn, pelicans in perfect formation. <br>
            Both fed by underground rivers older than humanity. <br>
            Here, water remembers everything.
          </p>
        </v-col>
        <v-col cols="12" md="12" order-md="2">
          <v-img src="public/destinations/lakes/Screenshot 2025-12-10 075347.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-purple-900">5. Lake Magadi – The Final Frontier</h3>
          <p class="tribe-description">
            Kenya’s hottest, saltiest, most extreme lake. <br>
            Black volcanic water. White salt islands. 50°C soda crusts. <br>
            Flamingos breed here when every other lake fails. <br>
            The Maasai say this is where the first fire cooled.
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-img src="public/destinations/lakes/Screenshot 2025-12-10 075036.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
      </v-row>

      <div class="my-20 text-center">
        <h2 class="display-1 font-weight-black mb-8" style="color:#004d40; text-decoration: underline;">
          This Is Not Water
        </h2>
        <p class="text-h5 font-italic mb-10" style="color:#006064; max-width: 900px; margin: 0 auto; line-height: 2;">
          "In Kenya’s lakes, you do not watch the sky.<br>
          The sky watches you."
        </p>

        <v-btn
          size="x-large"
          color="#00838f"
          dark
          class="rounded-pill px-12 text-h6 font-weight-bold"
          href="https://wa.me/254722000000?text=I want to see Kenya’s flamingo lakes and sacred waters – guide me"
          target="_blank"
        >
          <v-icon left>mdi-whatsapp</v-icon>
          Take Me to the Mirrors
        </v-btn>

        <p class="mt-16 text-h4 font-italic" style="color:#004d40;">
          Karibu Ziwa — Welcome to the Water
        </p>
      </div>
    </v-container>

    <div class="footer">
      <p>© 2025 Safari Guide Kenya</p>
      <div class="contact">
        <h3>For Lake & Wetland Journeys:</h3>
        <p>+254 722 000 000 | +254 723 075 680</p>
        <p>lakes@safariguide.co.ke</p>
      </div>
      <p class="highlight">
        Some places don’t reflect light.<br>
        They reflect souls.
      </p>
    </div>
  </div>
</template>

<style scoped>
.lakes-page {
  background: linear-gradient(to bottom, #e0f7fa, #b2ebf2, #80deea, #4dd0e1);
  min-height: 100vh;
}

.page {
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url('public/lakes/page.jpg') center/cover no-repeat fixed;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title {
  font-size: 5.5rem;
  font-weight: 900;
  letter-spacing: 10px;
  text-shadow: 6px 6px 30px rgba(0,0,0,0.9);
}

.subtitle {
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 8px;
  margin-top: 1rem;
  opacity: 0.95;
}

.card-subtitles {
  font-size: 2.9rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1.8rem;
  text-shadow: 3px 3px 12px rgba(0,0,0,0.3);
}

.tribe-description {
  font-size: 1.4rem;
  line-height: 2.3;
  background: rgba(255,255,255,0.92);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.18);
  backdrop-filter: blur(6px);
  border-left: 8px solid #00838f;
  font-family: 'Georgia', serif;
}

.footer {
  background: linear-gradient(135deg, #004d40, #006064, #00838f, #00acc1);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  font-family: 'Georgia', serif;
}

.footer .contact {
  margin: 2rem 0;
  font-size: 1.3rem;
}

.footer .highlight {
  font-size: 2.2rem;
  font-weight: bold;
  margin-top: 2.5rem;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.7);
  line-height: 1.6;
}

  .title { 
    font-size: 3.8rem; 
    letter-spacing: 6px;
   }
  .card-subtitles { 
    font-size: 2.3rem;
   }
  .tribe-description {
     padding: 2rem;
      font-size: 1.25rem; }

</style>