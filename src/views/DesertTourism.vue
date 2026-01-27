<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="desert-page">

    <div class="nema">
      <h2 class="title">NORTHERN KENYA</h2>
      <p class="subtitle">The Last True Wilderness</p>
    </div>

    <v-container class="py-16 px-6">
      <h1 class="display-3 text-center font-weight-black mb-16" style="text-decoration: underline overline; color:#b8860b;">
        Where the Earth Forgets to End
      </h1>

      <!-- 1. Chalbi Desert -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-amber-800">1. Chalbi Desert</h3>
          <p class="tribe-description">
            Kenya’s only true desert. <br>
            Salt pans that shimmer like snow under the moon. <br>
            Gabbra nomads who still follow ancient camel routes. <br>
            When the wind blows, the dunes sing — a low, haunting song that only the desert knows. <br>
            Here, silence has weight. The stars are so close you can hear them burn.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#8b4513" class="my-12" />

      <!-- 2. Lake Turkana -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="2">
          <v-img src="public/destinations/destinations2/Screenshot 2025-10-19 235315.png" class="rounded-xl elevation-20" height="520" cover />
        </v-col>
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-teal-800">2. Lake Turkana – The Jade Sea</h3>
          <p class="tribe-description">
            The largest desert lake on Earth. <br>
            Its waters glow turquoise against black volcanic rock. <br>
            Home to 13-foot crocodiles and the El Molo — the smallest tribe in Kenya who live on fish and stories. <br>
            This is where humanity’s oldest fossils were found. You are walking on the cradle of mankind.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#8b4513" class="my-12" />

      <!-- 3. Samburu & Shaba -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-orange-900">3. Samburu, Shaba & Kalama</h3>
          <p class="tribe-description">
            The land of the “Special Five”: Grevy’s zebra with stripes like lightning, the long-necked gerenuk, Somali ostrich, reticulated giraffe, and beisa oryx. <br>
            Red earth, doum palms, and rivers that disappear into sand. <br>
            The Samburu warriors paint their faces with ochre and dance under acacia trees older than nations.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#8b4513" class="my-12" />

      <!-- 4. Loiyangalani Oasis -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12" order-md="1">
          <h3 class="card-subtitles text-green-900">4. Loiyangalani – The Oasis</h3>
          <p class="tribe-description">
            A miracle of palm trees rising from pure desert. <br>
            Hot springs bubble next to Lake Turkana while Turkana women dance in colorful kitenge. <br>
            Every year, the Lake Turkana Cultural Festival brings 12 tribes together under one sky — singing, racing dhows, and proving the desert is alive.
          </p>
        </v-col>
      </v-row>
      <v-divider thickness="4" color="#8b4513" class="my-12" />

      <!-- 5. Suguta Valley -->
      <v-row class="d-flex align-center my-16">
        <v-col cols="12" md="12">
          <h3 class="card-subtitles text-purple-900">5. Suguta Valley – The Forgotten Place</h3>
          <p class="tribe-description">
            Kenya’s hottest, driest, most unreachable valley. <br>
            Black lava fields, pink flamingo lakes, and dunes that shift overnight. <br>
            No roads. No signal. No tourists. <br>
            Some say even the wind forgets to blow here. Only the brave come. Only the desert remembers.
          </p>
        </v-col>
      </v-row>

      <!-- FINAL MESSAGE -->
      <div class="my-20 text-center">
        <h2 class="display-1 font-weight-black mb-8" style="color:#8b0000; text-decoration: underline;">
          This Is Not Tourism
        </h2>
        <p class="text-h5 font-italic mb-10" style="color:#654321; max-width: 900px; margin: 0 auto; line-height: 2;">
          "In the desert, you do not take photos.<br>
          The desert takes something from you — and gives you something greater in return."
        </p>

        <v-btn
          size="x-large"
          color="#b8860b"
          dark
          class="rounded-pill px-12 text-h6 font-weight-bold"
          href="https://wa.me/254722000000?text=I'm ready for the Northern Kenya desert – please help me plan the journey of a lifetime"
          target="_blank"
        >
          <v-icon left>mdi-whatsapp</v-icon>
          Take Me to the Desert
        </v-btn>

        <p class="mt-16 text-h4 font-italic" style="color:#8b4513;">
          Karibu Nyika — Welcome to the Wild
        </p>
      </div>
    </v-container>

    <!-- FOOTER – Same warm style as Cultures page -->
    <div class="footer">
      <p>© 2025 Safari Guide Kenya</p>
      <div class="contact">
        <h3>For Desert Expeditions Contact Us:</h3>
        <p>+254 722 000 000 | +254 723 075 680</p>
        <p>desert@safariguide.co.ke</p>
      </div>
      <p class="highlight">The desert doesn’t call everyone.<br>But when it calls you — answer.</p>
    </div>
  </div>
</template>

<style scoped>
.desert-page {
  background: linear-gradient(to bottom, #fff8dc, #fad5a5, #f4a460);
  min-height: 100vh;
}

.nema {
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7));
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title {
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 8px;
  text-shadow: 4px 4px 20px rgba(0,0,0,0.8);
}

.subtitle {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 6px;
  margin-top: 1rem;
  opacity: 0.9;
}

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
  background: rgba(255,255,255,0.85);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  backdrop-filter: blur(4px);
}

.footer {
  background: linear-gradient(135deg, #8b4513, #d2691e, #cd853f);
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