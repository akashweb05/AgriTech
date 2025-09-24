import { NavLink, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  return (
    <header className="backdrop-blur-md bg-green-800/70 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo / Title */}
        <div 
          onClick={() => navigate("/admin")}
          className="text-center sm:text-left cursor-pointer"
        >
          <h1 className="text-2xl font-extrabold tracking-wide">
            🌿 Admin Dashboard
          </h1>
          <p className="text-sm opacity-90">Manage crops & pulses</p>
        </div>

        {/* Navigation */}
        <nav className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-2 sm:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full bg-white text-green-800 shadow"
                : "px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            }
          >
            User Dashboard
          </NavLink>

          <NavLink
            to="/admin/crops"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full bg-white text-green-800 shadow"
                : "px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            }
          >
            Crops
          </NavLink>

          <NavLink
            to="/admin/pulses"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full bg-white text-green-800 shadow"
                : "px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            }
          >
            Pulses
          </NavLink>
        </nav>
      </div>
    </header>
    
  );
}
