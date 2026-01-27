<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const loading = ref(false);
const error = ref("");

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const register = async () => {
  if (!username.value || !email.value || !password.value) {
    error.value = "All fields are required";
    return;
  }
  if (password.value !== password_confirmation.value) {
    error.value = "Passwords do not match";
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/v1/register", {
      name: username.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
      role_id: 2
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    alert("Account created successfully!");
    router.push("/");
  } catch (err) {
    error.value = err.response?.data?.message || "Registration failed. Try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="pa-8 katheu" elevation="16" rounded="xl">
          <v-card-title class="text-center text-h4 font-weight-bold mb-6">
            Create Account
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="username"
                label="Full Name"
                variant="outlined"
                prepend-inner-icon="mdi-account"
                class="mb-4"
                required
              />

              <v-text-field
                v-model="email"
                label="Email Address"
                type="email"
                variant="outlined"
                prepend-inner-icon="mdi-email"
                class="mb-4"
                required
              />

              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                variant="outlined"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                class="mb-4"
                required
              />

              <v-text-field
                v-model="password_confirmation"
                :type="showConfirmPassword ? 'text' : 'password'"
                label="Confirm Password"
                variant="outlined"
                prepend-inner-icon="mdi-lock-check"
                :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showConfirmPassword = !showConfirmPassword"
                class="mb-6"
                required
              />

              <v-alert v-if="error" type="error" class="mb-4">
                {{ error }}
              </v-alert>

              <v-btn
                type="submit"
                color="primary"
                size="x-large"
                block
                :loading="loading"
                class="mb-4"
              >
                Sign Up
              </v-btn>
            </v-form>

            <div class="text-center">
              <span class="text-body-2">Already have an account? </span>
              <router-link to="/login" class="text-primary font-weight-bold text-decoration-none">
                Log In
              </router-link>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.katheu {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>