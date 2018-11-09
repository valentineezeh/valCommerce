import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProduct } from "../action/index.js";
import { uploadPhoto } from "../action/ProductImageAction";
import productValidator from "../middleware/productFormValid";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Description: "",
      Price: "",
      Color: "",
      Category: "",
      Image: "",
      errors: {},
      loading: false,
      done: false,
      photo: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileSelectChange = this.fileSelectChange.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    if (this.state.errors[event.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[event.target.name];
      this.setState({ [event.target.name]: event.target.value, errors });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  fileSelectChange(e) {
    e.preventDefault();
    this.setState({
      [event.target.name]: e.target.value
    });
    this.props.uploadPhoto(e.target.files[0]).then(() => {
      this.setState({ Image: this.props.productImage.photo });
    });
  }

  isValid() {
    const { errors, isValid } = productValidator(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const { createProduct } = this.props;
      createProduct(this.state)
        .then(() => {
          this.setState({ done: true });
        })
        .catch(error => {
          this.setState(
            { errors: error.response.data, isLoading: false },
            this.context.router.history.push("/")
          );
        });
    }
  }

  render() {
    const {
      errors,
      Name,
      Category,
      Description,
      Price,
      photo,
      Color
    } = this.state;
    const { productImage } = this.props;
    // console.log("--->", this.props.photo);
    const form = (
      <div
        className="d-flex justify-content-center align-items-center container"
        style={{ marginTop: "40px" }}
      >
        <form
          className={classnames({ loading: this.state.loading })}
          encType="multipart/form-data"
        >
          <h3>Create A Product</h3>
          <div className={classnames("form-group", { error: !!errors.Name })}>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Product Name"
              name="Name"
              value={Name}
              onChange={this.onChange}
            />
            <span style={{ color: "#ae5856" }}>{errors.Name}</span>
          </div>
          <div className={classnames("form-group", { error: !!errors.Price })}>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Product Price"
              name="Price"
              value={Price}
              onChange={this.onChange}
            />
            <span style={{ color: "#ae5856" }}>{this.state.errors.Price}</span>
          </div>
          <div
            className={classnames("form-group", { error: !!errors.Category })}
          >
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Product Category"
              name="Category"
              value={Category}
              onChange={this.onChange}
            />
            <span style={{ color: "#ae5856" }}>{errors.Category}</span>
          </div>
          <div className={classnames("form-group", { error: !!errors.Color })}>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Product Color"
              name="Color"
              value={Color}
              onChange={this.onChange}
            />
            <span style={{ color: "#ae5856" }}>{this.state.errors.Price}</span>
          </div>
          <div
            className={classnames("form-group", {
              error: !!errors.Description
            })}
          >
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Product Description"
              name="Description"
              value={Description}
              onChange={this.onChange}
            />
            <span style={{ color: "#ae5856" }}>
              {this.state.errors.Description}
            </span>
          </div>
          <div className={classnames("custom-file", { error: !!errors.Image })}>
            <input
              type="file"
              className="custom-file-input"
              id="validatedCustomFile"
              name="photo"
              value={photo || ""}
              onChange={this.fileSelectChange}
            />
            <label className="custom-file-label">
              {photo || "Choose file..."}
            </label>
            <span style={{ color: "#ae5856" }}>{this.state.errors.Image}</span>
            <div>
              <button
                onClick={this.onSubmit}
                type="submit"
                className="btn btn-primary"
                style={{ margin: "5px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
    return <div>{this.state.done ? <Redirect to="/products" /> : form}</div>;
  }
}

ProductForm.propTypes = {
  createProduct: PropTypes.func.isRequired,
  uploadPhoto: PropTypes.func.isRequired
};

ProductForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  productImage: state.productImages
});

export default connect(
  mapStateToProps,
  { createProduct, uploadPhoto }
)(ProductForm);
