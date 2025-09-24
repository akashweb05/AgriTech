import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const isAdmin = user?.role === "Admin";

  return (
    <header className="backdrop-blur-md bg-green-800/70 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo & Tagline */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-wide">
            🌾 GS Productions
          </h1>
          <p className="text-sm opacity-90 ml-[15px]">
            Your intelligent farming assistant
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-2 sm:gap-3">
          {/* Public Links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full bg-white text-green-800 shadow"
                : "px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/qna"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full bg-white text-green-800 shadow"
                : "px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            }
          >
            Q&A
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full bg-white text-green-800 shadow"
                : "px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            }
          >
            Contact
          </NavLink>

          {/* Admin Dashboard Link */}
          {isAdmin && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-full bg-white text-green-800 shadow"
                  : "px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              }
            >
              Admin Dashboard
            </NavLink>
          )}

          {/* Auth Controls — ONLY for Admin */}
          {isAdmin && (
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
