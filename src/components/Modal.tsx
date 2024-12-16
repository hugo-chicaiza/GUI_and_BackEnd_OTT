import React, { useRef, useEffect } from "react";

interface ModalProps {
  videoUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ videoUrl, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Referencia al video

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el video:", error);
      });
    }
  }, [videoUrl]); // Reproduce el video cada vez que cambia el videoUrl

  return (
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <button onClick={onClose} style={closeButtonStyles}>
          Cerrar
        </button>
        <video
          ref={videoRef} // Asigna la referencia al video
          controls
          style={{ width: "100%", height: "auto" }}
          src={videoUrl}
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    </div>
  );
};

const modalStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyles: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  width: "100%",
};

const closeButtonStyles: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "10px",
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Modal;
