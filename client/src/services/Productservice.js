import GenericService from "./Genericservice";
class Productsservice extends GenericService {
  constructor() {
    super();
  }
  addproduct = (data) => this.post("products", data);
  deleteProducts = (_id) => this.delete("products/" + _id);
  updateProducts = (_id, data) => this.put("products/" + _id, data);
  getProducts = (page = 1, perPage = 10) =>
    this.get("products?page=" + page + "&perPage=" + perPage);
  getSingleProduct = (id) => this.get("products/" + id);
}
let productsservice = new Productsservice();

export default productsservice;
