<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="cultures-page">

    <div class="nema">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">The Soul of Kenya</h1>
        <p class="hero-subtitle">42 Tribes • One Heartbeat</p>
      </div>
    </div>

    <v-container class="py-16 px-6 max-w-7xl">
      <h1 class="display-1 text-center font-weight-black mb-16 text-primary">
        <span class="underline-elegant">Discover Kenya’s Living Heritage</span>
      </h1>

      <!-- 1. Maasai -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6">
          <v-carousel height="520" cycle interval="4000" show-arrows hide-delimiter-background class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/cultures/the maasai 2.png" />
            <v-carousel-item src="destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg" />
            <v-carousel-item src="public/destinations/cultures/modern maasai.png" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="tribe-title">1. The Maasai</h3>
          <p class="tribe-text">
            Guardians of the red shuka and the high jump that defies gravity.<br>
            A people who measure wealth in cattle and time in sunrises.<br>
            Their beadwork tells stories, their songs carry ancestors, and their warriors still guard the savanna with pride and grace.
            <em>From ancient rites to modern runways — the Maasai spirit never fades.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 2. Kikuyu -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/destinations/cultures/the kikuyu.png" class="rounded-xl shadow-2xl" height="520" cover />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="tribe-title">2. The Kikuyu • Agĩkũyũ</h3>
          <p class="tribe-text">
            Children of Gĩkũyũ and Mũmbi, born at the foot of Mount Kenya.<br>
            Farmers who speak to the soil, storytellers who dance at harvest moons.<br>
            Their songs rise with the mist, their clans unite like roots beneath the earth.
            <em>In every shamba, in every market — the heartbeat of Kenya’s progress.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 3. Luhya -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6">
          <v-img src="public/destinations/cultures/the luhya.png" class="rounded-xl shadow-2xl" height="520" cover />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="tribe-title">3. The Luhya • Abaluhya</h3>
          <p class="tribe-text">
            People of the west, where the sun sets in gold.<br>
            Masters of the Isukuti drum that makes the earth tremble with joy.<br>
            Bullfighting, laughter, ugali and chicken — this is celebration made flesh.
            <em>One family, many voices — all singing in perfect harmony.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 4. Luo -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6" order-md="2">
          <v-carousel height="520" cycle interval="4000" show-arrows class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/cultures/the luo 2 (2).png" />
            <v-carousel-item src="public/destinations/cultures/the luo 3.png" />
            <v-carousel-item src="public/destinations/cultures/the luo 2 (1).png" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="tribe-title">4. The Luo • Jaluo</h3>
          <p class="tribe-text">
            Fishermen of the great lake, children of Ramogi.<br>
            Birthplace of Benga and Ohangla — music that moves nations.<br>
            Wisdom flows like the Nile, pride stands tall like papyrus.
            <em>Here, every elder is a library, every song a history lesson.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 5. Kalenjin –  -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6">
          <v-img src="public/destinations/cultures/the kalenjin.png" class="rounded-xl shadow-2xl" height="520" cover />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="tribe-title">5. The Kalenjin</h3>
          <p class="tribe-text">
            Highland warriors who run like the wind — producing more world champions than any other community on Earth.<br>
            Their initiation rites teach discipline, their cattle bells sing at dawn, and their respect for elders is legendary.
            <em>From the Great Rift Valley to the Olympic podium — the Kalenjin spirit soars.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 6. Kamba –  -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/destinations/cultures/the kamba.png" class="rounded-xl shadow-2xl" height="520" cover />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="tribe-title">6. The Kamba • Akamba</h3>
          <p class="tribe-text">
            Eastern Kenya’s master craftsmen. Their wood carvings and baskets travel the world.<br>
            Skilled traders, archers, and storytellers who believe the first Kamba climbed down from the sky on a rainbow.
            <em>Beauty in their hands, hospitality in their hearts.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- 7. Swahili –  -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6">
          <v-img src="public/destinations/cultures/the swahili.png" class="rounded-xl shadow-2xl" height="520" cover />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="tribe-title">7. The Swahili • Waswahili</h3>
          <p class="tribe-text">
            Children of the Indian Ocean. A thousand years of trade, poetry, spice, and carved doors.<br>
            Their language united East Africa, their pilau feeds the soul, and their taarab music makes the heart dance.
            <em>Where Africa kisses Arabia — pure coastal magic.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- BONUS 8. Somali -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/destinations/cultures/somali.jpg" class="rounded-xl shadow-2xl" height="520" cover />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="tribe-title">8. Kenyan Somalis</h3>
          <p class="tribe-text">
            Desert poets with camel caravans and silver jewelry that shines under the moon.<br>
            Their henna art is legendary, their tea is strong, and their resilience unbreakable.
            <em>The north remembers — and it welcomes.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="custom-divider" />

      <!-- BONUS 9. Rendille -->
      <v-row class="mb-16 align-center culture-entry fade-in">
        <v-col cols="12" md="6">
          <v-img src="public/destinations/cultures/rendille.jpg" class="rounded-xl shadow-2xl" height="520" cover />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="tribe-title">9. The Rendille</h3>
          <p class="tribe-text">
            Camel warriors of the Kaisut and Chalbi deserts. They navigate by stars and follow lunar calendars.<br>
            Their silver jewelry, colourful headbands, and songs around the fire are pure desert royalty.
            <em>When others turn back, the Rendille keep walking — and singing.</em>
          </p>
        </v-col>
      </v-row>

      <div class="final-section py-20 text-center">
        <h2 class="final-title">One Kenya • Many Voices</h2>
        <p class="final-quote">
          “We are different in tongue, in dress, in dance —<br>
          but when we laugh, when we mourn, when we celebrate —<br>
          <strong>we are one.</strong>”
        </p>
        <p class="final-invite">
          Come. Eat with us. Dance with us. Belong with us.
        </p>
        <v-btn
          size="x-large"
          color="primary"
          class="mt-10 rounded-pill px-12 text-h6 font-weight-bold"
          :to="{ name: 'Hotels' }"
        >
          Book Your Cultural Journey
        </v-btn>
        <p class="karibu mt-16">Karibu Kenya • Twawapenda Sana</p>
      </div>
    </v-container>

    <!-- FOOTER  -->
    <footer class="culture-footer">
      <p class="text-h6">© 2025 Safari Guide Kenya — Celebrating 42 Tribes</p>
      <div class="contact">
        <p>+254 113 268 956 • +254 723 075 680</p>
        <p class="email">hello@safariguide.co.ke</p>
      </div>
      <p class="highlight">Harambee • We pull together</p>
    </footer>
  </div>
