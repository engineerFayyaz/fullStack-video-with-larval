import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

const PlayerPage = () => {
  const location = useLocation();
  const videoUrl = new URLSearchParams(location.search).get("videoUrl");

  if (!videoUrl) {
    return <div>Video URL is missing. Please provide a valid video URL.</div>;
  }

  return (
    <div className="player">
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PlayerPage;
