<script setup>
const destinations = [
  { number: "01", 
    title: "Wildlife & Safaris",           
    img: "public/CoverImages/laela-OHM88hDgNZ4-unsplash.jpg",           
    link: "/wildlifesafaris" 
  },
  { number: "02",
    title: "Marine & Beach Paradise",     
    img: "public/CoverImages/marine.png",                                
    link: "/marinebeachtourism" 
  },
  { number: "03",  
    title: "Nature & Scenic Beauty",      
    img: "public/CoverImages/thomas-bennie-1jlJrr4XGkU-unsplash (1).jpg", 
    link: "/naturescenictourism" 
  },
  { number: "04",
   title: "Kenyan Cultures",             
   img: "public/CoverImages/brian-kungu-kr4A0_7JhSc-unsplash.jpg",     
   link: "/cultures" 
  },
  { number: "05", 
    title: "Historical Sites",           
    img: "public/CoverImages/pravin-wakode-bhDb6Gd0BVw-unsplash.jpg",    
    link: "/historicalsites" 
  },
  { number: "06", 
    title: "Lakes & Wetlands",            
    img: "public/CoverImages/bibhash-polygon-cafe-banerjee-3QPNiZ_Nqjs-unsplash.jpg", 
    link: "/lakeswestlands" 
  },
  { number: "07", 
    title: "Forests & Nature Reserves",   
    img: "public/CoverImages/man-a-stylist-uQa4DN8HAb0-unsplash.jpg",   
    link: "/forestsandnaturereserves" 
  },
  { number: "08",  
    title: "Desert Expeditions",         
    img: "public/CoverImages/youhana-nassif-yv3NsDUFK7g-unsplash.jpg",  
    link: "/deserttourism" 
  },
  { number: "09",
    title: "Water Sports & Rapids",        
    img: "public/CoverImages/watersportinsagana.png",                    
    link: "/watersports" 
  },
  { number: "10",  
   title: "Spiritual & Eco Tourism",      
   img: "public/CoverImages/ecotourism.png",                            
   link: "/ecotourism" 
  },
]
</script>

<template>
  <div class="home-page">

    <div >
      <v-img 
        src="public/CoverImages/christopher-ford-lA-9wH3AlYY-unsplash.jpg" 
        height="70vh" 
        cover 
      >
        <div class="overlay"></div>
        <div class="content">
          <h1 class="title">Tour Kenya</h1>
          <p class="subtitle">The Heart & Soul of Africa</p>
          <p class="tagline">Welcome Home... Hakuna Matata!</p>
          <v-btn 
            size="x-large" 
            color="white" 
            class="mt-10 rounded-pill px-12 text-black font-weight-bold text-h5"
            variant="flat"
          >
            Begin Your Journey
          </v-btn>
        </div>
      </v-img>
    </div>

    <v-container class="py-16 text-center">
      <h1 class="welcome-title">Welcome to the Land of Endless Wonder</h1>
      <p class="welcome-text">
        From thundering wildebeest migrations to coral reefs glowing under turquoise waves,<br>
        from ancient Swahili cities to snow-capped mountains rising from the equator —<br>
        <strong>Kenya doesn’t just host adventures. Kenya is the adventure.</strong>
      </p>
      <h2 class="memory-line">Here, We Don’t Just Visit — We Create Memories That Last Forever</h2>
    </v-container>

    <div class="karibu-section">
      <h1 class="karibu-title">KARIBU</h1>
      <h1 class="karibu-title shadow">KARIBU KENYA</h1>
    </div>

    <v-container class="py-12">
      <v-row class="justify-center">
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(destinations, i) in destinations" :key="i">
          <router-link :to="destinations.link" class="text-decoration-none">
            <v-card class="dest-card rounded-xl overflow-hidden" elevation="12">
              <div class="card-image-wrapper">
                <v-img :src="destinations.img" height="320" cover class="card-img" />
                <div class="card-overlay"></div>
                <div class="card-label">
                  <span class="number">{{ destinations.number }}</span>
                  <h3 class="label-text">{{ destinations.title }}</h3>
                </div>
              </div>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="text-center py-16">
      <h1 class="final-title">Explore • Experience • Embrace Kenya</h1>
      <p class="final-text">
        Golden savannahs. Whispering deserts. Turquoise oceans. Snow on the equator.<br>
        44 tribes. One heartbeat. This is not a country — this is a feeling.
      </p>

      <v-carousel 
        cycle ="1500"
        height="500" 
        hide-delimiter-background 
        show-arrows="hover"
        class="rounded-xl shadow-2xl mt-12"
      >
        <v-carousel-item src="public/destinations/d2/finaldestination.png" cover />
        <v-carousel-item src="public/destinations/d2/finaldestination2.png" cover />
        <v-carousel-item src="public/destinations/d2/finaldestination3.png" cover />
        <v-carousel-item src="public/destinations/d2/destination3 (1).png" cover />
        <v-carousel-item src="public/destinations/d2/destination3 (2).png" cover />
        <v-carousel-item src="public/destinations/d2/destination3 (3).png" cover />
        <v-carousel-item src="public/destinations/d2/destination3 (4).png" cover />
        <v-carousel-item src="public/destinations/destinations2/Screenshot 2025-10-19 235253.png" cover />
      </v-carousel>

      <v-btn 
        size="x-large" 
        color="orange darken-3" 
        dark 
        class="mt-12 rounded-pill px-16 text-h5 font-weight-bold"
        to="/hotels"
      >
        Book Your Dream Safari Now
      </v-btn>
    </v-container>

    <footer class="footer1">
      <p class="footer-main">© 2025 Safari Guide Kenya — Made with Love for the Motherland</p>
      <p>Your journey begins the moment you say “Karibu”</p>
      <p class="karibu-final">KARIBU KENYA • TWAWAPENDA SANA</p>
    </footer>
  </div>
