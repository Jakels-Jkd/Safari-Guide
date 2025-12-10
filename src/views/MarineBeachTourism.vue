<template>
  <div class="marine-page">

    <!-- page -->
    <div class="page">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">KENYA’S MARINE & BEACH PARADISE</h1>
        <p class="subtitle">Where the Indian Ocean Kisses the Soul</p>
        <p class="quote">“The sea does not reward those who are too anxious, too greedy, or too impatient.<br>One should lie empty, open, choiceless as a beach — waiting for a gift from the sea.”</p>
      </div>
    </div>

    <v-container class="py-20 px-6 max-w-7xl">

      <h1 class="display-3 text-center font-weight-black mb-20 text-turquoise-900">
        <span class="underline-wave">The Last True Swahili Coast</span>
      </h1>

      <!-- 1. DIANI BEACH -->
      <v-row class="mb-20 align-center beach-entry">
        <v-col cols="12" md="12">
          <h2 class="beach-title">1. Diani Beach – Ukunda</h2>
          <p class="beach-text">
            17 km of powder-white sand so fine it squeaks under your feet.<br>
            Voted Africa’s Leading Beach Destination multiple times — and it shows.<br>
            Camel rides at sunrise. Kitesurfing in turquoise lagoons. Colobus monkeys in the coral cliffs.<br>
            At night, the ocean glows with bioluminescent plankton.
            <em>This is the beach that ruins all other beaches for you — forever.</em>
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel height="620" cycle interval="5500" show-arrows hide-delimiter-background class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/destinations2/Screenshot 2025-10-19 235421.png" cover />
            <v-carousel-item src="public/destinations/d2/destination3 (3).png" cover />
            <v-carousel-item src="public/destinations/marine/mombasa north2.png" cover />
            <v-carousel-item src="public/destinations/d2/destination3 (3).png" cover />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider class="ocean-divider" />

      <!-- 2. WATAMU -->
      <v-row class="mb-20 align-center beach-entry">
        <v-col cols="12" md="12" order-md="1">
          <h2 class="beach-title">2. Watamu Marine National Park</h2>
          <p class="beach-text">
            Coral gardens that look like underwater cathedrals.<br>
            Swim with green turtles the size of tables. Whale sharks (Dec–Mar). 600 species of fish.<br>
            The famous “Sardine Run” turns the water silver. Mida Creek mangroves at sunset turn gold.<br>
            <em>Jacques Cousteau called this one of the most beautiful marine parks in the world. He was right.</em>
          </p>
        </v-col>
        <v-col cols="12" md="12" order-md="2">
          <v-carousel height="620" cycle interval="5000" show-arrows class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/marine/Screenshot 2025-12-10 055924.png" />
            <v-carousel-item src="public/destinations/marine/Screenshot 2025-12-10 055852.png" />
            <v-carousel-item src="public/destinations/marine/Screenshot 2025-12-10 055949.png" />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider class="ocean-divider" />

      <!-- 3. LAMU -->
      <v-row class="mb-20 align-center beach-entry">
        <v-col cols="12" md="12">
          <h2 class="beach-title">3. Lamu & Shela Beach</h2>
          <p class="beach-text">
            No cars. Only donkeys and dhows.<br>
            Miles of empty beach where your footprints are the only ones.<br>
            Sunset dhow cruises with dolphins riding the bow wave.<br>
            <em>Time doesn’t pass here — it dissolves.</em>
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-img src="public/destinations/marine/Screenshot 2025-12-10 060459.png" height="620" cover class="rounded-xl shadow-2xl" />
        </v-col>
      </v-row>
      <v-divider class="ocean-divider" />

      <!-- 4. KISITE MPUNGUTI -->
      <v-row class="mb-20 align-center beach-entry">
        <v-col cols="12" md="12" order-md="1">
          <h2 class="beach-title">4. Kisite Mpunguti Marine Park</h2>
          <p class="beach-text">
            Kenya’s Maldives.<br>
            Crystal water. Coral islands. Sandbanks that appear at low tide.<br>
            Snorkel with hundreds of dolphins. Eat seafood on a floating dhow.<br>
            <em>Here, the ocean and sky compete to be more blue — and both win.</em>
          </p>
        </v-col>
        <v-col cols="12" md="12" order-md="2">
          <v-carousel height="620" cycle interval="5000" show-arrows class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/marine/Screenshot 2025-12-10 060253.png" />
            <v-carousel-item src="public/destinations/marine/Screenshot 2025-12-10 060240.png" />
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider class="ocean-divider" />

      <!-- 5. TIWI BEACH -->
      <v-row class="mb-20 align-center beach-entry">
        <v-col cols="12" md="12">
          <h2 class="beach-title">5. Tiwi Beach – Quiet Paradise</h2>
          <p class="beach-text">
            The beach locals keep secret.<br>
            Private coves. Natural tidal pools. Coral cliffs glowing orange at sunset.<br>
            Fewer tourists. More peace. Same perfect ocean.
            <em>The place you go when you want the coast to yourself.</em>
          </p>
        </v-col>
        <v-col cols="12" md="12">
          <v-img src="public/destinations/destinations2/Screenshot 2025-10-19 235421.png" height="620" cover class="rounded-xl shadow-2xl" />
        </v-col>
      </v-row>
      <v-divider class="ocean-divider" />

      <!-- 6. MOMBASA NORTH COAST -->
      <v-row class="mb-20 align-center beach-entry">
        <v-col cols="12" md="12" order-md="1">
          <h2 class="beach-title">6. Mombasa North Coast</h2>
          <p class="beach-text">
            Nyali, Bamburi, Shanzu — the original beach holiday coast.<br>
            Night beach parties. Camel safaris. Glass-bottom boats over coral.<br>
            The heartbeat of Swahili nightlife meets endless white sand.
            <em>This is where Kenya learned to party with the ocean.</em>
          </p>
        </v-col>
        <v-col cols="12" md="12" order-md="2">
          <v-carousel height="620" cycle interval="5000" show-arrows class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/marine/mombasa north.png" />
            <v-carousel-item src="public/destinations/marine/mombasa north2.png" />
          </v-carousel>
        </v-col>
      </v-row>

      <!-- FINAL MESSAGE -->
      <div class="final-ocean py-32 text-center">
        <h1 class="final-title">
          Kenya Doesn’t End at the Shore<br>
          <span class="text-turquoise-700">It Begins Again in the Sea</span>
        </h1>
        <p class="final-quote">
          “Leave only footprints.<br>
          Take only memories.<br>
          Kill only time.<br>
          And let the ocean heal everything else.”
        </p>

        <v-btn
          size="x-large"
          color="turquoise darken-3"
          dark
          class="mt-16 rounded-pill px-20 text-h4 font-weight-black py-8"
          to="/tourcompanies"
        >
          BOOK YOUR OCEAN ESCAPE
        </v-btn>

        <p class="karibu-ocean mt-24">
          Karibu Baharini — Welcome to the Sea
        </p>
      </div>

    </v-container>

    <!-- FOOTER -->
    <footer class="ocean-footer">
      <p class="text-h5">© 2025 Safari Guide Kenya — Guardians of the Coast</p>
      <div class="contact">
        <p>+254 113 268 956 • +254 723 075 680</p>
        <p class="email">beach@safariguide.co.ke</p>
      </div>
      <p class="highlight">
        The Ocean Doesn’t Belong to Us<br>
        We Belong to the Ocean
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.marine-page {
  background: linear-gradient(to bottom, #e0f7fa, #b2ebf2, #80deea, #4dd0e1, #00bcd4);
  min-height: 100vh;
  font-family: 'Georgia', serif;
  color: #006064;
}

.page {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)),
              url('public/beaches/ocean.jpg') center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title { 
  font-size: 7.5rem; 
  font-weight: 900; 
  letter-spacing: 8px; 
  text-shadow: 8px 8px 40px rgba(0,0,0,0.9); 
}
.subtitle { 
  font-size: 3.2rem; 
  font-weight: 300; 
  letter-spacing: 12px; 
  margin-top: 1rem; 
}
.quote { 
  font-size: 2.1rem; 
  font-style: italic; 
  margin-top: 4rem; 
  max-width: 900px; 
  opacity: 0.95; 
  line-height: 2; 
}

