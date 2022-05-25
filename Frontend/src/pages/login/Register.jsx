import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
      password: undefined,
    email:undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
        navigate("/");
        if (!res.data.error) {
             const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
    };
    
      const navigateToLogin = () => {
        navigate("/login");
    };
    
       const navigateToHome= () => {
         navigate("/");
       };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button className="lButton" onClick={navigateToLogin}>
          Already registered?
        </button>
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        <button className="lButton" onClick={navigateToHome}>
          To Home Page
        </button>
        {error && (
          <span style={{ color: "red" }}>
            Somehting went wrong check your data or login.
          </span>
        )}
      </div>
    </div>
  );
};

export default Register;