</template>

<style scoped>
.cultures-page {
  background: linear-gradient(to bottom, #fffaf0, #fdfd96 5%, #f5f5dc 95%);
  min-height: 100vh;
  font-family: 'Georgia', serif;
}

.nema {
  position: relative;
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
              url('/destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.8));
}

.hero-title {
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 4px;
  text-shadow: 4px 4px 20px rgba(0,0,0,0.8);
}

.hero-subtitle {
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 8px;
  margin-top: 1rem;
  opacity: 0.95;
}

.underline-elegant {
  position: relative;
  display: inline-block;
  padding-bottom: 12px;
}
.underline-elegant::after {
  content: '';
  position: absolute;
  left: 50%; bottom: 0;
  width: 180px;
  height: 5px;
  background: linear-gradient(90deg, transparent, #c19a6b, transparent);
  transform: translateX(-50%);
  border-radius: 3px;
}

.tribe-title {
  font-size: 2.8rem;
  font-weight: 900;
  color: #8B4513;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 8px rgba(0,0,0,0.1);
}

.tribe-text {
  font-size: 1.35rem;
  line-height: 2.2;
  background: rgba(255,255,255,0.92);
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(139,69,19,0.15);
}

.tribe-text em {
  display: block;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #8B4513;
  font-style: italic;
}

.custom-divider {
  height: 4px;
  background: linear-gradient(90deg, transparent, #DEB887, transparent);
  border: none;
  margin: 4rem 0;
}

.fade-in {
  animation: fadeInUp 0.9s ease-out forwards;
  opacity: 0;
  transform: translateY(40px);
}
.culture-entry:nth-child(2) { animation-delay: 0.2s; }
.culture-entry:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

.final-section {
  background: linear-gradient(rgba(255,255,255,0.7), rgba(255,248,220,0.9));
  border-radius: 30px;
  padding: 5rem 2rem;
  margin: 6rem 0;
}

.culture-footer {
  background: linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  font-family: 'Georgia', serif;
}

.culture-footer .highlight {
  font-size: 2.2rem;
  font-weight: bold;
  margin-top: 2rem;
  color: #fff59d;
}
</style>