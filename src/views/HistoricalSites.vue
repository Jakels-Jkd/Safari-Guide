<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="history-page">

    <!-- HERO – same emotional style you fell in love with -->
    <div class="nema">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">Kenya’s Historical Sites</h1>
        <p class="subtitle">Where Every Stone Tells a Story</p>
      </div>
    </div>

    <v-container class="py-16 px-6 max-w-7xl">
      <h1 class="display-1 text-center font-weight-black mb-16 text-amber-900">
        <span class="underline-elegant">Step Back in Time with Kenya’s Living Heritage</span>
      </h1>

      <!-- 1. Fort Jesus – Mombasa -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12">
          <h3 class="tribe-title">1. Fort Jesus – Mombasa</h3>
          <p class="tribe-text">
            Built by the Portuguese in 1593 to guard the Old Port of Mombasa.<br>
            For centuries it changed hands between Portuguese, Omani Arabs and British — a fortress soaked in blood, faith and trade.<br>
            Today a UNESCO World Heritage Site, its coral walls still whisper tales of cannons, slaves and Swahili queens.
            <em>Stand on the battlements at sunset — the Indian Ocean remembers everything.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 2. Gedi Ruins – Kilifi -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="tribe-title">2. Gedi Ruins – Kilifi</h3>
          <p class="tribe-text">
            A lost Swahili city swallowed by jungle in the 17th century.<br>
            Palaces, mosques, tombs and even flushing toilets — all built from coral stone centuries before Europe had them.<br>
            Walk silently under giant baobabs and feel the ghosts of merchants and scholars still lingering in the air.
            <em>One of the world’s greatest archaeological mysteries — and it’s all yours.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 3. Lamu Old Town -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12">
          <h3 class="tribe-title">3. Lamu Old Town – Lamu Island</h3>
          <p class="tribe-text">
            The oldest continually inhabited town in East Africa — UNESCO World Heritage Site since 2001.<br>
            No cars. Only donkeys, dhows, carved doors and the sound of the muezzin at dawn.<br>
            Time stopped here centuries ago — and decided to stay.
            <em>Walk the narrow streets and feel 800 years of Swahili civilisation breathing around you.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

    <!--  4. Hell’s Gate National Park – Naivasha-->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="tribe-title">4. Hell’s Gate National Park – Naivasha</h3>
          <p class="tribe-text">
            Towering red cliffs, geothermal steam vents and gorges that inspired The Lion King.<br>
            The only park in Kenya where you can walk or cycle among zebra and giraffe.<br>
            Maasai legends say the dramatic landscape was created when the earth split in anger.
            <em>Feel the raw power of the Rift Valley under your feet.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 5. Karen Blixen Museum – Nairobi -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12">
          <h3 class="tribe-title">5. Karen Blixen Museum – Nairobi</h3>
          <p class="tribe-text">
            “I had a farm in Africa, at the foot of the Ngong Hills…”<br>
            Step into the real house of the author of Out of Africa. Her piano, books and coffee dryer are exactly where she left them.<br>
            The garden still blooms, lions still roar in the distance at night.
            <em>Time travel in a single afternoon.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 6. Nairobi National Museum -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="tribe-title">6. Nairobi National Museum</h3>
          <p class="tribe-text">
            The cradle of humankind exhibits, Joy Adamson’s paintings, 900 stuffed birds, and the original Hominid Vault.<br>
            From Turkana Boy to Maasai shields — Kenya’s entire story under one roof.
            <em>Leave knowing why the world calls us the cradle of mankind.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 7. Ngong Hills -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12">
          <h3 class="tribe-title">7. Ngong Hills – Nairobi</h3>
          <p class="tribe-text">
            The “Knuckles of God” that Karen Blixen immortalised.<br>
            Hike the seven hills with Maasai guides, visit the wind turbines, and watch the sun set over the Rift Valley.<br>
            On a clear day you can see Mount Kenya and Kilimanjaro at the same time.
            <em>This is where heaven touches Kenya.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 8. Shimoni Slave Caves – Kwale -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="tribe-title">8. Shimoni Slave Caves – Kwale</h3>
          <p class="tribe-text">
            Dark coral caverns where thousands of enslaved Africans were held before being shipped across the Indian Ocean.<br>
            Chains still hang from the walls. The silence is heavy with memory.<br>
            Today it is a place of reflection, remembrance and healing.
            <em>Some histories must be felt, not just read.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 9. Rhino Ark – Aberdare Ranges -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12">
          <h3 class="tribe-title">9. Rhino Ark – Aberdare Ranges</h3>
          <p class="tribe-text">
            The world’s longest wildlife fence — 400 km built by hand to protect the last mountain bongo and black rhinos.<br>
            A living monument to Kenyan conservation spirit and community willpower.
            <em>Where man and nature chose to coexist.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 10. Baden-Powell Museum – Nyeri -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="tribe-title">10. Baden-Powell Museum – Nyeri</h3>
          <p class="tribe-text">
            The final home of Lord Robert Baden-Powell, founder of the Scout Movement.<br>
            His cottage, medals, drawings and the grave that faces Mount Kenya (as he requested) remain exactly as he left them.<br>
            More than 50 million scouts worldwide owe their promise to this quiet garden.
            <em>“Look wide, and even when you think you are looking wide — look wider still.”</em>
          </p>
        </v-col>
      </v-row>

      <!-- FINAL MESSAGE -->
      <div class="final-section py-20 text-center">
        <h2 class="final-title">Kenya Doesn’t Just Have History —<br>It <span class="text-amber-700">Is</span> History</h2>
        <p class="final-quote">
          “Every footstep you take on this soil<br>
          is walking on the shoulders of giants,<br>
          kings, warriors, poets, and dreamers.”
        </p>
        <v-btn
          size="x-large"
          color="amber darken-3"
          dark
          class="mt-12 rounded-pill px-16 text-h5 font-weight-bold"
          :to="{ name: 'Hotels' }"
        >
          Plan Your Heritage Journey
        </v-btn>
        <p class="karibu mt-16">Karibu Kenya • The Past is Calling</p>
      </div>
    </v-container>

    <!-- FOOTER – same as Cultures page -->
    <footer class="culture-footer">
      <p class="text-h6">© 2025 Safari Guide Kenya — Preserving Yesterday for Tomorrow</p>
      <div class="contact">
        <p>+254 113 268 956 • +254 723 075 680</p>
        <p class="email">history@safariguide.co.ke</p>
      </div>
      <p class="highlight">Harambee – Building the Future on Ancient Foundations</p>
    </footer>
  </div>
