<script setup>
import { ref } from 'vue'
</script>

<template>
  <v-container>
    <v-row>
        <v-col>
            <v-card class="katheu" style="margin-top: 10vh;">
                <v-card-title style="font-weight: bolder; font-size: 1.5em; text-align: center;">Sign Up</v-card-title>
                <v-text-field
                label="Name"
                type="text"
                required
                />
                <v-text-field
                label="email"
                type="email"
                required
                />
                <v-text-field
                label="Password"
                type="password"
                required
                />
                <v-text-field
                label="confirm password"
                type="password"
                required
                />
                <v-card-actions style="flex-direction: column; align-items: center;">
                    <v-btn color="primary" style="margin-bottom: 3px;">Confirm</v-btn>
                    <v-text style="text-align: center; margin-bottom: 2vh;">
                        Already have an account? <a href="/login">Log In</a>
                    </v-text>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.katheu {
    width: 50%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
}
.jam {
    border-color: blue;
}

.katheu {
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.7);
}
</style>