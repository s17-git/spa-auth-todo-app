import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { csrfCookie, login, register, logout, getUser } from '../http/auth-api';

export const useAuthStore = defineStore("authStore", () => {

  const user = ref(null);
  const isLoggedIn = computed(() => !!user.value);

  const fetchUser = async () => {
    const {data} = await getUser();
    user.value = data;
  }

  const handleLongin = async (credentials) => {
    await csrfCookie();
    await login(credentials);
    await fetchUser();
  }

  const handleRegister = async (user) => {

    await register(user);
    await handleLongin({email: user.email, password: user.password});
  }

  const handleLogout = async () => {
    await logout();
    user.value = null;
  }


  return {
    handleLogout,
    handleLongin,
    handleRegister,
    isLoggedIn,
    user,
    fetchUser
  }


});