import { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

export default function VegetablesAdmin() {
  const [vegetables, setVegetables] = useState([]);
  const [form, setForm] = useState({
    name: "",
    season: "",
    variety: "",
    soilType: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all vegetables
  useEffect(() => {
    fetch("https://localhost:7051/api/Vegetables")
      .then((res) => res.json())
      .then((data) => setVegetables(data))
      .catch((err) => console.error("Error fetching vegetables:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      await fetch(`https://localhost:7051/api/Vegetables/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("https://localhost:7051/api/Vegetables", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    // Refresh list
    const updated = await fetch("https://localhost:7051/api/Vegetables").then((res) => res.json());
    setVegetables(updated);

    setForm({ name: "", season: "", variety: "", soilType: "" });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (vegetable) => {
    setForm(vegetable);
    setIsEditing(true);
    setEditId(vegetable.id);
  };

  const handleDelete = async (id) => {
    await fetch(`https://localhost:7051/api/Vegetables/${id}`, { method: "DELETE" });
    setVegetables(vegetables.filter((v) => v.id !== id));
  };

  const handleCancel = () => {
    setForm({ name: "", season: "", variety: "", soilType: "" });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminLayout />

      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            {isEditing ? "Update Vegetable" : "Add New Vegetable"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Vegetable Name"
              className="border p-2 w-full rounded"
            />
            <input
              name="season"
              value={form.season}
              onChange={handleChange}
              placeholder="Season"
              className="border p-2 w-full rounded"
            />
            <input
              name="variety"
              value={form.variety}
              onChange={handleChange}
              placeholder="Variety"
              className="border p-2 w-full rounded"
            />
            <input
              name="soilType"
              value={form.soilType}
              onChange={handleChange}
              placeholder="Soil Type"
              className="border p-2 w-full rounded"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                {isEditing ? "Update Vegetable" : "Add Vegetable"}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <ul>
            {vegetables.map((veg) => (
              <li
                key={veg.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>
                  {veg.name} ({veg.season})
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(veg)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(veg.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
