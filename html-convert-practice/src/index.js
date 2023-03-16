import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const DATA = [
  {
    id: 90,
    info: "Here's some info from index.js - 0",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est ad libero odit. Asperiores, provident fuga, Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 91,
    info: "Here's some info from index.js - 1",
    paragraph: "Provident est ad libero odit. Asperiores, provident fuga, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est ad libero odit."
  },
  {
    id: 92,
    info: "Here's some info from index.js - 2",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est ad libero odit. Asperiores, provident fuga, Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App indexJsData={DATA} />
  </React.StrictMode>
);


