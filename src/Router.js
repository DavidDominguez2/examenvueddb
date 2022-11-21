import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesCuboComponent from "./components/DetallesCuboComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";
import UsuarioComponent from "./components/UsuarioComponent.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/cubos/marca/:marca", component: HomeComponent },
  { path: "/valoracion/:id", component: DetallesCuboComponent },
  { path: "/login", component: LoginComponent },
  { path: "/register", component: RegisterComponent },
  { path: "/usuario", component: UsuarioComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
