<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Cubos</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marcas
            </a>
            <ul class="dropdown-menu">
              <li v-for="marca of marcas" :key="marca">
                <a class="nav-link" @click="goToMarcas(marca)">
                  {{ marca }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div v-if="status == false">
          <router-link class="nav-link" to="/login">Login</router-link>
          <router-link class="nav-link" to="/register">Register</router-link>
        </div>
        <div v-if="status">
          <router-link class="nav-link" to="/usuario">Perfil</router-link>
          <button class="btn btn-danger" @click="logOut()">Log Out</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceCubo from "../services/cuboservice";
import ServiceAuth from "../services/authservice";
const _serviceCubo = new ServiceCubo();
const _serviceAuth = new ServiceAuth();
export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: [],
      status: false,
    };
  },
  methods: {
    loadMarcas() {
      _serviceCubo.getAllMarcas().then((result) => {
        this.marcas = result;
      });
    },
    goToMarcas(marca) {
      this.$router.push("/cubos/marca/" + marca);
    },
    logOut() {
      _serviceAuth.deleteToken();
      this.status = false;
      this.$router.push("/");
    },
  },
  mounted() {
    this.loadMarcas();
    if (_serviceAuth.getToken() != null) {
      this.status = true;
    } else {
      this.status = false;
    }
  },
};
</script>

<style></style>
