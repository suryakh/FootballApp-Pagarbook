import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers,applyMiddleware } from 'redux'
import {loginreducers,datareducer} from './Redux/Reducers'
import thunk from 'redux-thunk'
// import datareducer from './Redux/Reducers'


import App from './App';

const reducers = combineReducers({
loginreducers,
datareducer
})

const store = createStore(reducers,applyMiddleware(thunk))

const render = () => ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
