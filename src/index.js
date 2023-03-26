import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/home/Home';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


