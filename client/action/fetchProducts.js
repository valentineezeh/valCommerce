import axios from "axios";
import config from "../config";

export const ALL_PRODUCT = "ALL_PRODUCT";

export const allProducts = products => {
  return {
    type: ALL_PRODUCT,
    products
  };
};

export function fetchAllProducts() {
  return dispatch => {
    return axios
      .get(`${config.apiUrl}/api/product`)
      .then(response => {
        dispatch(allProducts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}
