import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import productValidator from '../middleware/productFormValid';
import { createProduct } from '../action/createProductAction';

export class ProductForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      Name: '',
      Description: '',
      Price: '',
      Color: '',
      Category: '',
      Image: '',
      errors: {},
      loading: false,
      done: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    console.log('===>', event.target.name)
    if(this.state.errors[event.target.name]){
      let errors = Object.assign({}, this.state.errors);
      delete errors[event.target.name];
      this.setState({[event.target.name]: event.target.value, errors});
    }else{
      this.setState({[event.target.name]: event.target.value});
    }
  }

  isValid(){
    const { errors, isValid } = productValidator(this.state);
    if(!isValid){
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.isValid()){
      this.setState({ errors: {}, isLoading: true });
      this.props.createProduct(this.state, this.context.router.history.push('/products')).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Ride has been created successfully...'
          });
          this.setState({ done: true });
        }
      ).catch(
        (error) => {
          this.setState({ errors: error.response.data, isLoading: false}, this.context.router.history.push('/'));
        }
      );
    }
  }

  render(){
      const { errors, Name, Category, Description, Price, Color } = this.state;

      const form = (
<div className="d-flex justify-content-center align-items-center container" style={{marginTop: '40px'}}>
<form>
    <h3>Create A Product</h3>
  <div className="form-group">
    <input 
    type="text" 
    className="form-control" id="exampleFormControlInput1" placeholder="Product Name"
    name="Name"
    value={Name}
    onChange={this.onChange}
    />
  </div>
  <div className="form-group">
    <input 
    type="text" 
    className="form-control" id="exampleFormControlInput1" placeholder="Product Price"
    name="Price"
    value={Price}
    onChange={this.onChange} 
    />
  </div>
  <div className="form-group">
    <input 
    type="text" 
    className="form-control" id="exampleFormControlInput1" placeholder="Product Color" 
    name="Color"
    value={Color}
    onChange={this.onChange}
    />
  </div>
  <div className="form-group">
    <textarea 
    className="form-control" id="exampleFormControlTextarea1" 
    rows="3"
    name="Description"
    value={Description}
    onChange={this.onChange}
    ></textarea>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="validatedCustomFile" 
    placeholder="Product Description" 
    required
    name="Image"
    value={Image}
    onChange={this.onChange}
     />
    <label className="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div className="invalid-feedback">Example invalid custom file feedback</div>
    <div>
        <button onClick={this.onSubmit} type="submit" className="btn btn-primary" style={{margintop: '20px'}}>Submit</button>
        </div>
  </div>
</form>
</div>
      )
      return (
          <div>
              {this.state.done ? <Redirect to="/products" /> : form}
          </div>
      )
  }
}