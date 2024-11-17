import React, { useEffect, useState, useRef } from "react";
import "./StatsCounter.css";

const StatsCounter = () => {
  const stats = [
    { id: 1, value: 1000000, label: "community members", prefix: "+", suffix: "" },
    { id: 2, value: 19000000, label: "study sessions", prefix: "+", suffix: "" },
    { id: 3, value: 4000000, label: "study goals reached", prefix: "+", suffix: "" },
    { id: 4, value: 215, label: "countries", prefix: "+", suffix: "" },
    { id: 5, value: 4.8, label: "positive reviews", prefix: "", suffix: "/5" },
  ];

  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="stats-counter" ref={containerRef}>
      <h1>
        Our <span className="highlight">student community</span> is more than one million
        strong <br />
        <span className="subtext">(and this is just the beginning)</span>
      </h1>
      <div className="stats-container">
        {stats.map((stat) => (
          <StatItem
            key={stat.id}
            value={stat.value}
            label={stat.label}
            visible={visible}
            prefix={stat.prefix}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({ value, label, visible, prefix, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const increment = value / 100; 
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 20); 

    return () => clearInterval(interval);
  }, [value, visible]);

  return (
    <div className="stat-item">
      <div className="stat-value">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatsCounter;