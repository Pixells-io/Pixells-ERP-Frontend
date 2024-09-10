import React, { useRef, useState, useEffect } from "react";

const CustomAudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    // Update duration when audio loads
    const updateDuration = () => {
      setDuration(audio.duration);
    };

    // Update progress as audio plays
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newProgress = e.target.value;
    const newTime = (newProgress / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(newProgress);
  };

  return (
    <div className="flex">
      <audio ref={audioRef} src={audioSrc}></audio>

      {/* Play/Pause Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={togglePlayPause}
          className={`flex h-10 w-10 items-center justify-center rounded-full focus:outline-none ${
            isPlaying ? "bg-red-500" : "bg-green-500"
          } text-white`}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="h-2 w-full appearance-none rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Timer */}
      <div className="text-center text-gray-600">
        {Math.floor(duration / 60)}:
        {Math.floor(duration % 60)
          .toString()
          .padStart(2, "0")}
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
