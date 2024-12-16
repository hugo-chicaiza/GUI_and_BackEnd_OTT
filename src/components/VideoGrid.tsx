import React from "react";
import VideoCard from "./VideoCard";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  url: string; // Asegúrate de incluir la URL del video
}

interface VideoGridProps {
  videos: Video[];
  onVideoSelect: (url: string) => void; // Nueva prop para manejar la selección de video
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoSelect }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          thumbnail={video.thumbnail}
          onClick={() => onVideoSelect(video.url)} // Pasar la URL del video al hacer clic
        />
      ))}
    </div>
  );
};

export default VideoGrid;
