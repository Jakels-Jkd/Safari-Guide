<!-- src/views/NatureAndScenic.vue -->
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="nature-page">

    <!-- HERO -->
    <div class="nema">
      <h2 class="title">NATURE & SCENIC KENYA</h2>
      <p class="subtitle">Where the Land Breathes</p>
    </div>

    <v-container class="py-16 px-6">
      <h1 class="display-3 text-center font-weight-black mb-16" style="text-decoration: underline overline; color:#2e7d32;">
        The Soul of Kenya Is Green
      </h1>

      <!-- 1. Great Rift Valley -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-green-800"style="text-decoration: underline;">1. The Great Rift Valley</h3>
          <p class="tribe-description">
            A 6,000 km scar torn across Africa by the hands of gods. <br>
            Flamingo-pink lakes. Steaming craters. Escarpments that drop into eternity. <br>
            From Lake Magadi’s salt crystals to Lake Bogoria’s geysers — this is where the Earth shows its bones. <br>
            Stand on the edge and feel the planet still moving beneath your feet.
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel height="520" show-arrows cycle interval="4500" hide-delimiter-background class="rounded-xl elevation-20">
            <v-carousel-item src="public/destinations/nature/Screenshot 2025-12-10 061017.png" cover />
            <v-carousel-item src="public/destinations/nature/Screenshot 2025-12-10 061044.png" cover />
            <v-carousel-item src="public/destinations/nature/Screenshot 2025-12-10 060724.png" cover />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#1b5e20" class="my-12" />

      <!-- 2. Mount Kenya -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-emerald-900" style="text-decoration: underline;">2. Mount Kenya – Batian & Nelion</h3>
          <p class="tribe-description">
            Africa’s second highest mountain. <br>
            Glaciers at the equator. Afro-alpine moorlands with giant lobelias and groundsel that look like aliens. <br>
            Sacred to the Kikuyu — they face it when they pray. <br>
            At 5,199m, the air is thin, the silence is thick, and the stars are close enough to touch.
          </p>
        </v-col>
        <v-col cols="12" md="12" order-md="2">
          <v-img src="public/destinations/nature/Screenshot 2025-12-10 061321.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#1b5e20" class="my-12" />

      <!-- 3. Ngong Hills -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-teal-800"style="text-decoration: underline;">3. Ngong Hills – The Knuckles of God</h3>
          <p class="tribe-description">
            Seven green fists rising from the plains. <br>
            Wind turbines spinning like prayers. Maasai cattle bells echoing at sunset. <br>
            Karen Blixen wrote about them. The Maasai still graze here. <br>
            On a clear day, you see Kilimanjaro in one direction and Nairobi’s skyline in the other — two worlds in one breath.
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel height="520" show-arrows cycle interval="4000" class="rounded-xl elevation-20">
            <v-carousel-item src="public/destinations/nature/Screenshot 2025-12-10 061430.png" />
            <v-carousel-item src="public/destinations/nature/Screenshot 2025-12-10 061520.png" />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#1b5e20" class="my-12" />

      <!-- 4. Menengai Crater -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="2">
          <v-img src="public/destinations/nature/Screenshot 2025-12-10 060724.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-lime-900" style="text-decoration: underline;">4. Menengai Crater – The Sleeping Giant</h3>
          <p class="tribe-description">
            One of the largest volcanic craters on Earth. <br>
            12 km wide. Steaming vents. Forests growing inside a volcano. <br>
            Local legend says it’s the home of an angry spirit who swallows people who lie. <br>
            Hike the rim at dawn — the mist rises like breath from the underworld.
          </p>
        </v-col>
      </v-row>

      <!-- FINAL MESSAGE -->
      <div class="my-20 text-center">
        <h2 class="display-1 font-weight-black mb-8" style="color:#1b5e20; text-decoration: underline;">
          Kenya Is Not Just Land
        </h2>
        <p class="text-h5 font-italic mb-10" style="color:#2e7d32; max-width: 900px; margin: 0 auto; line-height: 2;">
          "Here, the mountains have names.<br>
          The valleys have memories.<br>
          And the wind still carries the songs of the first people."
        </p>

        <v-btn
          size="x-large"
          color="#2e7d32"
          dark
          class="rounded-pill px-12 text-h6 font-weight-bold"
          to="/tour-companies"
        >
          <v-icon left>mdi-earth</v-icon>
          Discover the Land
        </v-btn>

        <p class="mt-16 text-h4 font-italic" style="color:#1b5e20;">
          Karibu Kenya — The Earth Is Alive
        </p>
      </div>
    </v-container>

    <div class="footer">
      <p>© 2025 Safari Guide Kenya</p>
      <div class="contact">
        <h3>For Scenic & Nature Journeys:</h3>
        <p>+254 722 000 000 | nature@safariguide.co.ke</p>
      </div>
      <p class="highlight">Some places don’t need filters.<br>They need silence.</p>
    </div>
  </div>
</template>

<style scoped>
.nature-page {
  background: linear-gradient(to bottom, #f0fff0, #e6f9e6, #c8e6c9);
  min-height: 100vh;
}

.nema {
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('public/nature/hero.jpg') center/cover no-repeat;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title { font-size: 5rem; font-weight: 900; letter-spacing: 8px; text-shadow: 4px 4px 20px black; }
.subtitle { font-size: 2rem; font-weight: 300; letter-spacing: 6px; margin-top: 1rem; opacity: 0.9; }

.card-subtitles {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}

.tribe-description {
  font-size: 1.35rem;
  line-height: 2.2;
  background: rgba(255,255,255,0.88);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  backdrop-filter: blur(4px);
}

.footer {
  background: linear-gradient(135deg, #1b5e20, #2e7d32, #388e3c, #4caf50);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Georgia', serif;
}

.footer .highlight {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
}
</style>