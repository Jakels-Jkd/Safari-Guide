<script setup>
import { ref } from 'vue'
const isLoggedIn = ref(false);
</script>

<template>
    <v-container>
        <v-row>
            <v-col >
                <v-card class=" katheu" style="margin-top: 10vh;">
                    <h1 style="text-align: center; font-size: em;">Log In</h1>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="Email"
                                type="email"
                                required
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                type="password"
                                required
                            ></v-text-field>
                            <v-row justify="center" class="mt-4">
                                <v-col cols="12" class="d-flex justify-center">
                                    <v-btn 
                                        color="primary" 
                                        type="submit"
                                        class="mb-2"
                                    >Log In</v-btn>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center">
                                    <v-text class="d-block text-center">
                                        no account? please <a href="/signup">sign up</a>
                                    </v-text>
                                </v-col>
                            </v-row>
                        </v-form>
                        </v-card-text>
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
</style>