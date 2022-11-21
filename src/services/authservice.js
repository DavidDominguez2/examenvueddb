import axios from "axios";
import Global from "../Global";

export default class AuthService {
  login(usuario, password) {
    return new Promise(function(resolve) {
      var request = "/api/Manage/Login";
      var url = Global.urlApiCubos + request;
      var user = {
        email: usuario,
        password: password,
      };
      var json = JSON.stringify(user);
      var header = new HttpHeaders({ "Content-Type": "application/json" });
    }
 


  }

  register(usuario: Usuario) {
    var request = "/api/Manage/RegistroUsuario";
    var url = environment.urlApiCubos + request;

    var json = JSON.stringify(usuario);
    var header = new HttpHeaders({ "Content-Type": "application/json" });

    return this._http.post(url, json, { headers: header });
  }

  setToken(token: string): any {
    localStorage.setItem("token", token);
  }

  getToken(): any {
    return localStorage.getItem("token");
  }

  deleteToken(): any {
    localStorage.removeItem("token");
  }
}
