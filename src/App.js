import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Inventory from './Pages/Inventory';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import Demo from './Pages/requestdemo';
import Update_res from './Pages/Update_res';
import UpdateRestrictions from './Pages/updaterestrictions'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} ></Route>
          <Route path="inventory" element={<Inventory />} ></Route>
          <Route path="pricing" element={<Pricing />} ></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="requestdemo" element={<Demo />}></Route>
          <Route path="update_res" element={<Update_res />}></Route>
          <Route path="updaterestrictions" element={<UpdateRestrictions />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
