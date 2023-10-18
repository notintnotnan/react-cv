import React, { useState, useEffect, useContext } from "react";
import { apiDefautlInstance } from "../api";
import { AuthContext } from "../App";

export default function Admin() {
  const [authState, setAuthState] = useContext(AuthContext);
  const [formData, setFormData] = useState(
    Object.freeze({
      email: "",
      password: "",
    })
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {}, [authState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    authState
      ? apiDefautlInstance
          .post(process.env.REACT_APP_LOGOUT_API_URL, {
            refresh_token: localStorage.getItem("refresh_token"),
          })
          .then((response) => {
            localStorage.removeItem("access_tocken");
            localStorage.removeItem("refresh_token");
            apiDefautlInstance.defaults.headers["Authorization"] = null;
            setAuthState(false);
          })
          .catch((error) => {
            window.alert(
              `${error.response.status} - ${error.response.statusText}`
            );
          })
      : apiDefautlInstance
          .post(process.env.REACT_APP_GENERATE_TOKEN_API_URL, {
            email: formData.email,
            password: formData.password,
          })
          .then((response) => {
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            apiDefautlInstance.defaults.headers["Authorization"] =
              "JWT " + localStorage.getItem("access_token");

            setAuthState(true);
          })
          .catch((error) => {
            window.alert(
              `${error.response.status} - ${error.response.statusText}`
            );
          });
  };

  return (
    <>
      <div className="admin-container">
        <form className="admin-loginForm">
          <input
            className="admin-loginColor"
            type="color"
            disabled
            value={authState ? "#50C878" : "#C41E3A"}
          />
          <input
            type="email"
            id="email"
            name="email"
            readOnly={authState}
            placeholder="Email"
            onChange={handleChange}
            className="admin-loginInput"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            readOnly={authState}
            placeholder="Password"
            onChange={handleChange}
            className="admin-loginInput"
            required
          />
          <button type="submit" className="app-button" onClick={handleSubmit}>
            {authState ? "Logout" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
