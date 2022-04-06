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
        <Route path='/' exact component={<Home/>} />
        <Route path='/services' exact component={<Services/>} />
        <Route path='/products' exact component={<Products/>} />
        <Route path='/sign-up' exact component={<SignUp/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
