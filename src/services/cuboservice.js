import axios from "axios";
import Global from "../Global";

export default class CuboService {
  getAllMarcas() {
    return new Promise(function (resolve) {
      var request = "/api/cubos/marcas";
      var url = Global.urlApiCubos + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getAllCubos() {
    return new Promise(function (resolve) {
      var request = "/api/cubos/";
      var url = Global.urlApiCubos + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getCubosMarca(marca) {
    return new Promise(function (resolve) {
      var request = "/api/Cubos/CubosMarca/" + marca;
      var url = Global.urlApiCubos + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getCuboById(id) {
    return new Promise(function (resolve) {
      var request = "/api/Cubos/" + id;
      var url = Global.urlApiCubos + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getComentariosByIdCubo(id) {
    return new Promise(function (resolve) {
      var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
      var url = Global.urlApiCubos + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }
}
