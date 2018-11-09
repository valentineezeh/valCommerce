import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { CardColumns } from "reactstrap";

export default function ProductList({ products }) {
  const emptyMessage = <p>There are no Recipe yet in the collection.</p>;

  const productList = (
    <div>
      <CardColumns>
        {products.map(product => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </CardColumns>
    </div>
  );
  return <div>{products.length === 0 ? emptyMessage : productList}</div>;
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
