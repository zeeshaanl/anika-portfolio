import React  from "react";
import YouTube from "react-youtube";

import "./VideoPlayer.css";

const opts = {
  width: "100%",
  height: "90%",
};
const VideoPlayer = ({ videoId }) =>
  <div className='c-video-player'>
    <YouTube
      videoId={videoId}
      opts={opts}
    />
  </div>;

export default VideoPlayer;