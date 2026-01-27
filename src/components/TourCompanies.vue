<script>
import { TourCompanies } from "../router/TourCompanies.js";
import axios from "axios";

export default {
  data() {
    return {
      companies: TourCompanies,
      searchQuery: "",
      selectedRegion: null,
      selectedPriceRange: null,
      selectedRating: null,
      regions: ["All Regions", "Nairobi", "Mombasa", "Maasai Mara", "Amboseli", "Tsavo", "Samburu", "Laikipia", "Diani", "Lamu"],
      priceRanges: [
        { text: "All Prices", value: null },
        { text: "Under $ 40,000", value: { min: 0, max: 40000 } },
        { text: "$ 400 – 1000", value: { min: 400, max: 1000 } },
        { text: "$ 1000 – 2000", value: { min: 1000, max: 2000 } },
        { text: "$ 2000+", value: { min: 2000, max: Infinity } }
      ],
      ratings: [
        { text: "All Ratings", value: null },
        { text: "4.0+ Very Good", value: 4.0 },
        { text: "4.5+ Wonderful", value: 4.5 },
        { text: "4.8+ Exceptional", value: 4.8 }
      ],
      showFilters: true,

      bookingDialog: false,
      loginPrompt: false,
      selectedCompany: null,
      bookingForm: {
        date: "",
        adults: 2,
        children: 0,
        requests: ""
      },
      today: new Date().toISOString().split("T")[0],
      bookingLoading: false
    };
  },
  computed: {
    filteredCompanies() {
      let results = [...this.companies];

      if (this.searchQuery?.trim()) {
        const q = this.searchQuery.toLowerCase();
        results = results.filter(c =>
          c.name.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q) ||
          (c.description && c.description.toLowerCase().includes(q))
        );
      }

      if (this.selectedRegion && this.selectedRegion !== "All Regions") {
        results = results.filter(c => 
          c.location.toLowerCase().includes(this.selectedRegion.toLowerCase())
        );
      }

      if (this.selectedPriceRange) {
        results = results.filter(c => {
          const price = this.extractPrice(c.price);
          return price >= this.selectedPriceRange.min && 
                 (this.selectedPriceRange.max === Infinity || price <= this.selectedPriceRange.max);
        });
      }

      if (this.selectedRating !== null) {
        results = results.filter(c => parseFloat(c.rating) >= this.selectedRating);
      }

      return results;
    },
    resultsCount() {
      return this.filteredCompanies.length;
    }
  },
  methods: {
    viewCompany(id) {
      this.$router.push({ name: "TourCompanyDetails", params: { id } });
    },
    extractPrice(priceString) {
      const match = priceString.match(/\d+/);
      return match ? parseInt(match[0]) : 0;
    },
    clearFilters() {
      this.searchQuery = "";
      this.selectedRegion = null;
      this.selectedPriceRange = null;
      this.selectedRating = null;
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },

    openBookingDialog(company) {
      if (!localStorage.getItem("token")) {
        this.loginPrompt = true;
        return;
      }
      this.selectedCompany = company;
      this.bookingForm = { date: "", adults: 2, children: 0, requests: "" };
      this.bookingDialog = true;
    },

    async confirmBooking() {
      this.bookingLoading = true;

      try {
        await axios.post("http://127.0.0.1:8000/api/v1/tour-bookings", {
          tour_company_id: this.selectedCompany.id,
          tour_date: this.bookingForm.date,
          guests: Number(this.bookingForm.adults) + Number(this.bookingForm.children),
          special_requests: this.bookingForm.requests || null,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        const allBookings = JSON.parse(localStorage.getItem('lastBookings') || '[]');
        allBookings.unshift({
          type: 'tour',
          name: this.selectedCompany.name,
          location: this.selectedCompany.location,
          image: this.selectedCompany.image,
          tourDate: this.bookingForm.date,
          adults: Number(this.bookingForm.adults),
          children: Number(this.bookingForm.children),
          guests: Number(this.bookingForm.adults) + Number(this.bookingForm.children),
          requests: this.bookingForm.requests,
          bookedAt: new Date().toISOString()
        });
        localStorage.setItem('lastBookings', JSON.stringify(allBookings));

        localStorage.setItem("lastBooking", JSON.stringify({
          type: 'tour',
          companyName: this.selectedCompany.name,
          companyImage: this.selectedCompany.image,
          tourDate: this.bookingForm.date,
          adults: Number(this.bookingForm.adults),
          children: Number(this.bookingForm.children),
          guests: Number(this.bookingForm.adults) + Number(this.bookingForm.children),
          requests: this.bookingForm.requests
        }));

        this.bookingDialog = false;
        this.$router.push("/userprofile");

      } catch (err) {
        alert("Booking failed: " + (err.response?.data?.message || "Try again"));
      } finally {
        this.bookingLoading = false;
      }
    }
  }
};
</script>

<template>
  <v-container fluid class="tour-companies-page pa-0 bg-gray-50 min-h-screen">
    <div class="section d-flex align-center justify-center relative">
      <div class="overlay"></div>
      <div class="text-center content relative z-10">
        <h1 class="text-h3 text-md-h2 font-weight-bold white--text mb-4">
          Kenyan Safari Companies
        </h1>
        <p class="white--text text-h6 mb-6">
          Discover trusted, locally owned tour operators across Kenya
        </p>
        
        <v-text-field
          v-model="searchQuery"
          placeholder="Search by company name, location..."
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
    <v-container class="filter-section mt-n12 relative z-10">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="filter-card pa-4 elevation-4 rounded-lg bg-white">
            <div class="d-flex align-center justify-space-between mb-3">
              <div>
                <h3 class="text-h6 font-weight-bold">
                  Filter Companies
                  <v-chip v-if="resultsCount !== companies.length" class="ml-2" color="primary" size="small">
                    {{ resultsCount }} of {{ companies.length }}
                  </v-chip>
                </h3>
              </div>
              <div>
                <v-btn v-if="hasActiveFilters" color="error" variant="text" size="small" @click="clearFilters">
                  Clear Filters
                </v-btn>
                <v-btn icon size="small" @click="toggleFilters" class="ml-2">
                  <v-icon>{{ showFilters ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </div>
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
                      prepend-inner-icon="mdi-currency-kes"
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

    <v-container class="mt-6 mb-16">
      <v-row v-if="filteredCompanies.length === 0" justify="center">
        <v-col cols="12" md="6" class="text-center py-10">
          <v-icon size="80" color="grey">mdi-magnify-close</v-icon>
          <h3 class="text-h5 mt-4 mb-2">No Companies Found</h3>
          <p class="text-body-1 text-grey">Try adjusting your filters</p>
          <v-btn color="primary" variant="outlined" class="mt-4" @click="clearFilters">
            Clear All Filters
          </v-btn>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col v-for="company in filteredCompanies" :key="company.id" cols="12" sm="6" md="4" lg="3">
          <v-card class="tour-company-card h-100" elevation="3" rounded="lg">
            <v-img :src="company.image" height="200px" cover class="tour-image">
              <div class="image-overlay">
                <v-chip class="ma-2" color="success" size="small">
                  <v-icon start size="small">mdi-check-decagram</v-icon>
                  Kenyan Owned
                </v-chip>
              </div>
            </v-img>
            
            <v-card-title class="font-weight-bold pa-4">
              {{ company.name }}
            </v-card-title>
            
            <v-card-subtitle class="grey--text pa-4 pb-2">
              <v-icon size="small">mdi-map-marker</v-icon>
              {{ company.location }}
            </v-card-subtitle>
            
            <v-card-text class="pa-4 pt-0">
              <p class="text-body-2 text-grey-darken-1 mb-4 line-clamp-2">
                {{ company.description }}
              </p>
              <div class="d-flex align-center justify-space-between">
                <div class="price-tag">
                  <v-icon size="small" color="primary">mdi-currency-kes</v-icon>
                  <span class="font-weight-bold text-h6">{{ company.price }}</span>
                </div>
                <div class="rating-tag">
                  <v-rating
                    :model-value="company.rating"
                    color="amber"
                    readonly
                    size="small"
                  />
                  <span class="ml-1 text-caption">{{ company.rating }}</span>
                </div>
              </div>
            </v-card-text>
            

            
            <v-card-actions class="pa-4 pt-0">
              <v-btn
                color="success"
                variant="elevated"
                block
                class="text-white font-weight-bold"
                @click="openBookingDialog(company)"
              >
                Book Tour Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="bookingDialog" max-width="600">
      <v-card class="pa-8">
        <v-card-title class="text-h5 text-center mb-6">
          Book Tour: {{ selectedCompany?.name }}
        </v-card-title>

        <v-form @submit.prevent="confirmBooking">
          <v-text-field
            v-model="bookingForm.date"
            label="Tour Date"
            type="date"
            :min="today"
            required
            class="mb-4"
          />

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model.number="bookingForm.adults"
                label="Adults"
                type="number"
                min="1"
                required
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model.number="bookingForm.children"
                label="Children"
                type="number"
                min="0"
              />
            </v-col>
          </v-row>

          <v-textarea
            v-model="bookingForm.requests"
            label="Special Requests (Optional)"
            rows="3"
            class="my-4"
          />

          <v-btn
            type="submit"
            color="success"
            size="x-large"
            block
            :loading="bookingLoading"
            class="text-white"
          >
            Confirm Booking
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="loginPrompt" max-width="450">
      <v-card class="text-center pa-10">
        <v-icon size="90" color="warning" class="mb-6">mdi-account-lock</v-icon>
        <h2 class="text-h5 mb-4">Login Required</h2>
        <p class="mb-8">You must be logged in to make a booking</p>
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
.tour-companies-page { 
  background: #f8f9fa; }
.section {
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7));
  min-height: 60vh;
}
.overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(34,197,94,0.8), rgba(16,185,129,0.6));
}
.content { 
  z-index: 2; 
  max-width: 800px; 
  margin: 0 auto; 
  padding: 0 20px; }
.page-search { 
  max-width: 600px; 
  margin: 0 auto; }
.search {
  background: white !important;
  border-radius: 50px !important;
}
.page-search :deep(.v-field__input) { min-height: 60px;
   padding: 20px 24px; }

.filter-section { 
  margin-top: -40px; 
  position: relative; 
  z-index: 10; 
}
.filter-card { 
  background: white; 
  border-radius: 16px; 
}

.tour-company-card {
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.tour-company-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}
.tour-image { 
  transition: transform 0.4s ease; 
}
.tour-company-card:hover .tour-image {
   transform: scale(1.05); 
  }
.image-overlay {
  position: absolute; top: 0; left: 0; right: 0;
  padding: 8px; 
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent);
}
.price-tag, .rating-tag { 
  display: flex; 
  align-items: center; 
  gap: 4px; }

.line-clamp-2 {
  overflow: hidden;
}



.tour-company-card { animation: fadeInUp 0.5s ease forwards; }

</style>