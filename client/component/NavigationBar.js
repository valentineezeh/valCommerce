import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    
    render() {
        return (
            <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/products">Products <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/create-product" className="nav-link">Create Products</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
        )
    }
}

export default NavigationBar;
