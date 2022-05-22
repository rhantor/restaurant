import React, { useRef, useState } from "react";

import "./Intro.css";
import { meal } from "../../constants";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Intro = () => {
  const videoRef = useRef();
  const [videoControl, setVideoControl] = useState(true);

  const handleVideoControl = () => {
    setVideoControl(!videoControl);

    if (videoControl) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <>
      <div className="app__video">
        <video
          src={meal}
          autoPlay
          type="video/mp4"
          loop
          controls={false}
          muted
          ref={videoRef}
        />
        <div className={`video-overlay flex__center ${videoControl && 'remove-overlay'}`}>
          <div className="video-controlsBtn">
            <div
              className="controls-circle flex__center"
              onClick={handleVideoControl}
            >
              {videoControl ? (
                <PauseOutlinedIcon
                  style={{ color: "white" }}
                  fontSize="large"
                />
              ) : (
                <PlayArrowIcon style={{ color: "white" }} fontSize="large" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
