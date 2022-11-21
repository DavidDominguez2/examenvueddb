<template>
  <div>
    <form @submit.prevent="register">
      <label>NOMBRE</label>
      <input type="text" v-model="usuario.nombre" class="form-control" />
      <label>EMAIL</label>
      <input type="email" v-model="usuario.email" class="form-control" />
      <label>PASSWORD</label>
      <input type="password" v-model="usuario.pass" class="form-control" />
      <button class="btn btn-success">Register</button>
    </form>
  </div>
</template>

<script>
import Usuario from "../models/usuario.js";
import ServiceAuth from "../services/authservice";
const _serviceAuth = new ServiceAuth();
const user = new Usuario();
export default {
  name: "RegisterComponent",
  data() {
    return {
      usuario: user,
    };
  },
  methods: {
    register() {
      this.usuario.idUsuario = 0;
      _serviceAuth.register(this.usuario).then(() => {
        _serviceAuth
          .login(this.usuario.email, this.usuario.pass)
          .then((res) => {
            _serviceAuth.setToken(res);
            this.$router.push("/");
          });
      });
    },
  },
};
</script>

<style></style>
