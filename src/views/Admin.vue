<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const API_URL = 'http://127.0.0.1:8000/api/v1'

const users = ref([])
const showAddDialog = ref(false)
const showEditDialog = ref(false)
const loading = ref(false)
const showPass = ref(false)
const showPassConfirm = ref(false)

const newUser = ref({
  name: '', email: '', password: '', password_confirmation: '', role: 'user'
})

const editUser = ref({
  id: null, name: '', email: '', role: 'user'
})

const currentUser = ref(JSON.parse(localStorage.getItem('user') || '{}'))
const isAdmin = computed(() => currentUser.value?.role === 'admin')

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
})

const fetchUsers = async () => {
  if (!isAdmin.value) return
  try {
    const res = await api.get('/users')
    users.value = res.data.data || res.data
  } catch (err) {
    alert('Failed to load users')
    console.error(err)
  }
}

const addUser = async () => {
  if (newUser.value.password !== newUser.value.password_confirmation) {
    alert("Passwords do not match")
    return
  }
  loading.value = true
  try {
    await api.post('/register', {
      name: newUser.value.name,
      email: newUser.value.email,
      password: newUser.value.password,
      password_confirmation: newUser.value.password_confirmation,
      role: newUser.value.role
    })
    alert("User created!")
    showAddDialog.value = false
    newUser.value = { name: '', email: '', password: '', password_confirmation: '', role: 'user' }
    await fetchUsers()
  } catch (err) {
    alert(err.response?.data?.message || "Failed")
  } finally {
    loading.value = false
  }
}

const openEditDialog = (user) => {
  editUser.value = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  }
  showEditDialog.value = true
}

const updateUser = async () => {
  loading.value = true
  try {
    await api.put(`/users/${editUser.value.id}`, {
      name: editUser.value.name,
      email: editUser.value.email,
      role: editUser.value.role
    })
    alert("User updated successfully!")
    showEditDialog.value = false
    await fetchUsers()
  } catch (err) {
    alert(err.response?.data?.message || "Failed to update user")
  } finally {
    loading.value = false
  }
}

const deleteUser = async (id, name) => {
  if (!confirm(`Delete user "${name}" permanently?`)) return
  try {
    await api.delete(`/users/${id}`)
    alert("User deleted")
    await fetchUsers()
  } catch (err) {
    alert("Failed to delete user")
  }
}

const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

onMounted(() => {
  if (isAdmin.value) fetchUsers()
})
</script>

