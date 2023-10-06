import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from 'components/App';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Car_Rent">
    <App />
    <ToastContainer autoClose={2500} theme="white" />
  </BrowserRouter>
);
