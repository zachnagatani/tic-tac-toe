import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ticTacToe from './reducers/reducers.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as actions from './actions/actions';

let store = createStore(ticTacToe);
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
