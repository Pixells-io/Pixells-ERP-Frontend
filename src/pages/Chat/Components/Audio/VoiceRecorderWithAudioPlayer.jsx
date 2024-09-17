import React, { useRef, useState, useEffect } from "react";

const VoiceRecorderWithAudioPlayer = () => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunks = useRef([]);
  const [progress, setProgress] = useState(0);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (isRecording || isPlaying) {
      visualizeAudio();
    } else {
      cancelAnimationFrame(animationIdRef.current);
    }

    return () => {
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [isRecording, isPlaying]);

  const visualizeAudio = () => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const audio = audioRef.current;

    const draw = () => {
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT); // Clear canvas

      if (analyserRef.current && isRecording) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current); // Get frequency data

        let barWidth = WIDTH / dataArrayRef.current.length;
        let x = 0;

        // Generate rectangular spikes during recording
        for (let i = 0; i < dataArrayRef.current.length; i++) {
          const barHeight = (dataArrayRef.current[i] / 255) * HEIGHT;

          canvasCtx.fillStyle = "rgb(0, 150, 0)"; // WhatsApp-like green color
          canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth - 1, barHeight);
          x += barWidth;
        }
      }

      if (!isRecording && audio) {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progressPercent = (currentTime / duration) * 100;

        analyserRef.current.getByteFrequencyData(dataArrayRef.current); // Get frequency data

        let barWidth = WIDTH / dataArrayRef.current.length;
        let x = 0;

        // Generate rectangular spikes for visualization during playback
        for (let i = 0; i < dataArrayRef.current.length; i++) {
          const barHeight = (dataArrayRef.current[i] / 255) * HEIGHT;

          // Change color of the bars based on progress
          canvasCtx.fillStyle =
            (x / WIDTH) * 100 < progressPercent
              ? "rgba(0, 150, 0, 1)" // Filled part of the progress
              : "rgba(0, 150, 0, 0.2)"; // Unfilled part of the progress

          canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth - 1, barHeight);
          x += barWidth;
        }
      }

      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Initialize audio context and analyser
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      dataArrayRef.current = dataArray;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunks.current = [];
        setIsRecording(false);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone: ", err);
    }
  };

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      setProgress((currentTime / duration) * 100);
    };

    audio?.addEventListener("timeupdate", updateProgress);

    return () => {
      audio?.removeEventListener("timeupdate", updateProgress);
    };
  }, [audioURL]);

  return (
    <div className="mx-auto w-full max-w-md space-y-4 rounded-lg bg-white p-4 shadow-md">
      <h2>Voice Recorder</h2>

      {/* Visualization of audio waveform */}
      <canvas
        ref={canvasRef}
        width={400}
        height={100}
        className="my-4"
      ></canvas>

      {/* Record / Stop Recording Button */}
      {!audioURL && (
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`rounded px-4 py-2 ${isRecording ? "bg-red-500" : "bg-blue-500"} text-white`}
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
      )}

      {/* Audio Player and Progress Visualization */}
      {audioURL && (
        <>
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

          <audio
            ref={audioRef}
            src={audioURL}
            onEnded={() => setIsPlaying(false)}
          />
        </>
      )}
    </div>
  );
};

export default VoiceRecorderWithAudioPlayer;
