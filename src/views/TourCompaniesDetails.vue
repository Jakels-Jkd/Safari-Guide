<script setup>
import { useRoute } from "vue-router";
import { TourCompanies } from "../router/TourCompanies.js";

const route = useRoute();
const companyId = Number(route.params.id);
const company = TourCompanies.find(c => c.id === companyId);
</script>

<template>
  <v-container fluid class="pa-0">
    <div v-if="company" class="hero-section d-flex align-center justify-center">
      <div class="overlay"></div>
      <v-img :src="company.image" height="70vh" cover />
      <div class="hero-content text-center">
        <h1 class="text-h3 text-md-h2 font-weight-black white--text mb-4">
          {{ company.name }}
        </h1>
        <p class="white--text text-h6 mb-6">{{ company.description }}</p>
        <div class="d-flex justify-center gap-6 flex-wrap">
          <v-chip color="#006400" size="x-large">
            <v-icon start>mdi-check-decagram</v-icon>
            100% Kenyan Owned
          </v-chip>
          <v-chip color="amber" size="x-large">
            <v-icon start>mdi-star</v-icon>
            {{ company.rating }} / 5.0
          </v-chip>
        </div>
      </div>
    </div>

    <v-container class="my-16">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="pa-8 rounded-xl elevation-12" v-if="company">
            <v-card-title class="text-h4 font-weight-bold text-center mb-6">
              Contact {{ company.name }} Directly
            </v-card-title>
            <v-card-text class="text-center">
              <p class="text-h6 mb-8">Real Kenyan company • Instant replies • Best prices guaranteed</p>
              <div class="d-flex justify-center gap-6 flex-wrap">
                <v-btn 
                  size="x-large" 
                  color="#25D366" 
                  class="px-10"
                  :href="`https://wa.me/254722000000?text=Habari!%20I'm%20interested%20in%20your%20safari%20packages%20-%20${encodeURIComponent(company.name)}`"
                  target="_blank"
                >
                  <v-icon start size="32">mdi-whatsapp</v-icon>
                  WhatsApp Now
                </v-btn>
                <v-btn size="x-large" color="primary" to="/contactus" class="px-10">
                  Send Inquiry
                </v-btn>
              </div>
            </v-card-text>
          </v-card>

          <div v-else class="text-center py-16">
            <v-icon size="100" color="grey">mdi-alert</v-icon>
            <h2 class="text-h4 mt-6">Company Not Found</h2>
            <v-btn color="primary" to="/tour-companies" class="mt-6">Back to List</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.hero-section { position: relative; min-height: 70vh; }
.overlay { 
  position: absolute; inset: 0; 
  background: linear-gradient(135deg, rgba(0,100,0,0.8), rgba(139,69,19,0.8));
}
.hero-content { position: relative; z-index: 2; max-width: 900px; padding: 0 20px; }
</style>