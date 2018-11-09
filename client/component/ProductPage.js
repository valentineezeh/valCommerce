import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductList from "./ProductList";
import { fetchAllProducts } from "../action/fetchProducts";

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  render() {
    return (
      <div>
        <h1 align="center">Product List</h1>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  fetchAllProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { fetchAllProducts }
)(ProductPage);
