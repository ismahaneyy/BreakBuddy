import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import studentimage from './assets/secondimagee.jpeg';
import bodybuilder from './assets/thirdimagee.jpeg';
import others from './assets/fourthimagee.jpeg';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimerImage from './assets/firstimagee.jpeg';
import Testimonials from './components/Testimonials';
import Woman from './assets/womanimae.jpeg';
import man from './assets/manimage.jpeg'
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Timer from './components/timer';
import FlashCard from './components/FlashCard';

const App = () => {
  const [expandedCard, setExpandedCard] = useState(null);  
 
  const handleLearnMore = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName); 
  };

  const testimonialsData = [
    { id: 1, text: 'This app has transformed my study routine!', user: 'Alice', image: Woman },
    { id: 2, text: 'BreakBuddy keeps me focused and productive.', user: 'Bob', image: man },
    { id: 3, text: 'I love the workout reminders feature!', user: 'Charlie', image: man },
  ];

  const faqData = [
    { id: 1, question: 'Can I customize my work and rest intervals?', answer: 'Yes, BreakBuddy lets you set your preferred study/work periods and rest times to suit your individual needs.' },
    { id: 2, question: 'What is BreakBuddy?', answer: 'BreakBuddy is an app and website designed to help students, bodybuilders, and workers maintain productivity and stamina by automatically scheduling work/study intervals and rest breaks.' },
    { id: 3, question: 'How does BreakBuddy help with productivity?', answer: 'The app structures your study or work sessions with set intervals, such as 25 minutes of work followed by a 5-minute break, helping you stay focused without constantly setting alarms.' },
    { id: 4, question: 'How does BreakBuddy help bodybuilders?', answer: 'BreakBuddy allows bodybuilders to customize their workout routines by setting exercise durations, break periods, and workout days. It also provides reminders for scheduled sessions to maintain consistency.' },
   
  ];



  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <HeroSection
              heading="Master Your Time, Maximize Your Potential"
              subheading="Automate your productivity with smart scheduling and powerful motivation with BreakBuddy."
              buttonText="Get Started"
              image={TimerImage}  
              imageAlt="A man with a timer illustration"
            />
            <h2 className="h2css">Who can use BreakBuddy?</h2>
            <section className="cards">
              <Card
                title="Students"
                description="Improve focus, enhance memory retention, and ace your exams."
                additionalText="BreakBuddy helps students create effective study schedules with tailored breaks to maximize learning."
                isExpanded={expandedCard === "Students"}
                onLearnMore={() => handleLearnMore("Students")}
                image={studentimage} 
              />
              <Card
                title="Body Builders"
                description="Track workouts and optimize performance with ease."
                additionalText="Bodybuilders can use BreakBuddy to stay consistent with workout plans and rest cycles."
                isExpanded={expandedCard === "Body Builders"}
                onLearnMore={() => handleLearnMore("Body Builders")}
                image={bodybuilder} 
              />
              <Card
                title="Others"
                description="Automate your productivity for a more efficient routine."
                additionalText="Whether you’re an entrepreneur or a busy parent, BreakBuddy helps streamline your day."
                isExpanded={expandedCard === "Others"}
                onLearnMore={() => handleLearnMore("Others")}
                image={others} 
              />
            </section>
            <Testimonials testimonials={testimonialsData} />
            <FAQ faqs={faqData} />
            < Footer/>
          </div>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="login" element={<Login/>}/>
        <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<FlashCard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
