import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const data = {
    testimonials: [
      { id: 1, text: "BreakBuddy transformed my study habits!", user: "Jamie, College Student" },
      { id: 2, text: "BreakBuddy helped me focus better!", user: "Alex, Bodybuilder" },
    ],
    faqs: [
      { question: "What are the streaks and trophies? How do I earn them?", answer: "Keep a streak going for a month to earn a trophy." },
      { question: "Is there a way to set up different routines for study and workout sessions?", answer: "Yes, customize intervals for each session." },
    ],
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}