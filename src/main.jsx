import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './FinalProject/Redux/Redux/RootReducer.jsx'

const appStore = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
