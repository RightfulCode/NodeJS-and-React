import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element = {<PrivateComponent />}>
        <Route path='/' />
        <Route path='/add' />
        <Route path='/update' />
        <Route path='/profile' />
        <Route path='/logout' />
        </Route>
        
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
