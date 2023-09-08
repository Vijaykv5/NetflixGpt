import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Provider } from 'react-redux'
import store from './utils/store.js'
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist"

let peristor=persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
  <PersistGate persistor={peristor}>
    <App />
    </PersistGate>
  {/* </React.StrictMode> */}
  </Provider>
)
