import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import Header1 from "components/Header1";


const PlayerPage = () => {
  const location = useLocation();
  const videoUrl = new URLSearchParams(location.search).get("videoUrl");

  if (!videoUrl) {
    return <div>Video URL is missing. Please provide a valid video URL.</div>;
  }

  return (
    <div className="bg-gray-900  w-full font-opensans items-center justify-start mx-auto py-2">
   <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full p-1" 
   style={{ position: "sticky", top: 0}} />
    <div className="player" style={{height:"617px"}}>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
    </div>
  );
};

export default PlayerPage;
