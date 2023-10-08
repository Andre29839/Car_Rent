import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from 'components/App';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <BrowserRouter basename="/Car_Rent">
        <App />
        <ToastContainer autoClose={2500} theme="white" />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
