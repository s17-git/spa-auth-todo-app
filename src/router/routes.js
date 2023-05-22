
export const routes = [

  {
    path: "/",
    component: () => import("../pages/HomePage.vue"),
    name: "home"
  },
  {
    path: "/login",
    component: () => import("../pages/LoginPage.vue"),
    name: "login"
  },
  {
    path: "/register",
    component: () => import("../pages/RegisterPage.vue"),
    name: "register"
  },
  {
    path: "/tasks",
    component: () => import("../pages/TasksPage.vue"),
    name: "tasks",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/summary",
    component: () => import("../pages/SummaryPage.vue"),
    name: "summary",
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import("../pages/errors/NotFound.vue"),
    name: 'NotFound', 
    props: true,
  },


];