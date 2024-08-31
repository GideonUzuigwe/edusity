import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  function closePlayer(e) {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }

  return (
    <div
      ref={player}
      className={`video_player ${!playState && "hide"}`}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
