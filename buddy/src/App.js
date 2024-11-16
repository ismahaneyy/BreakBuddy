import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Timer from './components/timer';
import FlashCard from './components/FlashCard';
import Testimonials from './components/Testimonials';
<<<<<<< HEAD
import Card from './components/Card';
=======
import JoinCreateRoom from './components/JoinCreateRoom';
import { io } from "socket.io-client";
import RoomManager from "./components/RoomManager";
import ClientRoom from "./components/ClientRoom";
import Room from "./components/Room";
// import Card from './Card';


>>>>>>> a79365b241571488d77c5c2b3497bc1653c019bb

const App = () => {

  const socket = io("http://localhost:5000"); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <HeroSection />
            <section id="home">
            </section>
            <section id="blog">
            </section>
            <Blog />
            <section id="testimonials">
              <Testimonials />
            </section>
            
            <Footer />
            
          </div>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<FlashCard />} />
<<<<<<< HEAD
        <Route path="/progress" element={< Card/>} />
=======
        <Route path="/manager" element={<JoinCreateRoom socket={socket} />} />
        <Route path="/isma" element={<RoomManager socket={socket} />} />
        <Route path="/room" element={<Room socket={socket} />} />
        <Route path="/client" element={<ClientRoom socket={socket} />} />
        {/* <Route path="/progress" element={<Card/>} /> */}




>>>>>>> a79365b241571488d77c5c2b3497bc1653c019bb
      </Routes>
    </Router>
  );
};

export default App;