<template>
  <div v-if="isAdmin" class="admin-page">
    <div class="page">
      <div class="overlay"></div>
      <div class="content text-center">
        <h1 class="title">Admin Panel</h1>
        <p class="subtitle">User Management of Safari Guide Kenya</p>
      </div>
    </div>

    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- ADD USER BUTTON -->
          <div class="text-right mb-6">
            <v-btn color="primary" size="x-large" @click="showAddDialog = true" class="font-weight-bold">
              <v-icon left>mdi-account-plus</v-icon>
              Add New User
            </v-btn>
          </div>

          <!-- USERS TABLE -->
          <v-card elevation="12" rounded="xl">
            <v-card-title class="text-h4 font-weight-bold pa-6">
              All Users ({{ users.length }})
            </v-card-title>

            <v-table density="comfortable">
              <thead>
                <tr>
                  <th class="text-left text-h6">Name</th>
                  <th class="text-left text-h6">Email</th>
                  <th class="text-left text-h6">Role</th>
                  <th class="text-left text-h6">Joined</th>
                  <th class="text-left text-h6">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id" class="hover-row">
                  <td class="font-weight-medium">{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    <v-chip 
                      :color="user.role === 'admin' ? 'red' : user.role === 'hoteladmin' ? 'orange' : user.role === 'tourcompanyadmin' ? 'purple' : 'green'"
                      small
                    >
                      {{ user.role }}
                    </v-chip>
                  </td>
                  <td>{{ formatDate(user.created_at) }}</td>
                  <td class="d-flex gap-2">
                    <!-- EDIT BUTTON -->
                    <v-btn 
                      color="primary" 
                      size="small" 
                      variant="tonal"
                      @click="openEditDialog(user)"
                    >
                      <v-icon small>mdi-pencil</v-icon>
                      Edit
                    </v-btn>
                    <!-- DELETE BUTTON -->
                    <v-btn 
                      color="error" 
                      size="small" 
                      variant="tonal"
                      @click="deleteUser(user.id, user.name)"
                    >
                      <v-icon small>mdi-delete</v-icon>
                      Delete
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- ADD USER DIALOG -->
    <v-dialog v-model="showAddDialog" max-width="600">
      <v-card class="pa-6">
        <v-card-title class="text-h5 font-weight-bold text-center mb-6">
          Add New User
        </v-card-title>
        <v-form @submit.prevent="addUser">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="newUser.name" label="Full Name" variant="outlined" prepend-inner-icon="mdi-account" required />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="newUser.email" label="Email Address" type="email" variant="outlined" prepend-inner-icon="mdi-email" required />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="newUser.password"
                :type="showPass ? 'text' : 'password'"
                label="Password"
                variant="outlined"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPass = !showPass"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="newUser.password_confirmation"
                :type="showPassConfirm ? 'text' : 'password'"
                label="Confirm Password"
                variant="outlined"
                prepend-inner-icon="mdi-lock-check"
                :append-inner-icon="showPassConfirm ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassConfirm = !showPassConfirm"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="newUser.role"
                :items="['user', 'admin',]"
                label="User Role"
                variant="outlined"
                prepend-inner-icon="mdi-shield-account"
              />
            </v-col>
          </v-row>

          <v-card-actions class="mt-6">
            <v-spacer></v-spacer>
            <v-btn color="grey" variant="text" @click="showAddDialog = false">Cancel</v-btn>
            <v-btn color="primary" type="submit" :loading="loading" size="large">
              <v-icon left>mdi-account-plus</v-icon>
              Create User
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <!-- EDIT USER DIALOG (NEW) -->
    <v-dialog v-model="showEditDialog" max-width="600">
      <v-card class="pa-6">
        <v-card-title class="text-h5 font-weight-bold text-center mb-6">
          Edit User: {{ editUser.name }}
        </v-card-title>
        <v-form @submit.prevent="updateUser">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="editUser.name" label="Full Name" variant="outlined" prepend-inner-icon="mdi-account" required />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editUser.email" label="Email Address" type="email" variant="outlined" prepend-inner-icon="mdi-email" required />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="editUser.role"
                :items="['user', 'admin', 'hoteladmin', 'tourcompanyadmin']"
                label="User Role"
                variant="outlined"
                prepend-inner-icon="mdi-shield-account"
              />
            </v-col>
          </v-row>

          <v-card-actions class="mt-6">
            <v-spacer></v-spacer>
            <v-btn color="grey" variant="text" @click="showEditDialog = false">Cancel</v-btn>
            <v-btn color="primary" type="submit" :loading="loading" size="large">
              <v-icon left>mdi-content-save</v-icon>
              Save Changes
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>

  <!-- ACCESS DENIED -->
  <div v-else class="forbidden-page">
    <v-container class="fill-height d-flex align-center justify-center">
      <div class="text-center">
        <v-icon size="120" color="red" class="mb-6">mdi-shield-lock</v-icon>
        <h1 class="text-h3 font-weight-bold mb-4">Access Denied</h1>
        <p class="text-h5 mb-6">You do not have permission to view this page</p>
        <v-btn color="primary" size="x-large" @click="$router.push('/')">
          Go Home
        </v-btn>
      </div>
    </v-container>
  </div>
</template>


<style scoped>
.admin-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  font-family: 'Georgia', serif;
}

.forbidden-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
}

.page {
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(27, 94, 32, 0.8), rgba(46, 125, 50, 0.7));
}

.title {
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 4px 4px 20px rgba(0,0,0,0.8);
}

.subtitle {
  font-size: 1.6rem;
  opacity: 0.95;
  font-style: italic;
}

.hover-row:hover {
  background-color: #f5f5f5 !important;
}
</style>