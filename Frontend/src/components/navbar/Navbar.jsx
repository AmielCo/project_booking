import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

 

  const navigateToLogin = () => {
    navigate("/login");
  };
   const navigateToRegister = () => {
     navigate("/register");
   };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem(user);
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            {user.username}
            <button type="button" onClick={logout} className="navButton">
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button
              type="button"
              onClick={navigateToRegister}
              className="navButton"
            >
              Register
            </button>
            <button
              type="button"
              onClick={navigateToLogin}
              className="navButton"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
