import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      {/* Conditionally render additional text if the card is expanded */}
      {props.isExpanded && (
        <div>
          <p className="additional-text">{props.additionalText}</p>
          <p className="learn-more-text">
            Learn more: BreakBuddy is designed to help {props.title.toLowerCase()} by:
            {props.title === "Students" && (
              <ul>
                <li>Using structured study-break intervals to improve focus.</li>
                <li>Sending reminders to resume studying after breaks.</li>
              </ul>
            )}
            {props.title === "Body Builders" && (
              <ul>
                <li>Tracking workouts with customized exercises and rest intervals.</li>
                <li>Providing workout reminders to build consistency.</li>
              </ul>
            )}
            {props.title === "Others" && (
              <ul>
                <li>Automating work/rest intervals for enhanced productivity.</li>
                <li>Sending alerts to keep you on schedule without distractions.</li>
              </ul>
            )}
          </p>
        </div>
      )}

      {/* Learn More button toggles the expansion */}
      <button onClick={() => props.onLearnMore(props.title)}>
        {props.isExpanded ? "Show Less" : "Learn More"} <span className="arrow">→</span>
      </button>
    </div>
  );
}

export default Card;