</template>



<style scoped>
.home-page {
  background: linear-gradient(to bottom, #fdfbfb, #e6d9c2 70%);
  overflow-x: hidden;
}

.overlay {
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent 30%, rgba(0,0,0,0.4));
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 90%;
}
.title {
  font-size: 7rem;
  font-weight: 900;
  letter-spacing: 8px;
  line-height: 1;
}
.subtitle {
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 12px;
  margin-top: 1rem;
}
.tagline {
  font-size: 2.8rem;
  font-style: italic;
  margin-top: 2rem;
  opacity: 0.95;
}

.welcome-title {
  font-size: 4rem;
  font-weight: 900;
  color: #8B4513;
}
.welcome-text {
  font-size: 1.6rem;
  color: #5D4037;
  line-height: 2;
  max-width: 900px;
  margin: 2rem auto;
}
.memory-line {
  font-size: 2.8rem;
  color: #D2691E;
  font-style: italic;
  margin-top: 3rem;
}

.karibu-section {
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(rgba(255,248,220,0.6), rgba(240,230,200,0.8));
  position: relative;
  overflow: hidden;
}
.karibu-title {
  font-size: 9rem;
  font-weight: 900;
  letter-spacing: 20px;
  color: #B8860B;
  text-shadow: 8px 8px 30px rgba(184,134,11,0.4);
}
.karibu-title.shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(139,69,19,0.15);
  z-index: -1;
}

.dest-card {
  position: relative;
  transition: all 0.4s ease;
  border: 3px solid transparent;
}
.dest-card:hover {
  transform: translateY(-20px) scale(1.03);
  box-shadow: 0 30px 60px rgba(139,69,19,0.35) !important;
  border-color: #FFD700;
}
.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.7));
}
.card-label {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
}
.number {
  font-size: 1.8rem;
  opacity: 0.8;
  font-weight: 300;
}
.label-text {
  font-size: 2rem;
  font-weight: 800;
  text-shadow: 3px 3px 10px black;
}

.final-title {
  font-size: 4.5rem;
  color: #8B0000;
  text-shadow: 3px 3px 20px rgba(139,0,0,0.3);
}
.final-text {
  font-size: 1.7rem;
  color: #654321;
  line-height: 2.2;
  max-width: 1000px;
  margin: 3rem auto;
}

.footer1 {
  background: linear-gradient(135deg, #1b5e20, #2e7d32, #388e3c, #4caf50);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
  font-family: Georgia, serif;
}
.footer-main {
   font-size: 1.4rem;
   margin-bottom: 1rem; }
.karibu-final {
  font-size: 4rem;
  font-weight: bold;
  margin-top: 2rem;
  color: #fff59d;
  text-shadow: 4px 4px 15px rgba(0,0,0,0.6);
}
</style>