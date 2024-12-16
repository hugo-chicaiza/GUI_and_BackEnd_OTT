import React, { useState } from "react";
import users from "./usuarios.json"; // Asegúrate de que la ruta sea correcta
import "./Login.css"; // Importa el archivo CSS
import "./Header.css";
import Swal from "sweetalert2"; // Importa SweetAlert2

interface User {
  username: string;
  password: string;
  isLoggedIn?: boolean; // Opcional, si lo usas
}

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar el registro
  const [loggedInUsers, setLoggedInUsers] = useState<User[]>([]); // Estado para usuarios conectados

  const validateUser = (inputUsername: string, inputPassword: string) => {
    return users.some(
      (user: User) =>
        user.username === inputUsername && user.password === inputPassword
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar si el usuario es Admin
    if (username === "Admin" && password === "Admin") {
      const currentFile = "Nombre del archivo"; // Aquí deberías obtener el archivo actual

      // Mostrar ventana emergente con la información
      Swal.fire({
        title: "Usuarios Conectados",
        html: `<p>Usuarios: ${loggedInUsers
          .map((user) => user.username)
          .join(", ")}</p>
               <p>Archivo Reproduciendo: ${currentFile}</p>`,
        icon: "info",
        confirmButtonText: "Cerrar",
      });

      onLogin();
      setError("");
    } else if (validateUser(username, password)) {
      // Agregar el usuario a la lista de usuarios conectados
      const user = users.find((user: User) => user.username === username);
      if (user) {
        user.isLoggedIn = true; // Marcar como conectado
        setLoggedInUsers((prev) => [...prev, user]); // Actualizar la lista de usuarios conectados
      }
      onLogin();
      setError("");
    } else {
      setError("Usuario o contraseña inválidos.");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar si el nombre de usuario ya existe
    const userExists = users.some((user: User) => user.username === username);
    if (userExists) {
      setError("El nombre de usuario ya está registrado."); // Mensaje de error
      return;
    }

    // Validar la contraseña (puedes agregar más validaciones aquí)
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Agregar el nuevo usuario a usuarios.json (esto solo modifica el array en memoria)
    users.push({ username, password, isLoggedIn: false }); // Agregar isLoggedIn
    console.log("Usuario registrado:", { username, password }); // Aquí deberías enviar los datos a tu backend

    // Limpiar los campos
    setUsername("");
    setPassword("");
    setIsRegistering(false); // Volver al formulario de inicio de sesión
    setError(""); // Limpiar el mensaje de error
  };

  // Definir el tamaño del logo aquí
  const logoSize = 300; // Tamaño del logo en píxeles

  return (
    <div className="login-container">
      <img
        src="/Imagenes/Logo.jpg"
        alt="Logo"
        className="logo"
        style={{ width: `${logoSize}px`, height: `${logoSize}px` }} // Aplicar tamaño fijo
      />
      <form
        onSubmit={isRegistering ? handleRegister : handleSubmit}
        className="form"
      >
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Mostrar mensaje de error */}
        <button type="submit">
          {isRegistering ? "Registrarse" : "Iniciar Sesión"}
        </button>
        {isRegistering ? (
          <button
            onClick={() => setIsRegistering(false)}
            className="cancel-button"
          >
            Volver a Iniciar Sesión
          </button>
        ) : (
          <button
            onClick={() => setIsRegistering(true)}
            className="register-button"
          >
            Registrarse
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
