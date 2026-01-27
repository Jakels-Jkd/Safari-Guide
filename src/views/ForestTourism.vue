<!-- src/views/ForestsAndNatureReserves.vue — THE ULTIMATE FOREST MASTERPIECE -->
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="forest-page">

    <div class="page">
      <h2 class="title">ANCIENT FORESTS OF KENYA</h2>
      <p class="subtitle">Where the Earth Still Remembers Magic</p>
    </div>

    <v-container class="py-16 px-6">
      <h1 class="display-3 text-center font-weight-black mb-16" style="text-decoration: underline overline; color:#1b5e20;">
        The Last Cathedrals of Green
      </h1>

      <!-- 1. Kakamega Forest -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-green-900">1. Kakamega Rainforest</h3>
          <p class="tribe-description">
            The only tropical rainforest in Kenya. <br>
            A living relic of the ancient Guineo-Congolian forest that once stretched across Africa. <br>
            Home to 400-year-old trees, screaming colobus monkeys, and butterflies the size of your hand. <br>
            When it rains, the forest sings — every leaf becomes a drum for the sky.
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel height="520" show-arrows cycle interval="4500" hide-delimiter-background class="rounded-xl elevation-20">
            <v-carousel-item src="public/destinations/forest/Screenshot 2025-12-10 084306.png" cover />
            <v-carousel-item src="public/destinations/forest/Screenshot 2025-12-10 084328.png" cover />
            <v-carousel-item src="public/destinations/forest/Screenshot 2025-12-10 084348.png" cover />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#2e7d32" class="my-12" />

      <!-- 2. Arabuko Sokoke Forest -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/coverImages/man-a-stylist-uQa4DN8HAb0-unsplash.jpg" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="card-subtitles text-teal-900">2. Arabuko Sokoke Coastal Forest</h3>
          <p class="tribe-description">
            The largest remaining coastal forest in East Africa. <br>
            Golden-rumped elephant shrews dart between ancient cycads. <br>
            Sokoke scops owl — so rare it has its own forest. <br>
            Walk barefoot here and feel the breath of the Indian Ocean in every leaf.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#2e7d32" class="my-12" />

      <!-- 3. Aberdare Forest -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="6">
                   <v-img src="public/scenic/Screenshot 2025-12-10 080741.png" class="rounded-xl elevation-20" height="520" cover />

        </v-col>
        <v-col cols="12" md="6">
          <h3 class="card-subtitles text-emerald-900">3. Aberdare Cloud Forest</h3>
          <p class="tribe-description">
            Mist that never lifts. Giant bamboo cathedrals. <br>
            Black leopards move like shadows. Bongo antelopes hide in moss so thick it drips. <br>
            Waterfalls fall upward in the wind. <br>
            Here, even the clouds come to pray.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#2e7d32" class="my-12" />

      <!-- 4. Karura Forest -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-lime-900">4. Karura Forest – Nairobi’s Lung</h3>
          <p class="tribe-description">
            1,000 hectares of green in the heart of the city. <br>
            Wangari Maathai’s legacy — saved by one woman’s courage. <br>
            Caves where Mau Mau fighters once hid. A 50-foot waterfall inside Nairobi. <br>
            Run, walk, breathe — this forest teaches a city how to be human again.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#2e7d32" class="my-12" />

      <!-- 5. Mau Forest Complex -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-olive-900">5. Mau Forest – Mother of Rivers</h3>
          <p class="tribe-description">
            The largest indigenous forest in East Africa. <br>
            Source of 12 rivers — including the Mara and the Nile. <br>
            Home to the Ogiek, the honey people who speak to bees. <br>
            When one tree falls here, a lake dies in another country. <br>
            This is not a forest. This is the heartbeat of a continent.
          </p>
        </v-col>
      </v-row>

      <div class="my-20 text-center">
        <h2 class="display-1 font-weight-black mb-8" style="color:#1b5e20; text-decoration: underline;">
          This Is Not A Walk In The Woods
        </h2>
        <p class="text-h5 font-italic mb-10" style="color:#2e7d32; max-width: 900px; margin: 0 auto; line-height: 2;">
          "In the forest, time stops counting.<br>
          You do not visit the trees — the trees visit you."
        </p>

        <v-btn
          size="x-large"
          color="#2e7d32"
          dark
          class="rounded-pill px-12 text-h6 font-weight-bold"
          href="https://wa.me/254722000000?text=I'm ready to disappear into Kenya's ancient forests – please guide me"
          target="_blank"
        >
          <v-icon left>mdi-whatsapp</v-icon>
          Take Me Into The Green
        </v-btn>

        <p class="mt-16 text-h4 font-italic" style="color:#1b5e20;">
          Karibu Msitu — Welcome to the Forest
        </p>
      </div>
    </v-container>

    <!-- FOOTER  -->
    <div class="footer">
      <p>© 2025 Safari Guide Kenya</p>
      <div class="contact">
        <h3>For Forest & Nature Reserve Expeditions:</h3>
        <p>+254 722 000 000 | +254 723 075 680</p>
        <p>forests@safariguide.co.ke</p>
      </div>
      <p class="highlight">
        The forest doesn’t need you.<br>
        But you need the forest.
      </p>
    </div>
  </div>
</template>

<style scoped>
.forest-page {
  background: linear-gradient(to bottom, #f8fff8, #dfffdf, #b2d8b2, #90c090);
  min-height: 100vh;
}

.page {
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.65));
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
  font-family: 'Cinzel', serif;
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
  font-family: 'Playfair Display', serif;
}

.tribe-description {
  font-size: 1.4rem;
  line-height: 2.3;
  background: rgba(255,255,255,0.92);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.18);
  backdrop-filter: blur(6px);
  border-left: 8px solid #2e7d32;
  font-family: 'Georgia', serif;
}

.footer {
  background: linear-gradient(135deg, #1b5e20, #2e7d32, #388e3c, #4caf50);
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

/* Responsive touch */
@media (max-width: 960px) {
  .title { font-size: 3.8rem; letter-spacing: 6px; }
  .card-subtitles { font-size: 2.3rem; }
  .tribe-description { padding: 2rem; font-size: 1.25rem; }
}
</style>