</template>

<!-- EXACT SAME BEAUTIFUL STYLE FROM THE CULTURES PAGE -->
<style scoped>
.history-page {
  background: linear-gradient(to bottom, #fffaf0, #fdfd96 5%, #f5f5dc 95%);
  min-height: 100vh;
  font-family: 'Georgia', serif;
}

.nema {
  position: relative;
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
              url('public/history/hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.overlay { position: absolute; inset: 0; background: linear-gradient(transparent 40%, rgba(0,0,0,0.8)); }

.title { font-size: 6.rem; font-weight: 900; letter-spacing: 4px; text-shadow: 4px 4px 20px rgba(0,0,0,0.8); }
.subtitle { font-size: 2.2rem; font-weight: 300; letter-spacing: 8px; margin-top: 1rem; opacity: 0.95; }

.underline-elegant { position: relative; display: inline-block; padding-bottom: 12px; }
.underline-elegant::after {
  content: ''; position: absolute; left: 50%; bottom: 0;
  width: 180px; height: 5px; background: linear-gradient(90deg, transparent, #c19a6b, transparent);
  transform: translateX(-50%); border-radius: 3px;
}

.tribe-title {
  font-size: 2.8rem; font-weight: 900; color: #8B4513; text-align: center;
  margin-bottom: 1.5rem; text-shadow: 1px 1px 8px rgba(0,0,0,0.1);
}

.tribe-text {
  font-size: 1.35rem; line-height: 2.2; background: rgba(255,255,255,0.92);
  padding: 2.5rem; border-radius: 24px; box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  backdrop-filter: blur(6px); border: 1px solid rgba(139,69,19,0.15);
}

.tribe-text em { display: block; margin-top: 1.5rem; font-size: 1.2rem; color: #8B4513; font-style: italic; }

.custom-divider {
  height: 4px; background: linear-gradient(90deg, transparent, #DEB887, transparent);
  border: none; margin: 4rem 0;
}

.fade-in { opacity: 0; animation: fadeInUp 0.9s ease-out forwards; transform: translateY(40px); }
.culture-entry:nth-child(2) { animation-delay: 0.2s; }
.culture-entry:nth-child(4) { animation-delay: 0.4s; }
/* add more delays if you want */

@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

.final-section { background: linear-gradient(rgba(255,255,255,0.7), rgba(255,248,220,0.9)); border-radius: 30px; padding: 5rem 2rem; margin: 6rem 0; }
.final-title { font-size: 4.2rem; color: #654321; }
.final-quote { font-size: 2.1rem; font-style: italic; color: #8B4513; line-height: 2.2; }

.karibu { font-size: 3rem; font-weight: bold; color: #8B4513; font-style: italic; }

.culture-footer {
  background: linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50);
  color: white; padding: 5rem 2rem; text-align: center; font-family: 'Georgia', serif;
}
.highlight { font-size: 2.2rem; font-weight: bold; margin-top: 2rem; color: #fff59d; }
</style>                                                      `1  `