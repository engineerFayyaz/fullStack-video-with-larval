import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ChannelBanner = () => {
  const bannerImages = [
    "/ChannelBanner/banner1.jpg",
    "/ChannelBanner/banner2.jpg",
    "/ChannelBanner/banner3.jpg",
    "/ChannelBanner/banner4.jpg",
    "/ChannelBanner/banner5.jpg",
    "/ChannelBanner/banner6.jpg",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {bannerImages.length > 0 ? (
            <Carousel showThumbs={true} showStatus={false} infiniteLoop autoPlay>
              {bannerImages.map((url, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={url}
                      alt={`Banner ${index + 1}`}
                      style={{ maxWidth: "100%", maxHeight: "530px" }}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <p>No banner images found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelBanner;
