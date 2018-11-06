import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App';


// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//       applyMiddleware(thunk)
//   )
// );

//store={store}

ReactDOM.render(
  <BrowserRouter>
      <Provider >
        <App />
      </Provider>
  </BrowserRouter>, 
  document.getElementById('app')
  
)