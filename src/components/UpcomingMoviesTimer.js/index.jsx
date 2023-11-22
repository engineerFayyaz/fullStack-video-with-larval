import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "redux/UserContext";

const UpcomingEventTimerBar = () => {
  const { user_id } = useUser(); // Assuming your user context provides the user_id

  console.log("user",user_id)

  const [upcomingTimes, setUpcomingTimes] = useState([]);

  useEffect(() => {
    const fetchUpcomingTimes = async () => {
      try {
       const userIdToUse = user_id || 67; // If user_id is available, use it; otherwise, use 67
const response = await axios.get(`http://mobile.codegifted.com/api/upcoming_movie/${userIdToUse}`);
        const { data } = response.data;
        const upcomingTimesData = data.map((movie) => movie.timeonly);
        setUpcomingTimes(upcomingTimesData);
      } catch (error) {
        console.error("Error fetching upcoming times:", error);
      }
    };

    fetchUpcomingTimes();
  }, [user_id]);

  return (
    <div className="row" style={{ margin: "20px 60px" }}>
      <h4 style={{ color: "white" }}>Upcoming</h4>
      <div className="step-container">
        {upcomingTimes.map((upcomingTime, index) => (
          <div key={index} className="step">{`${upcomingTime}`}</div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventTimerBar;
