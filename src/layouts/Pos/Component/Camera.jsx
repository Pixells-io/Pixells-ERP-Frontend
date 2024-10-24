import React, { useRef, useEffect, useState } from "react";

const Camera = ({ getCodeProduct }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    // Acceder a la cámara
    const getCameraFeed = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error al acceder a la cámara:", error);
      }
    };

    getCameraFeed();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takePhoto = () => {
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // Dibujar el fotograma del video en el canvas
    const ctx = canvasRef.current.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, width, height);

    // Convertir el contenido del canvas en una imagen (Data URL)
    const dataUrl = canvasRef.current.toDataURL("image/png");
    setPhoto(dataUrl);

    setTimeout(() => {
      getCodeProduct("4444");
    }, 4000);
  };

  return (
    <div className="h-[226px]">
      {!photo && (
        <>
          <video ref={videoRef} autoPlay playsInline className="h-full" />
          <div className="flex justify-center">
            <button
              type="button"
              className="mt-2 rounded-xl border border-[#44444F] px-2 py-1 font-roboto text-sm font-light text-[#44444F]"
              onClick={takePhoto}
            >
              Take Photo
            </button>
          </div>
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </>
      )}

      {photo && <img src={photo} alt="captured" className="h-full" />}
    </div>
  );
};

export default Camera;
