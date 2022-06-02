import GenericService from "./Genericservice";
import jwtDecode from "jwt-decode";
class Userservice extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  register = (email, password, name) => {
    return this.post("users/register", { email, password, name });
  };
  logout = () => {
    localStorage.removeItem("token");
  };
  isloggedin = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isloggedin()) {
      if (this.getLoggedInUser().role == "admin") return true;
      return false;
    } else return false;
  };
}
let userservice = new Userservice();

export default userservice;
