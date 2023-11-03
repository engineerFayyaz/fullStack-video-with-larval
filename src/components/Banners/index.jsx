import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banners = () => {
  const bannerImages = [
    "/banners/banner-1.jpg",
    "/banners/banner2.jpg",
    "/banners/doll-figures-3015495_1280.jpg",
    "/banners/fantasy-4126847_1280.jpg",
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
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
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

export default Banners;
