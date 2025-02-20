import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store"
// import {Provider} from 'react-redux'
// import {PersistGate} from 'redux-persist/integration/react'
// import {ContextProvider} from "./context/Context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
     {/* <ContextProvider> */}
     <App />
     {/* </ContextProvider> */}
    </Provider>
     </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
