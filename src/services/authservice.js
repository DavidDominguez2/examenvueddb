import axios from "axios";
import Global from "../Global";

export default class AuthService {
  login(usuario, password) {
    return new Promise(function (resolve) {
      var request = "/api/Manage/Login";
      var url = Global.urlApiCubos + request;
      var user = {
        email: usuario,
        password: password,
      };
      axios.post(url, user).then((res) => {
        resolve(res.data.response);
      });
    });
  }

  register(usuario) {
    return new Promise(function (resolve) {
      var request = "/api/Manage/RegistroUsuario";
      var url = Global.urlApiCubos + request;
      var json = JSON.stringify(usuario);

      axios
        .post(url, json, { headers: { "Content-Type": "application/json" } })
        .then((res) => {
          resolve(res.data);
        });
    });
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  deleteToken() {
    localStorage.removeItem("token");
  }
}
