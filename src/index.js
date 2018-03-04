import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import rootReducer from './reducers';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App/>
    </Provider>,
    document.getElementById('app')
);