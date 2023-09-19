import { createContext, useEffect } from "react";
import api from "../../api";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("@userToken");
    localStorage.removeItem("@user");
    setUser(null);
    setIsAuth(false);
    navigate("/");
  };

  const onLogin = async (data) => {
    setLoading(true);
    try {
      if (data.userType === "CLIENT") {
        await api
          .post("/auth/login", {
            email: data.email,
            password: data.password,
          })
          .then((res) => {
            setLoading(false);
            localStorage.setItem("@userToken", res.access_token);
            localStorage.setItem("@user", JSON.stringify(res.user));
            setIsAuth(true);
            setUser(res);
            getLocalStorage();
            navigate("/dashboard", { replace: true });
            toast.success("Login realizado com sucesso!");
          });
      } else {
        await api
          .post("/auth/barber/login", {
            email: data.email,
            password: data.password,
          })
          .then((res) => {
            setUser(res);
            setLoading(false);
            localStorage.setItem("@userToken", res.access_token);
            localStorage.setItem("@user", JSON.stringify(res.user));
            setIsAuth(true);
            navigate("/dashboard");
            toast.success("Login realizado com sucesso!");
          });
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const onRegister = async (data) => {
    setLoading(true);
    try {
      if (data.userType === "CLIENT") {
        await api
          .post("/users", {
            name: data.name,
            email: data.email,
            password: data.password,
          })
          .then(() => {
            setLoading(false);
            toast.success("Cadastro realizado com sucesso!");
          });
      } else {
        await api
          .post("/barbers", {
            name: data.name,
            email: data.email,
            password: data.password,
          })
          .then(() => {
            setLoading(false);
            toast.success("Cadastro realizado com sucesso!");
          });
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const getLocalStorage = useCallback(() => {
    const userToken = localStorage.getItem("@userToken");
    const user = localStorage.getItem("@user");
    if (userToken && user) {
      setUser(JSON.parse(user));
      setIsAuth(true);
      // navigate("/dashboard");
    }
  }, []);

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onRegister,
        loading,
        isAuth,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};
