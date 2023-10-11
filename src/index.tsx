import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/navbar/navbar';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
  <Provider store={store}>
    <BrowserRouter >
      <AppRouter />
    </BrowserRouter>
  </Provider>
  </>
);