.underline-wave {
  position: relative;
  display: inline-block;
  padding-bottom: 20px;
}
.underline-wave::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 400px;
  height: 10px;
  background: linear-gradient(90deg, transparent, #00bcd4, #0097a7, #00bcd4, transparent);
  transform: translateX(-50%);
  border-radius: 50px;
}

.beach-title {
  font-size: 4.2rem;
  font-weight: 900;
  color: #006064;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.2);
}

.beach-text {
  font-size: 1.55rem;
  line-height: 2.5;
  background: rgba(255,255,255,0.94);
  padding: 4rem;
  border-radius: 40px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
  border: 4px solid rgba(0,188,212,0.3);
}
.beach-text em {
  display: block;
  margin-top: 2.5rem;
  font-size: 1.7rem;
  color: #0097a7;
  font-weight: bold;
  font-style: italic;
}

.ocean-divider {
  height: 10px;
  background: linear-gradient(90deg, transparent, #00bcd4, #0097a7, #006064, #0097a7, #00bcd4, transparent);
  border: none;
  margin: 8rem 0;
  border-radius: 10px;
}

.final-ocean {
  background: linear-gradient(135deg, rgba(0,188,212,0.15), rgba(0,151,167,0.3));
  border-radius: 60px;
  padding: 12rem 4rem;
  margin: 14rem 0;
  border: 6px solid #0097a7;
}
.final-title { 
  font-size: 6rem; 
  color: #004d40; 
  line-height: 1.2; 
  text-shadow: 5px 5px 20px rgba(0,0,0,0.3); }
.final-quote { 
  font-size: 3rem; 
  font-style: italic; 
  color: #006064; 
  line-height: 2.2; 
  margin: 4rem 0; 
}
.karibu-ocean { 
  font-size: 5.5rem; 
  font-weight: bold; 
  color: #006064; 
  font-style: italic; 
  text-shadow: 4px 4px 18px rgba(0,0,0,0.4); }

.ocean-footer {
  background: linear-gradient(135deg, #006064, #00838f, #0097a7, #00acc1, #26c6da);
  color: white;
  padding: 7rem 2rem;
  text-align: center;
}
.ocean-footer .highlight {
  font-size: 2.8rem;
  font-weight: bold;
  margin-top: 3rem;
  text-shadow: 3px 3px 12px rgba(0,0,0,0.7);
  line-height: 1.8;
  color: #e0f7fa;
}

.beach-entry {
   opacity: 1 ; 
   transform: none ; 
   animation: none ; 
   }
</style>