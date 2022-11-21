<template>
  <div>
    <div class="container">
      <h1 v-if="$route.params.marca">{{ $route.params.marca }}</h1>
      <div
        class="card"
        style="width: 18rem"
        v-for="cubo of cubos"
        :key="cubo.idCubo"
      >
        <img :src="cubo.imagen" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ cubo.nombre }}</h5>
          <h5 class="card-title">{{ cubo.precio }}€</h5>
          <router-link
            class="btn btn-primary"
            :to="'/valoracion/' + cubo.idCubo"
            >Comprar</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubo from "../services/cuboservice";
const _serviceCubo = new ServiceCubo();
export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],
      marca: "",
    };
  },
  methods: {
    loadCubos() {
      _serviceCubo.getAllCubos().then((res) => {
        this.cubos = res;
      });
    },
    loadCubosMarca(marca) {
      _serviceCubo.getCubosMarca(marca).then((res) => {
        this.cubos = res;
      });
    },
  },
  mounted() {
    this.loadCubos();
  },
  watch: {
    "$route.params.marca"(nextMarca, oldMarca) {
      if (nextMarca != oldMarca) {
        if (nextMarca == undefined) {
          this.loadCubos();
        } else {
          this.loadCubosMarca(nextMarca);
        }
      }
    },
  },
};
</script>

<style></style>
