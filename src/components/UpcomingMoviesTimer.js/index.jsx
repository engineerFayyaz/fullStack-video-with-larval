import React, { useState, useEffect } from "react";

const UpcomingEventTimerBar = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  function calculateTimeLeft() {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = eventTime - currentTime;

    if (timeRemaining <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const calculateProgress = () => {
    const totalSeconds = (timeLeft.days * 24 * 60 * 60) + (timeLeft.hours * 60 * 60) + (timeLeft.minutes * 60) + timeLeft.seconds;
    const eventDuration = (new Date(eventDate) - new Date()) / 1000;
    const progress = ((eventDuration - totalSeconds) / eventDuration) * 100;

    return progress;
  };

  return (
    <div className="row" style={{"margin":'20px 60px'}}>
	<h4 style={{color:"white"}}>Upcoming</h4>
	<div className="step-container">
		<div className="step">
			8 AM
		</div>
		<div className="step-line"></div>
		<div className="step">
			10 AM
		</div>
		<div className="step-line"></div>
		<div className="step">
			1 PM
		</div>
		<div className="step-line"></div>
		<div className="step">
			3 PM
		</div>
		<div className="step-line"></div>
		<div className="step">
			6 pm
		</div>
		<div className="step-line"></div>
		<div className="step">
			9 PM
		</div>
	</div>
</div>
  );
};

export default UpcomingEventTimerBar;
