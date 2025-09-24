import { Link, useNavigate } from "react-router-dom";
import { Leaf, Bean, Home } from "lucide-react"; // optional icons
import AdminLayout from "../../components/admin/AdminLayout";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminLayout />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-green-700 mb-6">Admin Dashboard</h1>

        {/* Dashboard Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/admin/crops"
            className="flex items-center gap-3 p-6 border rounded-xl bg-green-100 hover:bg-green-200 transition"
          >
            <Leaf className="text-green-700" />
            <span className="font-medium">Manage Crops</span>
          </Link>

          <Link
            to="/admin/pulses"
            className="flex items-center gap-3 p-6 border rounded-xl bg-blue-100 hover:bg-blue-200 transition"
          >
            <Bean className="text-blue-700" />
            <span className="font-medium">Manage Pulses</span>
          </Link>

          {/* Future sections */}
          <Link
            to="/admin/dairy"
            className="flex items-center gap-3 p-6 border rounded-xl bg-yellow-100 hover:bg-yellow-200 transition"
          >
            🐄 <span className="font-medium">Manage Dairy</span>
          </Link>

          <Link
            to="/admin/fruits"
            className="flex items-center gap-3 p-6 border rounded-xl bg-purple-100 hover:bg-purple-200 transition"
          >
            🌱 <span className="font-medium">Manage Fruits</span>
          </Link>

          <Link
            to="/admin/vegetables"
            className="flex items-center gap-3 p-6 border rounded-xl bg-purple-100 hover:bg-purple-200 transition"
          >
            🌱 <span className="font-medium">Manage Vegetables</span>
          </Link>

          <Link
            to="/admin/videos"
            className="flex items-center gap-3 p-6 border rounded-xl bg-purple-100 hover:bg-purple-200 transition"
          >
            🌱 <span className="font-medium">Manage Videos</span>
          </Link>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          <Home size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
}

