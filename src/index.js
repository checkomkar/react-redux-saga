import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga'
import { watchCountInc} from './saga/Saga';

const sagaMiddleware =createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
sagaMiddleware.run(watchCountInc)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
