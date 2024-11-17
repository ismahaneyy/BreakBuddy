

import React, { useState } from "react";
import './Achievements.css'; 

function Achievements() {
    const [showInfo, setShowInfo] = useState(false);

    const handleInfoClick = () => {
        setShowInfo(!showInfo);
    };

    const closeInfo = () => {
        setShowInfo(false);
    };

    return (
        <div className="achievements">
            <h1>Achievements</h1>
            <button onClick={handleInfoClick}>Info</button>

            {showInfo && (
                <div className="info-text">
                     <button className="close-btn" onClick={closeInfo}>X</button>
                    <p>Summary of Study-Related Achievement Ideas:
                        Study Streak Achievements (e.g., 7-Day, 30-Day, 90-Day Study Streak)
Session Milestones (e.g., First Study Session, 50th Session, 100 Hours of Study)
Focus Achievements (e.g., Focused for 1 Hour, Deep Focus)
Weekly/Monthly Study Challenges (e.g., Weekly Goal Crusher, Monthly Master)
Mastery & Improvement Achievements (e.g., Study Master, Knowledge Growth, Better Every Day)</p>
                </div>
            )}
        </div>
    );
}

export default Achievements;








