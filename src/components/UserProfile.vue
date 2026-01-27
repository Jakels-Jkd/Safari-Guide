<template>
  <div class="profile-page">

    <div class="page">
      <v-avatar size="140" class="avatar-border">
        <v-img :src="userAvatar" alt="Profile">
          <template v-slot:placeholder>
            <v-icon size="80" color="grey lighten-2">mdi-account</v-icon>
          </template>
        </v-img>
      </v-avatar>
      <h1 class="name">{{ user.name || 'Traveler' }}</h1>
      <p class="email">{{ user.email }}</p>
    </div>

    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-card class="mb-12 pa-8" elevation="12" rounded="xl">
            <v-card-title class="text-h4 font-weight-bold text-primary mb-6">
              <v-icon left color="primary">mdi-account-circle</v-icon>
              Profile Information
            </v-card-title>

            <v-list lines="two">
              <v-list-item>
                <v-list-item-title class="font-weight-medium">Full Name</v-list-item-title>
                <v-list-item-subtitle class="text-h6">{{ user.name || 'Not set' }}</v-list-item-subtitle>
              </v-list-item>
              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-title class="font-weight-medium">Email Address</v-list-item-title>
                <v-list-item-subtitle class="text-h6">{{ user.email }}</v-list-item-subtitle>
              </v-list-item>
              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-title class="font-weight-medium">Member Since</v-list-item-title>
                <v-list-item-subtitle class="text-h6">
                  {{ formatDate(user.created_at || new Date()) }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-title class="font-weight-medium">Total Bookings</v-list-item-title>
                <v-list-item-subtitle class="text-h6 text-success">
                  <v-icon left color="success">mdi-check-circle</v-icon>
                  {{ allBookings.length }} confirmed
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <div class="text-center mt-8">
              <v-btn color="primary" size="large" @click="editProfile = true">
                <v-icon left>mdi-pencil</v-icon>
                Edit Profile
              </v-btn>
              <v-btn color="error" size="large" class="ml-4" @click="logout">
                <v-icon left>mdi-logout</v-icon>
                Logout
              </v-btn>
            </div>
          </v-card>

          <!-- MY BOOKINGS WITH CANCEL BUTTONS -->
          <v-card class="mb-12" elevation="12" rounded="xl">
            <v-card-title class="text-h4 font-weight-bold text-orange-darken-2 pa-8">
              <v-icon left size="40" color="orange darken-2">mdi-bookmark-multiple</v-icon>
              My Recent Bookings
            </v-card-title>

            <v-card-text v-if="allBookings.length === 0" class="text-center py-16">
              <v-icon size="100" color="grey lighten-2">mdi-bookmark-off</v-icon>
              <p class="text-h6 mt-6 text-grey-darken-2">No bookings yet</p>
              <v-btn color="primary" large to="/hotels" class="mt-4">
                Start Exploring
              </v-btn>
            </v-card-text>

            <v-row v-else class="pa-4">
              <v-col v-for="(b, i) in allBookings.slice(0, 6)" :key="i" cols="12" sm="6" lg="4">
                <v-card class="h-100 d-flex flex-column">
                  <v-img
                    :src="b.image || 'https://picsum.photos/400/200?random=' + i"
                    height="160"
                    cover
                    class="rounded-t-lg"
                  >
                    <v-chip
                      :color="b.type === 'tour' ? 'orange' : 'green'"
                      dark
                      small
                      class="ma-2"
                    >
                      {{ b.type === 'tour' ? 'Safari Tour' : 'Hotel Stay' }}
                    </v-chip>
                  </v-img>

                  <v-card-subtitle class="pt-4 text-subtitle-1 font-weight-bold">
                    {{ b.name }}
                  </v-card-subtitle>

                  <v-card-text class="flex-grow-1">
                    <p class="text-caption text-grey-darken-3">
                      {{ b.type === 'hotel' 
                        ? formatDate(b.checkIn) + ' → ' + formatDate(b.checkOut)
                        : formatDate(b.tourDate) 
                      }}
                    </p>
                    <p class="text-caption">
                      <strong>Guests:</strong> {{ b.guests || (b.adults + (b.children || 0)) }}
                    </p>
                  </v-card-text>

                  <!-- CANCEL BUTTON INSIDE EACH BOOKING CARD -->
                  <v-card-actions class="pa-4 pt-0">
                    <v-spacer></v-spacer>
                    <v-btn
                      color="error"
                      variant="text"
                      size="small"
                      @click="cancelBooking(i)"
                    >
                      <v-icon left small>mdi-cancel</v-icon>
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <div class="text-center pa-6" v-if="allBookings.length > 6">
              <v-btn color="primary" large to="/bookings">
                View All Bookings ({{ allBookings.length }})
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-card>

        </v-col>
      </v-row>
    </v-container>

    <!-- EDIT PROFILE DIALOG -->
    <v-dialog v-model="editProfile" max-width="500">
      <v-card class="pa-6">
        <v-card-title class="text-h5">Update Profile</v-card-title>
        <v-text-field
          v-model="editName"
          label="Full Name"
          prepend-icon="mdi-account"
          class="mb-4"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="editProfile = false">Cancel</v-btn>
          <v-btn color="primary" @click="saveProfile">Save Changes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({})
const allBookings = ref([])
const editProfile = ref(false)
const editName = ref('')

const userAvatar = computed(() => {
  return user.value.name
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.value.name)}&background=1976d2&color=fff&size=256&bold=true`
    : 'https://ui-avatars.com/api/?name=User&background=666&color=fff&size=256'
})

onMounted(() => {
  const savedUser = localStorage.getItem('user')
  const savedBookings = localStorage.getItem('lastBookings')

  if (savedUser) {
    user.value = JSON.parse(savedUser)
    editName.value = user.value.name || ''
  }

  if (savedBookings) {
    allBookings.value = JSON.parse(savedBookings)
    sortBookings()
  }
})

watch(
  () => localStorage.getItem('lastBookings'),
  () => {
    const saved = localStorage.getItem('lastBookings')
    if (saved) {
      allBookings.value = JSON.parse(saved)
      sortBookings()
    }
  }
)

const sortBookings = () => {
  allBookings.value.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt))
}

const cancelBooking = (index) => {
  const booking = allBookings.value[index]
  const type = booking.type === 'tour' ? 'tour' : 'hotel stay'

  if (confirm(`Cancel your ${type} at "${booking.name}"?`)) {
    allBookings.value.splice(index, 1)
    localStorage.setItem('lastBookings', JSON.stringify(allBookings.value))
    alert('Booking cancelled!')
  }
}

const saveProfile = () => {
  user.value.name = editName.value
  localStorage.setItem('user', JSON.stringify(user.value))
  editProfile.value = false
  alert('Profile updated!')
}

const logout = () => {
  if (confirm('Logout now?')) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }
}

const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.profile-page {
  background: linear-gradient(to bottom, #f8fafc, #e2e8f0);
  min-height: 100vh;
}

.page {
  position: relative;
  height: 60vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
              url('public/profile-bg.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.avatar-border {
  border: 8px solid rgba(255,255,255,0.3);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.name {
  font-size: 3.5rem;
  font-weight: 900;
  margin-top: 1.5rem;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.8);
}

.email {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-top: 0.5rem;
}

.h-100 { height: 100%; }
</style>