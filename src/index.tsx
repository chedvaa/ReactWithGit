import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Home from './Components/homePage';
import App from './App';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import mainReducer from "./redux/Reducer";
// import thunk from 'redux-thunk';
// import freeze from 'redux-freeze';

// const devtools: any = window['__REDUX_DEVTOOLS_EXTENSION__'.toString()] ? window['__REDUX_DEVTOOLS_EXTENSION__'.toString()]() : (f: any) => f;
// const middleware = applyMiddleware(thunk, freeze);
// const store = middleware(devtools(createStore))(mainReducer);

ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
);
// registerServiceWorker();