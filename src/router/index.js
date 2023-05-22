import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { useAuthStore } from "../stores/auth";

export const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from) => {
  const store = useAuthStore();

 if(to.meta.requiresAuth && !store.isLoggedIn) 
  return {
    name: "login",
    query: {
      redirect: to.fullPath 
    }
  }
 
});


