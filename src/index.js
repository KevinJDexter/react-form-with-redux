import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {
    createStore,
   combineReducers, 
  //  applyMiddleware
  } from 'redux';
import {Provider} from 'react-redux';
// import logger from 'redux-logger';


const reducer = (state = [], action) => {
  if (action.type === "ADD_SNACK") {
    state = [...state, action.value];
  }
  return state;
}

const store = createStore(
  combineReducers({
    reducer
  })
  // applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
