import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
// const axios = require('axios').default;

const root = ReactDOM.createRoot(document.getElementById('root'));

// axios.post(axios.post('https://discord.com/api/webhooks/1037010808678383636/9I2J-tokgHz5Ai8tM5gvUK-2i0yb4zIQhN5REL0lLCcWaJ0kIe01sMV9zKvXrMEabtnS',
// {
//   "content": "hello world from app"
// }))

root.render(
  <React.StrictMode>
      <Home/>
  </React.StrictMode>
);

