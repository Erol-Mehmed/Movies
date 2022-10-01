




















import { createRouter, createWebHistory } from "vue-router";
import HomeViewAdditional from '../views/HomeViewAdditional.vue';
import CatalogView from "../views/CatalogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewAdditional,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogView,
    },
  ],
});

export default router;
