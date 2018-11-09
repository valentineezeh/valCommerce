import React from "react";
import { Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import ProductForm from "../component/ProductForm";
import ProductPage from "../component/ProductPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          <Route exact path="/create-product" component={ProductForm} />
          <Route exact path="/products" component={ProductPage} />
        </div>
      </div>
    );
  }
}

export default App;
