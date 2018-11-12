import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { readingBoosterReducer } from './sdk/reducers'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(readingBoosterReducer);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
