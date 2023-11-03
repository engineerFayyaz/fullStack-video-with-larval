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
    <div className="h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">
      {bannerImages.length > 0 ? (
        <Carousel infiniteLoop showThumbs={false}>
          {bannerImages.map((url, index) => (
            <div key={index}>
              <div
                style={{
                  width: "100%", // Set a fixed width
                  height: "100%", // Set a fixed height
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={url}
                  alt={`Banner ${index + 1}`}
                  style={{ maxWidth: "100%", maxHeight: "60%" }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No banner images found.</p>
      )}
    </div>
  );
};

export default Banners;
