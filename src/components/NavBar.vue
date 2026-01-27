<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)
const isLoggedIn = ref(false)
const userName = ref('')

const initials = computed(() => {
  if (!userName.value) return '??'
  return userName.value
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const updateLoginStatus = () => {
  const token = localStorage.getItem('token')
  const savedUser = localStorage.getItem('user')

  if (token && savedUser) {
    isLoggedIn.value = true
    try {
      const user = JSON.parse(savedUser)
      userName.value = user.name || user.email.split('@')[0] || 'User'
    } catch {
      userName.value = 'User'
    }
  } else {
    isLoggedIn.value = false
    userName.value = ''
  }
}

onMounted(() => {
  updateLoginStatus()
  window.addEventListener('storage', updateLoginStatus)
})

const logout = () => {
  if (confirm('Are you sure you want to log out?')) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('lastBookings') 
    updateLoginStatus()
    router.push('/')
  }
}
</script>

<template>
  <v-app-bar elevate-on-scroll color="#f2dfdf" height="64">
    <div class="logo-title">
      <v-img
        src="public/icon/tourism.png"
        width="40"
        height="40"
        class="logo-img"
        cover
      />
      <span class="app-title">| Safari Guide</span>
    </div>

    <v-spacer />

    <div class="hidden-sm-and-down">
      <v-btn variant="plain" color="black" to="/">Home</v-btn>
      <v-btn variant="plain" color="black" to="/destinations">Destinations</v-btn>
      <v-btn variant="plain" color="black" to="/hotels">Hotels</v-btn>
      <v-btn variant="plain" color="black" to="/tourcompanies">Tour Companies</v-btn>
      <v-btn variant="plain" color="black" to="/travelblog">Travel Blog</v-btn>
      <v-btn variant="plain" color="black" to="/contactus">Contact us</v-btn>
      <v-btn variant="plain" color="black" to="userprofile">user profile</v-btn>
    </div>

    <div class="d-flex align-center">
      <div v-if="isLoggedIn" class="d-flex align-center mx-4">
        <span class="mr-4 text-body-1 font-weight-medium">
          Hello, {{ userName || 'User' }}
        </span>
        <v-btn variant="elevated" color="error" @click="logout" class="px-6">
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </div>

      <v-btn v-else variant="elevated" color="primary" to="/login" class="mx-6 px-6">
        <v-icon left>mdi-login</v-icon>
        Log In
      </v-btn>

      <v-avatar color="primary" size="44">
        <span class="white--text text-h6 font-weight-bold">{{ initials }}</span>
      </v-avatar>
    </div>

    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list>
      <v-list-item to="/">Home</v-list-item>
      <v-list-item to="/destinations">Destinations</v-list-item>
      <v-list-item to="/hotels">Hotels</v-list-item>
      <v-list-item to="/tourcompanies">Tour Companies</v-list-item>
      <v-list-item to="/travelblog">Travel Blog</v-list-item>
      <v-list-item to="/contactus">Contact us</v-list-item>
      <v-list-item to="/faqs">FAQs</v-list-item>

      <v-divider class="my-4"></v-divider>

      <v-list-item v-if="isLoggedIn" @click="logout" class="error--text">
        <v-icon left>mdi-logout</v-icon>
        Logout ({{ userName || 'User' }})
      </v-list-item>

      <v-list-item v-else to="/login">
        <v-icon left>mdi-login</v-icon>
        Log In
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.logo-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 8px;
}

.logo-img {
  border-radius: 8px;
}

.app-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
}
</style>