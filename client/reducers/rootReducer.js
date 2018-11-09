import { combineReducers } from "redux";
import products from "./products";
import productImages from "./uploadPhoto";

export default combineReducers({
  products,
  productImages
});
