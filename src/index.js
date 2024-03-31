import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from 'components/ErrorFallback';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Router>
      <App />
    </Router>
  </ErrorBoundary>
);
