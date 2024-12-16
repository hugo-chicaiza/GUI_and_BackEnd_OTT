import express from "express";
import path from "path";

const app = express();
const port = 3000;

// Servir archivos estáticos de la carpeta 'build' (donde se compila tu aplicación React)
app.use(express.static(path.join(__dirname, "build")));

// Ruta para manejar todas las solicitudes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Iniciar el servidor
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${port}`);
});
