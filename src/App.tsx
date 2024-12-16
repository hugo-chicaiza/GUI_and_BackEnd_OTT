import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import VideoGrid from "./components/VideoGrid";
import Modal from "./components/Modal"; // Importar el componente Modal
import MovieSearch from "./components/MovieSearch"; // Importar el componente MovieSearch
import Login from "./components/Login"; // Importar el componente Login

const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el inicio de sesión

  const videos = [
    {
      id: 1,
      title: "Another Love",
      thumbnail: "/Imagenes/Pelicula1.jpeg",
      url: "/Video/Video1.mp4",
    },
    {
      id: 2,
      title: "Seven",
      thumbnail: "/Imagenes/Seven.jpeg",
      url: "/Video/Seven.mp4",
    },
    {
      id: 3,
      title: "Gravity Falls",
      thumbnail: "/Imagenes/Gravity.jpg",
      url: "/Video/Gravity.mp4",
    },
    {
      id: 4,
      title: "Coldplay Adventure Of A Lifetime",
      thumbnail: "/Imagenes/Coldplay_Adventure_Of_A_Lifetime.jpg",
      url: "/Video/Coldplay_Adventure_Of_A_Lifetime.mp4",
    },
    {
      id: 5,
      title: "Coldplay Viva La Vida",
      thumbnail: "/Imagenes/Coldplay_Viva_La_Vida.jpg",
      url: "/Video/Coldplay_Viva_La_Vida.mp4",
    },
    {
      id: 6,
      title: "JESSE & JOY ¡Corre!",
      thumbnail: "/Imagenes/JESSE_&_JOY_¡Corre!.jpeg",
      url: "/Video/JESSE_&_JOY_¡Corre!.mp4",
    },
    {
      id: 7,
      title: "THE SIMPSONS, BAD BUNNY TE DESEO LO MEJOR",
      thumbnail: "/Imagenes/THE_SIMPSONS,BAD_BUNNY_TE_DESEO_LO_MEJOR.jpg",
      url: "/Video/THE_SIMPSONS,BAD_BUNNY_TE_DESEO_LO_MEJOR.mp4",
    },
    {
      id: 8,
      title: "Trevor Daniel Falling",
      thumbnail: "/Imagenes/Trevor_Daniel_Falling.jpg",
      url: "/Video/Trevor_Daniel_Falling.mp4",
    },
    {
      id: 9,
      title: "twenty one pilots Ride",
      thumbnail: "/Imagenes/twenty_one_pilots_Ride.jpg",
      url: "/Video/twenty_one_pilots_Ride.mp4",
    },
    {
      id: 10,
      title: "twenty one pilots Stressed Out",
      thumbnail: "/Imagenes/twenty_one_pilots_Stressed_Out.jpg",
      url: "/Video/twenty_one_pilots_Stressed_Out.mp4",
    },
    {
      id: 11,
      title: "Attack on titan",
      thumbnail: "/Imagenes/Attack_on_titan.jpeg",
      url: "/Video/Attack_on_titan.mp4",
    },
    {
      id: 12,
      title: "Arcane",
      thumbnail: "/Imagenes/Arcane.jpg",
      url: "/Video/Arcane.mp4",
    },
  ];

  // Filtrar y ordenar videos según el término de búsqueda
  const filteredVideos = videos
    .filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      return (
        a.title.toLowerCase().indexOf(searchTerm.toLowerCase()) -
        b.title.toLowerCase().indexOf(searchTerm.toLowerCase())
      );
    });

  const handleLogin = () => {
    setIsLoggedIn(true); // Cambia el estado a "logueado"
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Cambia el estado a "deslogueado"
    setSelectedVideo(null); // Opcional: limpiar el video seleccionado al cerrar sesión
  };

  return (
    <div
      style={{
        padding: "100px",
        backgroundColor: "#141414",
        color: "#fff",
        position: "relative",
      }}
    >
      <Header />
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} /> // Muestra el componente de Login si no está logueado
      ) : (
        <>
          <MovieSearch onSearch={setSearchTerm} />
          <VideoGrid videos={filteredVideos} onVideoSelect={setSelectedVideo} />
          {selectedVideo && (
            <Modal
              videoUrl={selectedVideo}
              onClose={() => setSelectedVideo(null)}
            />
          )}
          <div style={{ position: "absolute", top: "0px", right: "20px" }}>
            <button onClick={handleLogout} style={{ marginTop: "20px" }}>
              Cerrar Sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
