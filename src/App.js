import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import Popup from "./components/popup.component";
import AboutJawPopup from "./components/about-jaw-popup.component";

function App() {
  const playerRef = useRef(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // Show the popup when the video reaches 5 seconds
  const handleProgress = (state) => {
    setPlayedSeconds(state.playedSeconds);
  };

  const isJawRange = () => {
    return playedSeconds >= 2 && playedSeconds < 10;
  };
  const handelJawVideoContinue = () => {
    setIsPlaying(true);
  };
  const handelJawVideoRestart = () => {
    playerRef.current.seekTo(0, "seconds");
    setIsPlaying(true);
  };
  return (
    <div className="background">
      <div className="video-wrapper relative">
        <ReactPlayer
          ref={playerRef}
          url="/video.mp4"
          playing={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls={true}
          onProgress={handleProgress}
          width="100%"
          height="100%"
          progressInterval={16}
        />
        {/* should show jaw popup */}
        {isJawRange() && (
          <AboutJawPopup
            onContinueVideo={handelJawVideoContinue}
            onRestartVideo={handelJawVideoRestart}
            stopPlaying={() => setIsPlaying(false)}
          />
        )}
      </div>
      {playedSeconds}
    </div>
  );
}

export default App;
