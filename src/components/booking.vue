<template>
  <v-container class="py-16">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <!-- Header -->
        <div class="text-center mb-12">
          <v-icon size="120" color="success" class="mb-4">mdi-bookmark-check</v-icon>
          <h1 class="text-h3 font-weight-bold text-success">My Bookings</h1>
          <p class="text-h6 text-grey-darken-2 mt-4">All your hotel stays and safari tours</p>
        </div>

        <div v-if="allBookings.length === 0" class="text-center py-16">
          <v-icon size="100" color="grey">mdi-bookmark-off</v-icon>
          <h3 class="text-h5 mt-6 mb-4">No bookings yet</h3>
          <p class="text-body-1 text-grey-darken-2 mb-6">Start planning your dream Kenyan safari!</p>
          <v-btn color="primary" size="large" class="mr-4" @click="$router.push('/hotels')">
            Book Hotel
          </v-btn>
          <v-btn color="orange" size="large" @click="$router.push('/tour-companies')">
            Book Tour
          </v-btn>
        </div>

        <!-- All bookings -->
        <v-row v-else>
          <v-col v-for="(booking, index) in allBookings" :key="booking.id || index" cols="12" md="6">
            <v-card elevation="12" rounded="xl" class="mb-8 h-100">
              <v-img
                :src="booking.image || 'https://picsum.photos/800/400?random=' + index"
                height="260"
                cover
                class="rounded-t-xl"
              >
                <div class="pa-4 text-end">
                  <v-chip 
                    :color="booking.type === 'tour' ? 'orange darken-3' : 'green darken-2'" 
                    dark 
                    large
                  >
                    <v-icon left>{{ booking.type === 'tour' ? 'mdi-jeep' : 'mdi-bed-king' }}</v-icon>
                    {{ booking.type === 'tour' ? 'Safari Tour' : 'Hotel Stay' }}
                  </v-chip>
                </div>
              </v-img>

              <v-card-title class="text-h5 font-weight-bold pt-6 text-primary">
                {{ booking.name }}
              </v-card-title>

              <v-card-subtitle class="text-subtitle-1 pb-2">
                 {{ booking.location || 'Kenya' }}
              </v-card-subtitle>

              <v-card-text class="pt-4">
                <!-- Hotel dates -->
                <div v-if="booking.type === 'hotel'" class="mb-6">
                  <p class="font-weight-medium">
                    <v-icon small class="mr-2">mdi-calendar-check</v-icon>
                    <strong>Check-in:</strong> {{ formatDate(booking.checkIn) }}
                  </p>
                  <p class="font-weight-medium">
                    <v-icon small class="mr-2">mdi-calendar-remove</v-icon>
                    <strong>Check-out:</strong> {{ formatDate(booking.checkOut) }}
                  </p>
                </div>

                <!-- Tour date -->
                <div v-else class="mb-6">
                  <p class="font-weight-medium">
                    <v-icon small class="mr-2">mdi-calendar-today</v-icon>
                    <strong>Tour Date:</strong> {{ formatDate(booking.tourDate) }}
                  </p>
                </div>

                <v-divider class="my-5"></v-divider>

                <div class="d-flex justify-space-between align-center mb-4">
                  <p class="mb-0">
                    <strong>Guests:</strong> {{ booking.guests || (booking.adults + booking.children) }}
                    <small class="text-grey-darken-1">
                      ({{ booking.adults }} adults, {{ booking.children || 0 }} children)
                    </small>
                  </p>
                  <p v-if="booking.rooms" class="mb-0">
                    <strong>Rooms:</strong> {{ booking.rooms }}
                  </p>
                </div>

                <p v-if="booking.requests" class="mt-3 text-grey-darken-3">
                  <strong>Special Request:</strong><br>
                  <em>"{{ booking.requests }}"</em>
                </p>

                <div class="text-center mt-8">
                  <v-chip color="success" large class="px-6">
                    <v-icon left>mdi-check-decagram</v-icon>
                    Confirmed
                  </v-chip>

                  <v-btn
                    color="error"
                    variant="tonal"
                    size="large"
                    class="ml-4"
                    @click="cancelBooking(index)"
                  >
                    <v-icon left>mdi-cancel</v-icon>
                    Cancel
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const allBookings = ref([])

watch(
  () => localStorage.getItem('lastBookings'),
  (newVal) => {
    if (newVal) {
      try {
        allBookings.value = JSON.parse(newVal)
        allBookings.value.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt))
      } catch (e) {
        allBookings.value = []
      }
    } else {
      allBookings.value = []
    }
  },
  { immediate: true }
)

// Also load on mount
onMounted(() => {
  const saved = localStorage.getItem('lastBookings')
  if (saved) {
    try {
      allBookings.value = JSON.parse(saved)
      allBookings.value.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt))
    } catch (e) {
      console.error("Failed to parse bookings:", e)
    }
  }
})

const cancelBooking = (index) => {
  if (confirm("Are you sure you want to cancel this booking?")) {
    allBookings.value.splice(index, 1)
    localStorage.setItem('lastBookings', JSON.stringify(allBookings.value))
  }
}

const formatDate = (date) => {
  if (!date) return 'Not set'
  return new Date(date).toLocaleDateString('en-KE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.text-success { color: #2e7d32 !important; }
.h-100 { height: 100%; }
</style>