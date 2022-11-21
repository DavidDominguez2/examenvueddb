<template>
  <div>
    <div v-if="usuario">
      <h1>PERFIL</h1>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">{{ usuario.nombre }}</h5>
          <p class="card-text">
            {{ usuario.email }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="compras">
      <h1>COMPRAS</h1>
      <div
        class="card"
        style="width: 18rem"
        v-for="(compra, index) in compras"
        :key="compra.idCompra"
      >
        <div class="card-body">
          <h5 class="card-title">idPedido {{ compra.idPedido }}</h5>
          <h5 class="card-text" v-if="cubosusuario">
            CUBO: {{ cubosusuario[index].nombre }}
          </h5>
          <p class="card-text">
            {{ compra.fechaPedido }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceUsuario from "../services/usuarioservice";
const _serviceUsuario = new ServiceUsuario();
import ServiceCubo from "../services/cuboservice";
const _serviceCubo = new ServiceCubo();
import Usuario from "../models/usuario";
const user = new Usuario();
export default {
  name: "UsuarioComponent",
  data() {
    return {
      usuario: user,
      compras: [],
      cubosusuario: [],
    };
  },
  mounted() {
    this.loadUsuario();
    this.loadCompras();
  },
  methods: {
    loadUsuario() {
      _serviceUsuario.getPerfilUsuario().then((res) => {
        this.usuario = res;
      });
    },
    loadCompras() {
      _serviceUsuario.getComprasUsuario().then((res) => {
        this.compras = res;
        this.compras.forEach((c) => {
          _serviceCubo.getCuboById(c.idCubo).then((res) => {
            this.cubosusuario.push(res);
          });
        });
      });
    },
  },
};
</script>

<style></style>
