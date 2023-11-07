import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { ScreenUser } from "../ScreenUser";

export const FormComponent = () => {
  const initialForm = {
    userName: "noxOpio",
    email: "",
    password: "99999",
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simulación de autenticación
    if (userName === "noxOpio" && password === "99999") {
      setLoggedIn(true);
      setError(""); // Reiniciar cualquier mensaje de error
    } else {
      setError("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setError(""); // Reiniciar cualquier mensaje de error al cerrar sesión
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { userName, email, password } = formState;

  const onSubmit = (event) => {
    event.preventDefault();

    if (userName && password) {
      handleLogin();
    } else {
      setError("Nombre de usuario y contraseña son campos obligatorios.");
    }
  };

  return (
    <>
      {!loggedIn ? (
        <form className="form-container" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="Nombre de usuario"
              value={userName}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={onInputChange}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="button" onClick={handleLogin} className="btn btn-primary">
            INICIO
          </button>
        </form>
      ) : (
        <div>
          <p>Bienvenido, has iniciado sesión como {userName}.</p>
          <button onClick={handleLogout} className="btn btn-secondary">
            Cerrar sesión
          </button>
          <ScreenUser></ScreenUser>
        </div>
      )}
    </>
  );
};
