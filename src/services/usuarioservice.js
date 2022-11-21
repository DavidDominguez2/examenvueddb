import axios from "axios";
import Global from "../Global";
export default class UsuarioService {
  getPerfilUsuario() {
    return new Promise(function (resolve) {
      var request = "/api/Manage/PerfilUsuario";
      var url = Global.urlApiCubos + request;
      var token = localStorage.getItem("token");
      axios
        .get(url, {
          headers: {
            Authorization: "bearer " + token,
          },
        })
        .then((res) => {
          resolve(res.data);
        });
    });
  }

  getComprasUsuario() {
    return new Promise(function (resolve) {
      var request = "/api/Compra/ComprasUsuario";
      var url = Global.urlApiCubos + request;
      var token = localStorage.getItem("token");
      axios
        .get(url, {
          headers: {
            Authorization: "bearer " + token,
          },
        })
        .then((res) => {
          resolve(res.data);
        });
    });
  }

  postPedido(id) {
    return new Promise(function (resolve) {
      var request = "/api/Compra/InsertarPedido/" + id;
      var url = Global.urlApiCubos + request;
      var token = localStorage.getItem("token");
      axios
        .post(url, "", {
          headers: {
            Authorization: "bearer " + token,
          },
        })
        .then((res) => {
          resolve(res.data);
        });
    });
  }
}
