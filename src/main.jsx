
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

// Wrap application with Redux Provider
// This makes the store accessible to all components
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
