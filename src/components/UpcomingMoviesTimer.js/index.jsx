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
          if (responseData && responseData.data && Array.isArray(responseData.data) && responseData.data.length > 0) {
            const upcomingTimesData = responseData.data.map((movie) => movie.timeonly);
            setUpcomingTimes(upcomingTimesData);
          } else {
            console.error("No upcoming times in API response. Generating random schedule.");
            generateRandomSchedule();
          }
        } else {
          console.error("Error fetching upcoming times. Status:", response.status);
          generateRandomSchedule();
        }
      } catch (error) {
        console.error("Error fetching upcoming times:", error.message);
        generateRandomSchedule();
      }
    };

    const generateRandomSchedule = () => {
      const randomTimes = ["8:00PM", "9:30AM", "12:00PM", "1:00AM", "2:45AM"];
      
      // Get the current date and time
      const currentDate = new Date();
      
      // Generate random dates and times for the next 30 days
      const randomSchedule = Array.from({ length: 10 }, (_, index) => {
        const randomDate = new Date();
        randomDate.setDate(currentDate.getDate() + index + 1); // Increment the date
        const formattedDate = `${randomDate.getMonth() + 1}-${randomDate.getDate()}-${randomDate.getFullYear()}`;
        
        return {
          timeonly: randomTimes[index % randomTimes.length],
          date: formattedDate,
        };
      });

      setUpcomingTimes(randomSchedule);
    };

    fetchUpcomingTimes();
  }, [user_id]);

  return (
    <div className="row" style={{ margin: "20px 60px" }}>
      <h4 style={{ color: "white", marginLeft:"-59px",marginTop:"155px" }}>Upcoming</h4>
      <div className="step-container upcomong-time">
        {upcomingTimes.map((upcomingTime, index) => (
          <div key={index} className="step" title={`Date: ${upcomingTime.date}`}>
            {`${upcomingTime.timeonly}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventTimerBar;
