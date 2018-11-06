import axios from 'axios';
import config from '../config';

export const PRODUCT_CREATED = 'PRODUCT_CREATED';

export const productCreated = (product) => {
  return {
    type: PRODUCT_CREATED,
    product
  };
};

export const createProduct = (productData) => {
  return dispatch => {
    return axios.post(`${config.apiUrl}/api/product`, productData)
      .then(() => dispatch( productCreated(productData)) )
      .catch( error => { error; });
  };
};