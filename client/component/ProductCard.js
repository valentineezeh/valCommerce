import React from "react";
import PropTypes from "prop-types";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const ProductCard = products => {
  const { product } = products;
  return (
    <div>
      <Card>
        <CardImg top width="50%" src={product.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h6>Name: {product.name}</h6>
          </CardTitle>
          <CardText>
            <h6>Price: {product.price}</h6>
          </CardText>
          <CardText>
            <h6>ID: {product.id}</h6>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.array.isRequired
};

export default ProductCard;
