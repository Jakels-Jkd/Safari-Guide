<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="water-page">

    <!-- HERO -->
    <div class="nema">
      <h2 class="title">WATER SPORTS KENYA</h2>
      <p class="subtitle">The Indian Ocean Is Our Playground</p>
    </div>

    <v-container class="py-16 px-6">
      <h1 class="display-3 text-center font-weight-black mb-16" style="text-decoration: underline overline; color:#006064;">
        Kenya Doesn’t Do Water Sports.<br>Kenya Becomes the Water.
      </h1>

      <!-- 1. KITESURFING -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-cyan-800">1. Kitesurfing – Diani, Watamu, Galu</h3>
          <p class="tribe-description">
            World top-5 destination. 25–35 knot winds. Flat lagoons. Downwinders for 30km.<br>
            Launch off waves. Boost 20+ meters. Ride with dolphins. <br>
            Kenya hosts the famous “Kenya Kite Cup” every year — pros from 30 countries come to lose.
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel height="520" show-arrows cycle interval="4000" class="rounded-xl elevation-20">
            <v-carousel-item src="public/destinations/watersports/Screenshot 2025-12-10 090749.png" cover />
            <v-carousel-item src="public/destinations/watersports/Screenshot 2025-12-10 090727.png" cover />
            <v-carousel-item src="public/destinations/watersports/Screenshot 2025-12-10 090815.png" cover />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <!-- 2. DEEP SEA FISHING -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-blue-900">2. Deep Sea Big Game Fishing</h3>
          <p class="tribe-description">
            Pemba Channel Drop-off. Black, blue & striped marlin over 500kg. Sailfish jumping 10 feet high.<br>
            Yellowfin tuna that fight for hours. World records broken yearly in Watamu & Malindi.<br>
            Tag & release culture — we fight them, photograph them, and let them go.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <!-- 3. SCUBA DIVING & SNORKELING -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-teal-800">3. Scuba Diving & Snorkeling</h3>
          <p class="tribe-description">
            Watamu Marine Park, Kisite Mpunguti, Malindi Marine Reserve.<br>
            Whale sharks (Dec–Mar). 600+ fish species. Coral walls, wrecks, caves.<br>
            Dive with manta rays, turtles, octopus that change color to say hello.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <!-- 4. STAND-UP PADDLEBOARDING (SUP) -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/destinations/watersports/Screenshot 2025-12-10 090550.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="card-subtitles text-indigo-800">4. Stand-Up Paddleboarding (SUP)</h3>
          <p class="tribe-description">
            Glide over crystal water at sunrise. Paddle with turtles. Do yoga on your board in the middle of the ocean.<br>
            Mida Creek mangroves at high tide — paddle through tunnels of green.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <!-- 5. WIND SURFING -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="6">
          <v-img src="public/destinations/watersports/Screenshot 2025-12-10 090326.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="card-subtitles text-purple-800">5. Windsurfing – Che Shale & Diani</h3>
          <p class="tribe-description">
            Che Shale is Africa’s best-kept windsurfing secret.<br>
            30-knot side-onshore winds. Endless flat water inside the reef. Waves outside.<br>
            Home of the famous “Che Shale Classic” — windsurfers from Europe fly in just for this.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <!-- 6. JET SKI & WAKEBOARDING -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-deep-orange-800">6. Jet Ski & Wakeboarding</h3>
          <p class="tribe-description">
            Full-throttle jet ski safaris along the coast. <br>
            Wakeboard behind speedboats in calm lagoons. <br>
            Flip, spin, crash, laugh — repeat.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <!-- 7. SEA KAYAKING -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-light-blue-800">7. Sea Kayaking – Mida Creek & Gazi</h3>
          <p class="tribe-description">
            Paddle through mangrove forests at high tide. <br>
            Spot rare birds, crabs walking on water, fish jumping around your kayak. <br>
            Sunset kayaking with bioluminescent plankton lighting your paddle strokes.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#00838f" class="my-12" />

      <!-- 8. DHOW SAILING & SUNSET CRUISES -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="6" order-md="2">
          <v-carousel height="520" show-arrows cycle interval="4000" class="rounded-xl elevation-20">
            <v-carousel-item src="public/destinations/watersports/Screenshot 2025-12-10 090043.png" />
            <v-carousel-item src="public/destinations/watersports/Screenshot 2025-12-10 090043.png" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="card-subtitles text-amber-800">8. Traditional Dhow Sailing</h3>
          <p class="tribe-description">
            Sail on 100-year-old wooden dhows with lateen sails. <br>
            Fresh seafood BBQ on a sandbank. Swahili music. Cold drinks. <br>
            Dolphins ride the bow wave at sunset. <br>
            This is how Arabs traded with Kenya for 1,000 years — and it’s still the best way.
          </p>
        </v-col>
      </v-row>

      <!-- FINAL MESSAGE -->
      <div class="my-20 text-center">
        <h2 class="display-1 font-weight-black mb-8" style="color:#004d40; text-decoration: underline;">
          The Ocean Doesn’t Play Games
        </h2>
        <p class="text-h5 font-italic mb-10" style="color:#006064; max-width: 900px; margin: 0 auto; line-height: 2;">
          "It plays for keeps.<br>
          And if you’re brave enough to show up —<br>
          it will give you stories no land can match."
        </p>

        <v-btn
          size="x-large"
          color="#006064"
          dark
          class="rounded-pill px-16 text-h6 font-weight-bold"
          to="/tourcompanies"
        >
          <v-icon left size="40">mdi-waves-arrow-up</v-icon>
          Conquer the Ocean
        </v-btn>

        <p class="mt-16 text-h4 font-italic" style="color:#00838f;">
          Karibu Majini — The Sea Is Calling
        </p>
      </div>
    </v-container>

    <div class="footer">
      <p>© 2025 Safari Guide Kenya</p>
      <div class="contact">
        <h3>For Water Sports & Marine Adventures:</h3>
        <p>+254 722 000 000 | ocean@safariguide.co.ke</p>
      </div>
      <p class="highlight">Land ends where courage begins.</p>
    </div>
  </div>
</template>

<style scoped>
.water-page {
  background: linear-gradient(to bottom, #e0f7fa, #b2ebf2, #80deea, #4dd0e1);
  min-height: 100vh;
}

.nema {
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), 
              url('public/water/hero-extreme.jpg') center/cover no-repeat;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title { font-size: 5.5rem; font-weight: 900; letter-spacing: 10px; text-shadow: 5px 5px 25px black; }
.subtitle { font-size: 2.2rem; font-weight: 300; letter-spacing: 8px; margin-top: 1rem; }

.card-subtitles {
  font-size: 2.9rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1.8rem;
  text-shadow: 3px 3px 12px rgba(0,0,0,0.4);
}

.tribe-description {
  font-size: 1.38rem;
  line-height: 2.3;
  background: rgba(255,255,255,0.9);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  backdrop-filter: blur(6px);
}

.footer {
  background: linear-gradient(135deg, #004d40, #006064, #00838f, #0097a7, #00acc1);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  font-family: 'Georgia', serif;
}

.footer .highlight {
  font-size: 2.3rem;
  font-weight: bold;
  margin-top: 2.5rem;
  text-shadow: 3px 3px 12px black;
}
</style>