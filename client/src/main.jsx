import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollNavigator from './components/common/ScrollNavigator';
import './index.css';

const App = () => (
  <>
    <ScrollNavigator />
  </>
);

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}

export default App;
