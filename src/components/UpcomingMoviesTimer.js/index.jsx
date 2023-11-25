import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "redux/UserContext";

const UpcomingEventTimerBar = () => {
  const { user_id } = useUser();

  const [upcomingTimes, setUpcomingTimes] = useState([]);

  useEffect(() => {
    const fetchUpcomingTimes = async () => {
      try {
        const userIdToUse = user_id || 67 || 1 || 2 || 3 || 4;
        const response = await axios.get(`https://ourbrandtv.com/mobile/public/api/upcoming_movie/${userIdToUse}`);
        
        if (response.status === 200) {
          const responseData = response.data;

          // Check if responseData and responseData.data are present and are arrays
          if (responseData && responseData.data && Array.isArray(responseData.data)) {
            const upcomingTimesData = responseData.data.map((movie) => movie.timeonly);
            setUpcomingTimes(upcomingTimesData);
          } else {
            console.error("Invalid data structure in API response:", responseData);
          }
        } else {
          console.error("Error fetching upcoming times. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching upcoming times:", error.message);
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
