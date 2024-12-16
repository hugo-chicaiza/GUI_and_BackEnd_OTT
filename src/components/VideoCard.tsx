import React from "react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  onClick: () => void; // Prop para manejar el clic
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, onClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s", // Efecto de transición
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Sombra para dar profundidad
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)"; // Efecto de hover
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)"; // Aumentar sombra al hacer hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)"; // Restablecer sombra
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }} // Mantener la proporción de la imagen
      />
      <h3 style={{ margin: "8px", fontSize: "1.2em", color: "#fff" }}>
        {title}
      </h3>
    </div>
  );
};

export default VideoCard;
