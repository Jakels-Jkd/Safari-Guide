<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { Hotels } from "../router/HotelDetails.js";

const router = useRouter();

const hotels = ref(Hotels);
const searchQuery = ref("");
const selectedRegion = ref(null);
const selectedPriceRange = ref(null);
const selectedRating = ref(null);
const showFilters = ref(true);

const regions = [
  "All Regions", "Nairobi", "Mombasa", "Maasai Mara", "Amboseli", "Tsavo", 
  "Samburu", "Lake Nakuru", "Diani Beach", "Lamu", "Mount Kenya"
];

const priceRanges = [
  { text: "All Prices", value: null },
  { text: "Under KSh 10,000", value: { min: 0, max: 10000 } },
  { text: "KSh 10,000 – 25,000", value: { min: 10000, max: 25000 } },
  { text: "KSh 25,000 – 50,000", value: { min: 25000, max: 50000 } },
  { text: "KSh 50,000 – 100,000", value: { min: 50000, max: 100000 } },
  { text: "KSh 100,000+", value: { min: 100000, max: Infinity } }
];

const ratings = [
  { text: "All Ratings", value: null },
  { text: "4.0+ Very Good", value: 4.0 },
  { text: "4.5+ Wonderful", value: 4.5 },
  { text: "4.8+ Exceptional", value: 4.8 }
];

const bookingDialog = ref(false);
const showLoginPrompt = ref(false);
const selectedHotel = ref(null);
const booking = ref({
  booker_name: "",
  phone: "",
  adults: 2,
  children: 0,
  rooms: 1,
  checkIn: "",
  checkOut: "",
  requests: ""
});
const today = new Date().toISOString().split("T")[0];

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  }
});

const isLoggedIn = () => !!localStorage.getItem("token");

const openBookingDialog = (hotel) => {
  if (!isLoggedIn()) {
    showLoginPrompt.value = true;
    return;
  }
  selectedHotel.value = hotel;
  bookingDialog.value = true;
};

const confirmBooking = async () => {
  if (!selectedHotel.value) return;

  try {
    const guests = Number(booking.value.adults) + Number(booking.value.children);

    if (!booking.value.booker_name || !booking.value.phone || !booking.value.rooms) {
      alert("Please fill in your name, phone number, and number of rooms.");
      return;
    }

    await api.post("/hotel-bookings", {
      hotel_id: selectedHotel.value.id,
      booker_name: booking.value.booker_name,
      phone: booking.value.phone,
      check_in_date: booking.value.checkIn,
      check_out_date: booking.value.checkOut,
      guests: guests,
      rooms: booking.value.rooms,
      special_requests: booking.value.requests
    });

    const currentBookings = JSON.parse(localStorage.getItem('lastBookings') || '[]');
    
    const newBooking = {
      id: Date.now(),
      type: 'hotel',
      name: selectedHotel.value.name,
      location: selectedHotel.value.location,
      image: selectedHotel.value.image,
      checkIn: booking.value.checkIn,
      checkOut: booking.value.checkOut,
      adults: booking.value.adults,
      children: booking.value.children,
      guests: guests,
      rooms: booking.value.rooms,
      requests: booking.value.requests,
      price: selectedHotel.value.price,
      bookedAt: new Date().toISOString()
    };

    currentBookings.unshift(newBooking);
    localStorage.setItem('lastBookings', JSON.stringify(currentBookings));

    alert("Successfully booked " + selectedHotel.value.name + "!");
    bookingDialog.value = false;

    router.push("/userprofile");

  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Something went wrong with the booking.");
  }
};

const viewHotel = (id) => router.push({ name: "HotelItems", params: { id } });

const clearFilters = () => {
  searchQuery.value = "";
  selectedRegion.value = null;
  selectedPriceRange.value = null;
  selectedRating.value = null;
};

const toggleFilters = () => showFilters.value = !showFilters.value;

