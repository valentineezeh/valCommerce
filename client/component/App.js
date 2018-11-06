import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { ProductForm } from '../component/ProductForm';

class App extends React.Component {
    render(){
        return (
        <div>
            <NavigationBar />
            <div>
            <Route path="/create-product" component={ProductForm} />
        </div>
        </div>
        )
    }
}

export default App;