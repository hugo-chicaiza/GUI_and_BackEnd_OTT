import React from "react";

interface VideoPlayerProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onClose }) => {
  return (
    <div style={{ position: "relative", marginTop: "20px" }}>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px",
          backgroundColor: "#ff0000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cerrar
      </button>
      <video controls style={{ width: "100%", height: "auto" }} src={videoUrl}>
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
