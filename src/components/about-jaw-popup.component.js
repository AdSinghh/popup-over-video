import React, { useState } from "react";
import Popup from "./popup.component";

const AboutJawPopup = ({ onRestartVideo, onContinueVideo, stopPlaying }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleRestartVideo = () => {
    setIsActive(false);
    setSelectedOption(null);
    onRestartVideo();
  };
  const handleContinueVideo = () => {
    setIsActive(false);
    setSelectedOption(null);
    onContinueVideo();
  };
  const handleStopPlaying = () => {
    stopPlaying();
    setIsActive(true);
  };
  return (
    <>
      <button className="round-btn" onClick={handleStopPlaying}>
        <div className="round-btn-child" />
      </button>
      <Popup isActive={isActive}>
        <h3 className="text-lg font-bold mb-5">
          How many Tooth we have in our Mouth ?
        </h3>
        <div className="flex gap-4 justify-center">
          <button
            className={` text-slate-50 text-2xl w-16 h-16 rounded-full ${
              selectedOption
                ? selectedOption === 43
                  ? "bg-red-700"
                  : "bg-slate-600"
                : "bg-slate-800"
            }`}
            onClick={() => setSelectedOption(43)}
            disabled={!!selectedOption}
          >
            43
          </button>
          <button
            className={` text-slate-50 text-2xl w-16 h-16 rounded-full ${
              selectedOption
                ? selectedOption === 32
                  ? "bg-green-700"
                  : "bg-slate-600"
                : "bg-slate-800"
            }`}
            onClick={() => setSelectedOption(32)}
            disabled={!!selectedOption}
          >
            32
          </button>
          <button
            className={` text-slate-50 text-2xl w-16 h-16 rounded-full ${       selectedOption
                ? selectedOption === 21
                  ? "bg-red-700"
                  : "bg-slate-600"
                : "bg-slate-800"}`}
            onClick={() => setSelectedOption(21)}
            disabled={!!selectedOption}
          >
            21
          </button>
        </div>
        <div className=" flex justify-center">
          {selectedOption === 32 && (
            <button
              className="bg-slate-800 px-5 py-3 text-slate-50 rounded-md mt-5"
              onClick={handleContinueVideo}
            >
              Continue Video
            </button>
          )}
          {(selectedOption === 21 || selectedOption === 43) && (
            <button
              className="bg-slate-800 px-5 py-3 text-slate-50 rounded-md mx-auto mt-5"
              onClick={handleRestartVideo}
            >
              Restart Video
            </button>
          )}
        </div>
      </Popup>
    </>
  );
};

export default AboutJawPopup;
