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

          if (responseData && responseData.data && Array.isArray(responseData.data) && responseData.data.length > 0) {
            const upcomingTimesData = responseData.data.map((movie) => ({
              timeonly: movie.timeonly,
              date: movie.date
            }));
            setUpcomingTimes(upcomingTimesData);
          } else {
            generateRandomSchedule();
          }
        } else {
          generateRandomSchedule();
        }
      } catch (error) {
        generateRandomSchedule();
      }
    };

    const generateRandomSchedule = () => {
      const randomTimes = ["8:00PM", "9:30AM", "12:00PM", "1:00AM", "2:45AM"];
      const currentDate = new Date();
      const randomSchedule = Array.from({ length: 10 }, (_, index) => {
        const randomDate = new Date();
        randomDate.setDate(currentDate.getDate() + index + 1);
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
    <div className="row" style={{ margin: "20px 0px 0px 40px " }}>
      <h4 style={{ color: "white", fontWeight: "700", fontSize: "20px", marginLeft: "-30px", marginTop: "155px", marginBottom: "15px" }}>Upcoming</h4>
      <div className="step-container upcomong-time">
        {upcomingTimes && upcomingTimes.length > 0 && upcomingTimes.map((upcomingTime, index) => (
          <div key={index} className="step" title={`Date: ${upcomingTime.date}`}>
            {`${upcomingTime.timeonly}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventTimerBar;
