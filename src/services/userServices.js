import api from "@/router/api.js";

// REGISTER
export const registerUser = async (data) => {
  return await api.post("/register", data);
};

// LOGIN
export const loginUser = async (data) => {
  const response = await api.post("/login", data);

  // Save token & user info
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));

  return response;
};
