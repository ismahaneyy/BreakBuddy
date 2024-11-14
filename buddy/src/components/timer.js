import React, { useState, useEffect, useCallback } from 'react';
import alarmSound from '../assets/TimerAlarm.wav';

const alarm = new Audio(alarmSound);

const Timer = () => {
    const [studyHours, setStudyHours] = useState(0);
    const [studyMinutes, setStudyMinutes] = useState(0);
    const [breakMinutes, setBreakMinutes] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [cyclesLeft, setCyclesLeft] = useState(0);
    const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);

    const startTimer = () => {
        if (studyHours === 0 && studyMinutes === 0) {
            alert("Please set a study duration.");
            return;
        }
        const totalStudyMinutes = studyHours * 60 + studyMinutes;
        const totalCycles = Math.floor(totalStudyMinutes / (studyMinutes + breakMinutes));

        setCyclesLeft(totalCycles);
        setTimeLeft(studyMinutes * 60);
        setIsRunning(true);
        setIsBreak(false);
    };

    const stopAlarmSound = () => {
        alarm.pause();
        alarm.currentTime = 0;
        setIsAlarmPlaying(false);
    };

    const stopTimer = useCallback(() => {
        setIsRunning(false);
        setTimeLeft(0);
        setIsBreak(false);
        setCyclesLeft(0);
        stopAlarmSound(); 
    }, []); 

    const playAlarm = () => {
        alarm.currentTime = 0;
        alarm.play()
            .then(() => setIsAlarmPlaying(true))
            .catch((error) => console.error("Audio playback failed:", error));
    };

    useEffect(() => {
        let countdown;

        if (isRunning && timeLeft > 0) {
            countdown = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (isRunning && timeLeft === 0) {
            playAlarm();

            if (!isBreak) {
                setIsBreak(true);
                setTimeLeft(breakMinutes * 60);
            } else {
                setIsBreak(false);
                setCyclesLeft((prev) => prev - 1);

                if (cyclesLeft > 1) {
                    setTimeLeft(studyMinutes * 60);
                } else {
                    stopTimer();
                }
            }
        }

        return () => clearInterval(countdown);
    }, [isRunning, timeLeft, isBreak, cyclesLeft, breakMinutes, studyMinutes, stopTimer]); // Add stopTimer to dependencies

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleBreakMinutesChange = (e) => {
        const value = Math.min(Number(e.target.value), 5);
        setBreakMinutes(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', fontFamily: 'Arial, sans-serif', background: '#fff', minHeight: '100vh', padding: '30px' }}>
            
            <h1 style={{ fontSize: '28px', color: isBreak ? '#7a5531' : '#4e3b31', fontWeight: 'bold' }}>
                {isRunning && (isBreak ? 'Break Time!' : 'Study Time!')}
            </h1>

            {/* Start Button and Countdown Closer to Each Other */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <button 
                    onClick={startTimer} 
                    disabled={isRunning} 
                    style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        backgroundColor: '#7a5531',
                        color: 'white',
                        fontSize: '26px',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    START
                </button>

                <div 
                    style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        padding: '20px', 
                        border: '1px solid #8b5e3c', 
                        borderRadius: '12px', 
                        backgroundColor: '#f5d2a3', 
                        width: '240px',
                        textAlign: 'center',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s ease',
                    }}
                >
                    <h2 style={{ margin: '0', fontSize: '20px', color: '#7a5531', fontWeight: 'bold' }}>Countdown</h2>
                    <h1 style={{ fontSize: '50px', color: '#4e3b31', margin: '10px 0' }}>{formatTime(timeLeft)}</h1>
                </div>
            </div>

            <div 
                style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    padding: '30px', 
                    border: '1px solid #8b5e3c', 
                    borderRadius: '12px', 
                    backgroundColor: '#7a5531',  
                    width: '550px', 
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 style={{ margin: '0 0 10px', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Set Study Duration</h2>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <label style={{ color: 'white' }}>Hrs:</label>
                    <input type="number" value={studyHours} onChange={(e) => setStudyHours(Number(e.target.value))} min="0" style={{ width: '100px', padding: '10px', fontSize: '16px', textAlign: 'center', borderRadius: '8px', backgroundColor: '#f0e0c9' }} />
                    <label style={{ color: 'white' }}>Mins:</label>
                    <input type="number" value={studyMinutes} onChange={(e) => setStudyMinutes(Number(e.target.value))} min="0" max="59" style={{ width: '100px', padding: '10px', fontSize: '16px', textAlign: 'center', borderRadius: '8px', backgroundColor: '#f0e0c9' }} />
                    <label style={{ color: 'white' }}>Break Mins:</label>
                    <input 
                        type="number" 
                        value={breakMinutes} 
                        onChange={handleBreakMinutesChange} 
                        min="0" 
                        max="5" 
                        style={{ width: '100px', padding: '10px', fontSize: '16px', textAlign: 'center', borderRadius: '8px', backgroundColor: '#f0e0c9' }} 
                    />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <button 
                    onClick={stopTimer} 
                    style={{
                        padding: '12px 25px',
                        fontSize: '18px',
                        backgroundColor: '#7a5531',
                        color: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: 'none',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Stop Timer
                </button>

                <button 
                    onClick={stopAlarmSound} 
                    disabled={!isAlarmPlaying} 
                    style={{
                        padding: '12px 25px',
                        fontSize: '18px',
                        backgroundColor: isAlarmPlaying ? '#7a5531' : '#d0a88a', // Change color when alarm is not playing
                        color: 'white',
                        borderRadius: '8px',
                        cursor: isAlarmPlaying ? 'pointer' : 'not-allowed',
                        border: 'none',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        opacity: isAlarmPlaying ? 1 : 0.5,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Stop Alarm
                </button>
            </div>
        </div>
    );
};

export default Timer;