const filteredHotels = computed(() => {
  let results = [...hotels.value];

  if (searchQuery.value?.trim()) {
    const q = searchQuery.value.toLowerCase();
    results = results.filter(h =>
      h.name.toLowerCase().includes(q) ||
      h.location.toLowerCase().includes(q)
    );
  }

  if (selectedRegion.value && selectedRegion.value !== "All Regions") {
    results = results.filter(h => 
      h.location.toLowerCase().includes(selectedRegion.value.toLowerCase())
    );
  }

  if (selectedPriceRange.value) {
    results = results.filter(h => {
      const priceStr = h.price || "";
      const priceNum = parseInt(priceStr.replace(/[^\d]/g, ""), 10) || 0;
      
      return priceNum >= selectedPriceRange.value.min && 
             (selectedPriceRange.value.max === Infinity || priceNum <= selectedPriceRange.value.max);
    });
  }

  if (selectedRating.value !== null) {
    results = results.filter(h => parseFloat(h.rating) >= selectedRating.value);
  }

  return results;
});

const resultsCount = computed(() => filteredHotels.value.length);
</script>

<template>
  <v-container fluid class="hotels-page pa-0">
    <div class="section d-flex align-center justify-center">
      <div class="overlay"></div>
      <div class="text-center content">
        <h1 class="text-h3 text-md-h2 font-weight-bold white--text mb-4">
          Explore Eco-Friendly Hotels in Kenya
        </h1>
        <p class="white--text text-h6 mb-6">
          Discover the best lodges, resorts, and camps that care for nature
        </p>
        
        <v-text-field
          v-model="searchQuery"
          placeholder="Search by name, location..."
          hide-details
          solo
          flat
          rounded
          clearable
          prepend-inner-icon="mdi-magnify"
          class="search elevation-8"
        />
      </div>
    </div>

    <!-- FILTERS -->
    <v-container class="filter-section mt-6">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="filter-card pa-4 elevation-4 rounded-lg">
            <div class="d-flex align-center justify-space-between mb-3">
              <h3 class="text-h6 font-weight-bold">
                Filter Hotels
                <v-chip v-if="resultsCount !== hotels.length" class="ml-2" color="primary" size="small">
                  {{ resultsCount }} of {{ hotels.length }}
                </v-chip>
              </h3>
              <v-btn icon size="small" @click="toggleFilters">
                <v-icon>{{ showFilters ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </div>

            <v-expand-transition>
              <div v-show="showFilters">
                <v-row>
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="selectedRegion"
                      label="Region"
                      :items="regions"
                      outlined dense clearable
                      prepend-inner-icon="mdi-map-marker"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="selectedPriceRange"
                      label="Price Range"
                      :items="priceRanges"
                      item-title="text"
                      item-value="value"
                      outlined dense clearable
                      prepend-inner-icon="mdi-currency-shilling"
                      return-object
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="selectedRating"
                      label="Minimum Rating"
                      :items="ratings"
                      item-title="text"
                      item-value="value"
                      outlined dense clearable
                      prepend-inner-icon="mdi-star"
                    />
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- HOTELS GRID -->
    <v-container class="mt-6 mb-10">
      <v-row v-if="filteredHotels.length === 0" justify="center">
        <v-col cols="12" class="text-center py-16">
          <v-icon size="100" color="grey">mdi-home-search-outline</v-icon>
          <h2 class="text-h4 mt-6">No Hotels Found</h2>
          <v-btn color="primary" @click="clearFilters" class="mt-4">
            Clear Filters
          </v-btn>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col v-for="hotel in filteredHotels" :key="hotel.id" cols="12" sm="6" md="4">
          <v-card class="hotel-card h-100" elevation="8" rounded="xl">
            <v-img :src="hotel.image" height="220" cover class="hotel-image">
              <div class="image-overlay">
                <v-chip class="ma-2" color="success" size="small">
                  <v-icon start size="small">mdi-leaf</v-icon>
                  Eco-Friendly
                </v-chip>
              </div>
            </v-img>

            <v-card-title class="font-weight-bold text-h6 pt-6">
              {{ hotel.name }}
            </v-card-title>
            <v-card-subtitle>
              <v-icon size="small">mdi-map-marker</v-icon>
              {{ hotel.location }}
            </v-card-subtitle>

            <v-card-text>
              <div class="d-flex justify-space-between align-center mb-4">
                <span class="text-h6 font-weight-bold primary--text">
                  {{ hotel.price }}/night
                </span>
                <div class="d-flex align-center">
                  <v-rating
                    :model-value="parseFloat(hotel.rating)"
                    half-increments
                    readonly
                    size="small"
                    color="amber"
                  />
                  <span class="ml-2">{{ hotel.rating }}</span>
                </div>
              </div>
            </v-card-text>

            <v-card-actions class="pa-4 pt-0">
              <v-btn color="success" variant="elevated" block @click="openBookingDialog(hotel)">
                Book Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- BOOKING DIALOG -->
    <v-dialog v-model="bookingDialog" max-width="650" persistent>
      <v-card class="pa-8">
        <v-card-title class="text-h5 text-center mb-6">
          Book {{ selectedHotel?.name }}
        </v-card-title>

        <v-form @submit.prevent="confirmBooking">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="booking.booker_name"
                label="Your Name"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="booking.phone"
                label="Phone Number"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="booking.checkIn"
                label="Check-in Date"
                type="date"
                :min="today"
                required
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="booking.checkOut"
                label="Check-out Date"
                type="date"
                :min="booking.checkIn || today"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model.number="booking.adults"
                label="Adults"
                type="number"
                min="1"
                required
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model.number="booking.children"
                label="Children"
                type="number"
                min="0"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model.number="booking.rooms"
                label="Rooms"
                type="number"
                min="1"
                required
              />
            </v-col>
          </v-row>

          <v-textarea
            v-model="booking.requests"
            label="Special Requests (Optional)"
            rows="3"
            class="mb-4"
          />

          <v-btn type="submit" color="success" size="x-large" block class="mb-4">
            Confirm Booking
          </v-btn>

          <v-btn color="grey" variant="text" block @click="bookingDialog = false">
            Cancel
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showLoginPrompt" max-width="450">
      <v-card class="text-center pa-10">
        <v-icon size="90" color="warning" class="mb-6">mdi-account-lock</v-icon>
        <h2 class="text-h5 mb-4">Login Required</h2>
        <p class="mb-8">You must be logged in to book a hotel</p>
        <v-btn color="primary" size="large" class="mx-2" @click="$router.push('/login')">
          Log In
        </v-btn>
        <v-btn color="success" size="large" class="mx-2" @click="$router.push('/signup')">
          Sign Up
        </v-btn>
      </v-card>
    </v-dialog>

    <!-- FOOTER -->
    <v-footer class="text-center pa-6 bg-primary" color="primary">
      <v-container>
        <p class="white--text text-body-1">&copy; 2025 Safari Guide Kenya. All rights reserved.</p>
      </v-container>
    </v-footer>
  </v-container>
</template>

<style scoped>
.section {
  position: relative;
  background-image: url("public/Hotels/hotelspagemain.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(20, 143, 236, 0.7), rgba(31, 117, 183, 0.8));
}

.content { 
  position: relative; 
  z-index: 2; 
  max-width: 800px; 
  margin: 0 auto; 
  padding: 0 20px; 

}
.search { 
  max-width: 600px; 
  margin: 0 auto; 
}
.search :deep(.v-field) { 
  background-color: white; 
  border-radius: 50px; 
}
.search :deep(.v-field__input) { 
  padding: 20px 24px; min-height: 60px; 
}

.filter-section { 
  margin-top: -40px; 
  position: relative; 
  z-index: 3; 
}
.filter-card { 
  border-radius: 16px; background: white; 
}

.hotel-card {
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.hotel-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}
.hotel-image { position: relative; transition: transform 0.4s ease; }
.hotel-card:hover .hotel-image { transform: scale(1.05); }

.image-overlay {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 8px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent);
}
</style>
