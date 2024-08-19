import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UpcomingEventTimerBar.css"; // Import custom styles

const UpcomingEventTimerBar = () => {
  const [upcomingTimes, setUpcomingTimes] = useState([]);

  useEffect(() => {
    const fetchUpcomingTimes = async () => {
      try {
        const response = await axios.get("https://ourbrandtv.com/mobile/public/api/schedule");

        if (response.status === 200) {
          const responseData = response.data;

          if (
            responseData &&
            responseData.data &&
            Array.isArray(responseData.data) &&
            responseData.data.length > 0
          ) {
            const upcomingTimesData = responseData.data.map((movie) => ({
              timeonly: movie.upcoming_datetime.slice(11, 16), // Extract time (HH:MM)
            }));
            setUpcomingTimes(upcomingTimesData);
          } else {
            generateRandomSchedule();
          }
        } else {
          generateRandomSchedule();
        }
      } catch (error) {
        console.error("Error fetching upcoming times:", error);
        generateRandomSchedule();
      }
    };

    const generateRandomSchedule = () => {
      const randomTimes = ["08:00", "09:30", "12:00", "13:00", "14:45", "16:00", "17:30"];
      const randomSchedule = randomTimes.map((time) => ({
        timeonly: time,
      }));
      setUpcomingTimes(randomSchedule);
    };

    fetchUpcomingTimes();
  }, []);

  // Group times into arrays of 6 without overlap
  const groupedTimes = [];
  for (let i = 0; i < upcomingTimes.length; i += 6) {
    groupedTimes.push(upcomingTimes.slice(i, i + 6));
  }

  return (
    <Container fluid className="upcoming-container" style={{marginTop:"160px"}}>
      <h4 className="upcoming-title text-center " style={{color:"white"}}>Upcoming</h4>
      <Row className="justify-content-center">
        {groupedTimes.length > 0 ? (
          <Col xs={12}>
            <Carousel id="upcomingCarousel" interval={null} indicators={false} controls={true}>
              {groupedTimes.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {group.map((upcomingTime, subIndex) => (
                      <div key={subIndex} className="step d-flex justify-content-center align-items-center">
                        {upcomingTime.timeonly}
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        ) : (
          <Col xs={12} className="no-times text-center">
            No upcoming times available
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default UpcomingEventTimerBar;
