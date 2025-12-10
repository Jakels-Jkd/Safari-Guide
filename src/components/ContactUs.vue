<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  destination: '',
  travelers: '2',
  message: '',
  preferredContact: 'whatsapp'
})

const sending = ref(false)
const snackbar = ref({ show: false, message: '', color: 'success' })

const destinations = [
  'Maasai Mara',
  'Amboseli',
  'Tsavo',
  'Samburu',
  'Watamu Marine',
  'Lamu',
  'Diani Beach',
  'Lake Nakuru',
  'Mount Kenya',
  'Custom Safari'
]

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    snackbar.value = { show: true, message: 'Please fill all required fields', color: 'error' }
    return
  }

  sending.value = true
  await new Promise(r => setTimeout(r, 1500))

  snackbar.value = { show: true, message: 'Message sent! We reply in minutes on WhatsApp', color: 'success' }
  sending.value = false

  form.value = {
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '2',
    message: '',
    preferredContact: 'whatsapp'
  }
}
</script>

<template>
  <div class="relative overflow-hidden">
    <v-parallax
    style="background-color: goldenrod;"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      <v-container class="h-full flex items-center justify-center text-center text-white relative z-10">
        <div>
          <h1 class="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight">
            Let's Plan Your<br>
            <span class="text-orange-400 drop-shadow-2xl">Dream Safari</span>
          </h1>
          <p class="text-2xl sm:text-3xl md:text-4xl mt-8 font-light tracking-wider">
            24/7 • Real Kenyan Guides • Fast Replies
          </p>

          <div class="mt-12 flex flex-wrap gap-8 justify-center">
            <div class="bg-white/20 backdrop-blur-lg rounded-full px-10 py-6 flex items-center gap-5 border border-white/30">
              <v-icon size="60" color="#25D366">mdi-whatsapp</v-icon>
              <span class="font-black text-2xl">+254 712 345 678</span>
            </div>
            <div class="bg-white/20 backdrop-blur-lg rounded-full px-10 py-6 flex items-center gap-5 border border-white/30">
              <v-icon size="60" color="#E74C3C">mdi-gmail</v-icon>
              <span class="font-black text-2xl">hello@safariguide.co.ke</span>
            </div>
          </div>
        </div>
      </v-container>
    </v-parallax>
  </div>

  <v-container class="py-16 max-w-7xl">
    <v-row class="g-6"> 
      <v-col cols="12" lg="8">
        <v-card class="pa-10 rounded-3xl shadow-2xl" color="#E8DAB2" elevation="20">
          <h2 class="text-5xl md:text-6xl font-black mb-10 text-[#2E1A0F] text-center">
            Send Us a Message
          </h2>

          <v-form @submit.prevent="submitForm">
            <v-row class="g-6">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.name"
                  label="Full Name *"
                  variant="outlined"
                  bg-color="white"
                  class="text-2xl"
                  density="comfortable"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  label="Email Address *"
                  type="email"
                  variant="outlined"
                  bg-color="white"
                  class="text-2xl"
                  density="comfortable"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.phone"
                  label="Phone (Optional)"
                  variant="outlined"
                  bg-color="white"
                  placeholder="+254 700 000 000"
                  class="text-2xl"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="form.destination"
                  :items="destinations"
                  label="Dream Destination"
                  variant="outlined"
                  bg-color="white"
                  class="text-2xl"
                />
              </v-col>

              <v-col cols="12">
                <p class="text-3xl font-bold mb-4 text-[#2E1A0F]">How should we contact you?</p>
                <v-radio-group v-model="form.preferredContact" inline class="mt-4">
                  <v-radio label="WhatsApp" value="whatsapp">
                    <template v-slot:label>
                      <span class="text-2xl font-bold flex items-center gap-3">
                        <v-icon color="#25D366" size="40">mdi-whatsapp</v-icon> WhatsApp
                      </span>
                    </template>
                  </v-radio>
                  <v-radio label="Email" value="email" class="ml-8">
                    <template v-slot:label>
                      <span class="text-2xl font-bold">Email</span>
                    </template>
                  </v-radio>
                  <v-radio label="Call" value="call" class="ml-8">
                    <template v-slot:label>
                      <span class="text-2xl font-bold">Phone Call</span>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="form.message"
                  label="Tell us about your dream trip *"
                  rows="6"
                  variant="outlined"
                  bg-color="white"
                  placeholder="When are you traveling? How many people? Any special wishes?"
                  class="text-xl"
                  required
                />
              </v-col>

              <v-col cols="12" class="text-center">
                <v-btn
                  :loading="sending"
                  type="submit"
                  size="x-large"
                  block
                  height="80"
                  class="text-3xl font-black rounded-3xl shadow-2xl"
                  color="#C14D2B"
                >
                  <v-icon start size="50">mdi-send</v-icon>
                  SEND MESSAGE NOW
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>

      <!-- RIGHT: INFO CARDS — SUPER CLOSE TO FORM -->
      <v-col cols="12" lg="4">
        <div class="space-y-6">
          <v-card class="pa-10 text-center rounded-3xl shadow-2xl" color="#0F1E0F">
            <v-icon size="100" color="#FFB74D" class="mb-4">mdi-clock-fast</v-icon>
            <h3 class="text-5xl font-black text-white">15 Min</h3>
            <p class="text-3xl text-orange-300 mt-3">Reply Guaranteed</p>
            <p class="text-2xl text-green-200 mt-2">24 Hours a Day</p>
          </v-card>

          <v-card class="pa-10 rounded-3xl shadow-2xl" color="#E8DAB2">
            <h3 class="text-5xl font-black mb-10 text-[#2E1A0F]">Get In Touch</h3>
            <div class="space-y-8 text-2xl font-bold">
              <div class="flex items-center gap-5">
                <v-icon size="55" color="#25D366">mdi-whatsapp</v-icon>
                <div>+254 712 345 678</div>
              </div>
              <div class="flex items-center gap-5">
                <v-icon size="55" color="#E74C3C">mdi-email</v-icon>
                <div>hello@safariguide.co.ke</div>
              </div>
              <div class="flex items-center gap-5">
                <v-icon size="55" color="#1877F2">mdi-facebook</v-icon>
                <div>/SafariGuideKenya</div>
              </div>
            </div>
          </v-card>

          <v-card class="pa-10 text-center rounded-3xl shadow-2xl" color="#2E8B8B">
            <v-icon size="100" color="white" class="mb-4">mdi-map-marker-radius</v-icon>
            <h3 class="text-5xl font-black text-white">Nairobi</h3>
            <p class="text-3xl text-cyan-100 mt-3">Kenya</p>
            <p class="text-2xl text-white/90 mt-2">100% Local</p>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- SNACKBAR -->
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    timeout="6000"
    location="top"
    class="text-2xl font-bold"
    rounded="pill"
  >
    {{ snackbar.message }}
    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar.show = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.v-application {
  background: linear-gradient(to bottom, #F5E6D3, #E8DAB2) !important;
}

@media (max-width: 960px) {
  .v-parallax__image {
    transform: translateY(-20%) !important;
  }
}
</style>