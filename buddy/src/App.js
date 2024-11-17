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
// import JoinCreateRoom from './components/JoinCreateRoom';
// import { io } from "socket.io-client";
import StudyTogetherPage from './components/StudyTogetherPage';
import FeaturesPage from './components/FeaturesPage';
import StatsCounter from './components/StatsCounter';
// import AdditionalInfo from './components/AdditionalInfo';
// import RoomManager from "./components/RoomManager";
// import ClientRoom from "./components/ClientRoom";
// import Room from "./components/Room";
// import Card from './Card';



const App = () => {

  // const socket = io("http://localhost:5000"); 

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
            <Blog />
            {/* <AdditionalInfo /> */}
            </section>
            <StudyTogetherPage/>
            < StatsCounter/>
            <FeaturesPage />

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
        {/* <Route path="/manager" element={<JoinCreateRoom socket={socket} />} />
        <Route path="/isma" element={<RoomManager socket={socket} />} />
        <Route path="/room" element={<Room socket={socket} />} />
        <Route path="/client" element={<ClientRoom socket={socket} />} /> */}
        {/* <Route path="/progress" element={<Card/>} /> */}




      </Routes>
    </Router>
  );
};

export default App;
