import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { LoginReducer } from './components/reducers/LoginReducer';
import { reducer } from './components/reducers/Reducer';

const rootElement = document.getElementById('root');
const rootReducer = combineReducers({
    user: LoginReducer, 
    reducer: reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    rootElement
);