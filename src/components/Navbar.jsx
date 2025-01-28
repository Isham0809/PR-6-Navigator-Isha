import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

function Navbar() {
  const { isAuthenticated, logout } = useAuth(); 

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm fs-5 p-3" style={{backgroundColor:" #e3f2fd"}}>
      <div className="container">
        <NavLink className="navbar-brand fw-semibold fs-4" href="#">
          MyStore
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-semibold" : ""}`
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-semibold" : ""}`
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-semibold" : ""}`
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-semibold" : ""}`
                    }
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                <button type="button" className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-semibold" : ""}`
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-semibold"  : ""}`
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
