<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const loading = ref(false);
const router = useRouter();
const showPassword = ref(false);

import { watch } from 'vue'

watch(
  () => localStorage.getItem('user'),
  (newVal) => {
    if (!newVal) {
      if (router.currentRoute.value.path !== '/') {
        router.push('/')
      }
    }
  }
)

const login = async () => {
  errorMessage.value = "";
  loading.value = true;

  try {
    const response = await axios.post(`${API_URL}/login`, {
      email: email.value.trim().toLowerCase(),
      password: password.value,
    });

    const { user, token } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    //   logout detection
    window.dispatchEvent(new Event('storage'))

    const role = user.role.trim().toLowerCase();

    if (role === "admin") {
      router.push("/admin");
    } else if (role === "hoteladmin") {
      router.push("/hotel-admin");
    } else if (role === "tourcompanyadmin") {
      router.push("/tour-admin");
    } else {
      router.push("/");
    }

  } catch (err) {
    console.error(err);
    errorMessage.value = err.response?.data?.message || "Invalid credentials";
  } finally {
    loading.value = false;
  }
}
const logout = async () => {
  try {
    await axios.post('/logout', {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  } catch (err) {  }

  localStorage.removeItem('token')
  localStorage.removeItem('user')

  window.dispatchEvent(new Event('storage'))

  router.push('/')
};
</script>
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="katheu" style="margin-top: 10vh;" elevation="16">
          <v-card-title class="text-center text-h4 font-weight-bold text-primary py-6">
            Welcome Back
          </v-card-title>

          <v-card-text class="px-8">
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email Address"
                type="email"
                variant="outlined"
                prepend-inner-icon="mdi-email"
                required
                class="mb-4"
              />

              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                variant="outlined"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                required
                class="mb-6"
              />

              <v-alert v-if="errorMessage" type="error" dense outlined class="mb-6">
                {{ errorMessage }}
              </v-alert>

              <v-btn
                type="submit"
                color="primary"
                size="x-large"
                block
                :loading="loading"
                class="mb-4 text-white font-weight-bold"
              >
                Log In
              </v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-center pb-8">
            <span class="text-body-2">
              New to Safari Guide?
              <router-link to="/signup" class="text-primary font-weight-bold">
                Create Account
              </router-link>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<style scoped>
.katheu {
  max-width: 500px;
  margin: 0 auto;
  border-radius: 20px;
  background: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.text-primary { color: #1976d2 !important; }
</style>