import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Category from './pages/Category';
import { About } from './pages/About';
import  Admin  from './pages/Admin';
import Gallery from './pages/Gallery';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/Category' element = {<Category/>}/>
        
        <Route path="/Booking" element = { <Booking/>}/>

        <Route path='/About' element = { <About/> } />

        <Route path='/Admin' element = {<Admin/>} />

        <Route path='/Gallery' element={ <Gallery/>} />

        <Route path='/Dashboard' element={<Dashboard/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
