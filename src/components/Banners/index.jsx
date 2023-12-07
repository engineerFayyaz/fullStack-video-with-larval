import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text, RatingBar } from "components";
import "../../styles/index.css";

const Banners = () => {
  const bannerVideos = [
    {
      url: "images/ourbrandtv.mp4", // Replace with the actual video URL
      channel: "OBT",
      movie: "Our Brand Tv",
      runtime: "Runtime: 1250s",
      resolution: "Resolution: 4K",
      rating: 5, // Replace with the actual rating
    },
    // Add more video items as needed
  ];

  return (
    <div className="container homePage-banner-carousel md:h-[fit-content]">
    <div className="row">
      <div className="col-md-12">
        {bannerVideos.length > 0 ? (
          <Carousel showThumbs={true} showStatus={false} infiniteLoop autoPlay>
            {bannerVideos.map((video, index) => (
              <div
                key={index}
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <video
                  src={video.url}
                  alt={`Banner Video ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  autoPlay
                  loop
                  muted
                />
                <div className="homePage-banner-carousel-content">
                  <p className="text-left">{video.channel}</p>
                  <p className="text-left banner-title">{video.movie}</p>
                  <p className="text-left banner-time">{`${video.resolution} | ${video.runtime}`}</p>
                  <div className="flex flex-row items-center gap-4">
                    <RatingBar
                      className="flex justify-between w-[190px]"
                      // value={video.rating}
                      starCount={5}
                      activeColor="#f1c644"
                      size={30}
                    />
                    <Text
                      className="text-white-A700 text-xl pt-1"
                      size="txtPoppinsRegular20WhiteA700"
                    >
                      {video.rating}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <p>No banner videos found.</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default Banners;
