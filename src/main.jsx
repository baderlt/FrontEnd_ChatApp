import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './redux/reduserGlobale.jsx'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
    <Provider store={Store}>
    <App />
    </Provider>
    </HashRouter>
)
