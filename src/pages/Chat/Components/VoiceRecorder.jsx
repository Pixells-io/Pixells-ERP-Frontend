import { IonIcon } from "@ionic/react";
import { play, stop } from "ionicons/icons";
import React, { useState, useRef, useEffect } from "react";
import CustomAudioPlayer from "./Audio/CustomAudioPlayer";
import VoiceRecorderWithAudioPlayer from "./Audio/VoiceRecorderWithAudioPlayer";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunks = useRef([]);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      visualizeAudio();
    } else {
      cancelAnimationFrame(animationIdRef.current); // Stop animating when recording stops
    }
    return () => {
      cancelAnimationFrame(animationIdRef.current); // Clean up on component unmount
    };
  }, [isRecording]);

  const visualizeAudio = () => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");

    const draw = () => {
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;

      // Clear the canvas with a transparent background
      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      analyserRef.current.getByteTimeDomainData(dataArrayRef.current);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(255,255,255)";

      canvasCtx.beginPath();

      let sliceWidth = WIDTH / dataArrayRef.current.length;
      let x = 0;

      // Generate a smoother waveform with curved lines
      for (let i = 0; i < dataArrayRef.current.length; i++) {
        const v = dataArrayRef.current[i] / 128.0;
        const y = (v * HEIGHT) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();

      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Initialize audio context
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      audioContextRef.current = audioContext;

      // Create an analyser node
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      analyserRef.current = analyser;

      // Create a buffer to hold the data
      const bufferLength = analyser.fftSize;
      const dataArray = new Uint8Array(bufferLength);
      dataArrayRef.current = dataArray;

      // Connect the microphone stream to the analyser
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      sourceRef.current = source;

      // Set up MediaRecorder for recording
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
        audioChunks.current = []; // Clear the chunks for the next recording
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);

      visualizeAudio();
    } catch (err) {
      console.error("Error accessing microphone: ", err);
    }
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);

    // Stop the audio context
    audioContextRef.current.close();
  };

  return (
    <div className="flex items-center gap-2 pl-2">
      {/* Audio wave visualization */}
      {isRecording ? (
        <IonIcon
          icon={stop}
          className="size-6 shrink-0 text-[#BDBDBD] hover:text-red-500"
          onClick={isRecording ? stopRecording : startRecording}
        />
      ) : (
        <IonIcon
          icon={play}
          className="size-6 shrink-0 text-[#BDBDBD] hover:text-white"
          onClick={isRecording ? stopRecording : startRecording}
        />
      )}

      <canvas ref={canvasRef} width={400} height={40}></canvas>

      {/* Botón de grabar/detener */}

      {/* Reproducir la grabación si está disponible */}
      {audioURL && <audio controls src={audioURL}></audio>}
    </div>
  );
};

export default VoiceRecorder;
