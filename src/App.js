import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Home';
import Products from './components/pages/Home';
import SignUp from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/products' exact element={<Products/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
