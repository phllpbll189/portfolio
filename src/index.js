import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import { Provider } from 'react-redux';
import store from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <div className="container-margins">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Portfolio' element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
  </Provider>
);

