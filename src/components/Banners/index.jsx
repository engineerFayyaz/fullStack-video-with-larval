import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text, Img, RatingBar } from "components";
import "../../styles/index.css";
const Banners = () => {
  const bannerImages = [
    {
      url: "/banners/banner-1.jpg",
      channel: "HBO",
      movie: "The MEG2",
      runtime: "Runtime: 1250s",
      resolution: "Resolution: 4K",
      rating: 4.5, // Replace with the actual rating
    },
    {
      url: "/banners/banner2.jpg",
      channel: "our brand tv",
      movie: "The movies creator",
      runtime: "Runtime: 1250s",
      resolution: "Resolution: 4K",
      rating: 4.5, // Replace with the actual rating
    },
    {
      url: "/banners/doll-figures-3015495_1280.jpg",
      channel: "CGF",
      movie: "Cartoon Network",
      runtime: "Runtime: 1250s",
      resolution: "Resolution: 4K",
      rating: 4.5, // Replace with the actual rating
    },
    {
      url: "/banners/fantasy-4126847_1280.jpg",
      channel: "Fighter",
      movie: "The Figher KGF",
      runtime: "Runtime: 1250s",
      resolution: "Resolution: 4K",
      rating: 4.5, // Replace with the actual rating
    },
     
  ];

  return (
    <div className="container homePage-banner-carousel md:h-[fit-content]">
      <div className="row">
        <div className="col-md-12">
          {bannerImages.length > 0 ? (
            <Carousel showThumbs={true} showStatus={false} infiniteLoop autoPlay>
              {bannerImages.map((banner, index) => (
                <div key={index}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img
                      src={banner.url}
                      alt={`Banner ${index + 1}`}
                      style={{ maxWidth: "100%", maxHeight: "550px" }}
                    />
                    <div
                      // style={{
                      //   position: "absolute",
                      //   bottom: "60px",
                      //   left: "40px",
                      //   color: "white",
                      //   padding: "5px",
                      //   borderRadius: "5px",
                      // }}
                      className=" homePage-banner-carousel-content"
                    >
                      <p  className="text-left">{banner.channel}</p>
                      <p  className="text-left banner-title">{banner.movie}</p>
                      <p  className="text-left banner-time">{`${banner.resolution} | ${banner.runtime}`}</p>
                      <p className="flex flex-row items-center gap-4"> <RatingBar
                          className="flex justify-between w-[190px]"
                          // value={movieData.rating}
                          starCount={5}
                          activeColor="#f1c644"
                          size={30}
                        ></RatingBar>
                        <Text
                        className="text-white-A700 text-xl pt-1"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        5
                      </Text>
                        </p>
                  
                    </div>
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
