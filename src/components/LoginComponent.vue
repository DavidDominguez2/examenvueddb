<template>
  <div>
    <form @submit.prevent="login">
      <label>EMAIL</label>
      <input type="email" v-model="email" class="form-control" />
      <label>PASSWORD</label>
      <input type="password" v-model="password" class="form-control" />
      <button class="btn btn-success">LOGIN</button>
    </form>
  </div>
</template>

<script>
import ServiceAuth from "../services/authservice";
const _serviceAuth = new ServiceAuth();
export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      var email = this.email;
      var password = this.password;

      _serviceAuth.login(email, password).then((res) => {
        _serviceAuth.setToken(res);
        window.location.reload();
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
