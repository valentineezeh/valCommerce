import { PRODUCT_CREATED } from "../action/createProductAction";
import { ALL_PRODUCT } from "../action/fetchProducts";

export default function products(state = [], action = {}) {
  switch (action.type) {
    case PRODUCT_CREATED:
      return action.product;

    case ALL_PRODUCT:
      return action.products;

    default:
      return state;
  }
}
