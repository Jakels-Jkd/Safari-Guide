<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="spiritual-page">

    <div class="page">
      <div class="overlay"></div>
      <h1 class="title">Spiritual & Eco Tourism</h1>
      <p class="subtitle">Where Silence Heals and the Earth Teaches</p>
    </div>

    <v-container class="py-20">

      <h1 class="display-2 text-center font-weight-thin mb-16 text-grey-darken-3">
        Return to What Matters
      </h1>

      <!-- 1. Sacred Kaya Forests -->
      <v-row class="mb-16 align-center">
        <v-col cols="12" md="6">
          <v-img src="public/scenic/Screenshot 2025-12-10 080335.png" height="480" cover class="rounded-xl" />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="section-title">1. The Sacred Kaya Forests</h3>
          <p class="section-text">
            Ancient Mijikenda prayer sites hidden in coastal forests.<br>
            No shoes allowed. No loud voices. Only respect.<br>
            Elders still perform rituals under 500-year-old trees.<br>
            <em>Here, the ancestors still walk.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="simple-divider" />

      <!-- 2. Meditation & Yoga Retreats -->
      <v-row class="mb-16 align-center">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="" height="480" cover class="rounded-xl" />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="section-title">2. Silent Retreats & Yoga</h3>
          <p class="section-text">
            Vipassana centres in Ngong Hills.<br>
            Yoga shalas overlooking the Rift Valley.<br>
            10-day silent retreats where the only sound is your breath and distant hyenas at night.
          </p>
        </v-col>
      </v-row>
      <v-divider class="simple-divider" />

      <!-- 3. Community Eco Lodges -->
      <v-row class="mb-16 align-center">
        <v-col cols="12" md="6">
          <v-img src="public/coverImages/ecotourism.png" height="480" cover class="rounded-xl" />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="section-title">3. Community-Run Eco Camps</h3>
          <p class="section-text">
            Stay with Maasai families in Loita Hills.<br>
            Samburu women’s bead cooperatives.<br>
            All profits go back to conservation and schools.<br>
            <em>Travel that leaves the land better than you found it.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="simple-divider" />

      <!-- 4. Forest Bathing & Walking Safaris -->
      <v-row class="mb-16 align-center">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/scenic/Screenshot 2025-12-10 080741.png" height="480" cover class="rounded-xl" />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="section-title">4. Forest Bathing & Slow Safaris</h3>
          <p class="section-text">
            No vehicles. Just footsteps and birdsong.<br>
            Walk with a Maasai guide who reads the land like a book.<br>
            Sit under a baobab until your thoughts quiet down.
          </p>
        </v-col>
      </v-row>

      
      <div class="final py-20 text-center">
        <h2 class="final-title">Come Gently</h2>
        <p class="final-quote">
          “The earth does not belong to us.<br>
          We belong to the earth.”
        </p>
        <v-btn
          variant="text"
          size="large"
          class="mt-12 text-grey-darken-3"
          to="/tour-companies"
        >
          Find Your Quiet Journey
        </v-btn>
        <p class="karibu mt-16">Karibu Kwa Amani — Welcome in Peace</p>
      </div>

    </v-container>

    <footer class="simple-footer">
      <p>© 2025 Safari Guide Kenya — Travel with Respect</p>
    </footer>
  </div>
</template>

<style scoped>
.spiritual-page {
  background: linear-gradient(to bottom, #fafafa, #f5f5f5, #eeeeee);
  min-height: 100vh;
  color: #424242;
  font-family: 'Georgia', serif;
}

.page {
  position: relative;
  height: 70vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title {
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: 8px;
}

.subtitle {
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1rem;
  opacity: 0.9;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 600;
  color: #424242;
  margin-bottom: 1.5rem;
}

.section-text {
  font-size: 1.35rem;
  line-height: 2.2;
  color: #616161;
}

.section-text em {
  display: block;
  margin-top: 1.5rem;
  font-style: italic;
  color: #757575;
}

.simple-divider {
  height: 1px;
  background: #e0e0e0;
  margin: 4rem 0;
}

.final-title {
  font-size: 4rem;
  font-weight: 400;
  color: #424242;
}

.final-quote {
  font-size: 1.8rem;
  font-style: italic;
  color: #757575;
  line-height: 2;
  margin: 3rem 0;
}

.karibu {
  font-size: 2.8rem;
  font-weight: 300;
  color: #616161;
  font-style: italic;
}

.simple-footer {
  background: #424242;
  color: #eee;
  text-align: center;
  padding: 3rem;
  font-size: 1rem;
}
</style>