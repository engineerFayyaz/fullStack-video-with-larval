// Banners.js

import React from "react";
import "../../styles/index.css";
import "./Banners.css"; // Import the custom CSS file

const Banners = () => {
  const bannerVideos = [
    {
      url: "images/ourbrandtv.mp4", // Replace with the actual video URL
    },
    // Add more video items as needed
  ];

  return (
    <div className="container homePage-banner-carousel md:h-[fit-content]">
      <div className="row">
        <div className="col-md-12">
          {bannerVideos.length > 0 ? (
            <div className="video-wrapper">
              <video
                src={bannerVideos[0].url}
                alt={`Banner Video 1`}
                autoPlay
                loop
                muted
              />
              <div className="homePage-banner-carousel-content">
                <p className="text-left banner-title">
                  {/* {bannerVideos[0].movie} */}
                </p>
              </div>
            </div>
          ) : (
            <p>No banner videos found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banners;
