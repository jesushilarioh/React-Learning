import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const DATA = [
  {
    id: 90,
    info: "Here's some info."
  },
  {
    id: 91,
    info: "Here's some info. 1"
  },
  {
    id: 92,
    info: "Here's some info. 2"
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App formData={DATA} />
  </React.StrictMode>
);


