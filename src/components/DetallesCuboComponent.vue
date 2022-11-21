<template>
  <div>
    <div class="card" v-if="cubo">
      <img
        :src="cubo.imagen"
        class="card-img-top"
        alt="..."
        style="width: 200px"
      />
      <div class="card-body">
        <h5 class="card-title">Nombre: {{ cubo.nombre }}</h5>
        <h5 class="card-title">Precio:{{ cubo.precio }}€</h5>
        <h5 class="card-title">Modelo:{{ cubo.modelo }}</h5>
        <h5 class="card-title">Color:{{ cubo.color }}</h5>
      </div>
      <div class="card-footer">
        <button class="btn btn-success" @click="comprarCubo()">Comprar</button>
      </div>
    </div>
    <h1>VALORACIONES</h1>
    <div v-if="comentarios && cubo">
      <div
        class="row"
        v-for="comentario of comentarios"
        :key="comentario.idComentario"
      >
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Usuario: {{ comentario.idUsuario }}</h5>
              <i>{{ comentario.fechaComentario }}</i>
              <p class="card-text">
                {{ comentario.comentario }}
              </p>
              <p class="card-text">Puntuacion: {{ cubo.valoracion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cubo from "../models/cubo";
import ServiceCubo from "../services/cuboservice";
import ServiceUsuario from "../services/usuarioservice";

const cubo = new Cubo();

const _serviceCubo = new ServiceCubo();
const _serviceUsuario = new ServiceUsuario();

export default {
  name: "DetallesCuboComponent",
  data() {
    return {
      cubo: cubo,
      comentarios: [],
    };
  },
  mounted() {
    var id = parseInt(this.$route.params.id);
    this.loadCubo(id);
    this.loadComentariosCubo(id);
  },
  methods: {
    loadCubo(id) {
      _serviceCubo.getCuboById(id).then((res) => {
        this.cubo = res;
      });
    },
    loadComentariosCubo(id) {
      _serviceCubo.getComentariosByIdCubo(id).then((res) => {
        this.comentarios = res;
      });
    },
    comprarCubo() {
      console.log(this.cubo.idCubo);
      _serviceUsuario.postPedido(this.cubo.idCubo).then(() => {
        this.$router.push("/usuario");
      });
    },
  },
};
</script>

<style></style>
