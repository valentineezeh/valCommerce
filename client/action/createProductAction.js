import axios from "axios";
import toastr from "toastr";
import config from "../config";
import PRODUCT_CREATED from "./types";

export const productCreated = product => {
  return {
    type: PRODUCT_CREATED,
    product
  };
};

export const createProduct = productData => {
  return dispatch => {
    return axios
      .post(`${config.apiUrl}/api/product/create`, productData)
      .then(res => {
        const message = res.data.message;
        toastr.success(message, { timeOut: 5000 });
        dispatch(productCreated(productData));
      })
      .catch(error => {
        error;
      });
  };
};
