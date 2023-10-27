import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./page/Home";












import './assets/scss/styles.scss'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home}/>
      </Routes>
    </BrowserRouter>
  );
    
};

export default App;
