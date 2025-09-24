import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";

export default function PulsesAdmin() {
  const [pulses, setPulses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    sowingTime: "",
    yield: "",
    seedQuantity: "",
    temperature: "",
    irrigation: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPulses();
  }, []);

  const fetchPulses = async () => {
    try {
      const res = await axios.get("https://localhost:7051/api/pulses");
      setPulses(res.data);
    } catch (error) {
      console.error("Error fetching pulses:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // Update existing pulse
        await axios.put(`https://localhost:7051/api/pulses/${form.id}`, form);
      } else {
        // Add new pulse
        await axios.post("https://localhost:7051/api/pulses", form);
      }

      // Reset form
      setForm({
        name: "",
        sowingTime: "",
        yield: "",
        seedQuantity: "",
        temperature: "",
        irrigation: "",
      });
      setIsEditing(false);
      fetchPulses();
    } catch (error) {
      console.error("Error saving pulse:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7051/api/pulses/${id}`);
      fetchPulses();
    } catch (error) {
      console.error("Error deleting pulse:", error);
    }
  };

  const handleEdit = (pulse) => {
    setForm(pulse); // fill form with pulse data
    setIsEditing(true);
  };

  const handleCancel = () => {
    setForm({
      name: "",
      sowingTime: "",
      yield: "",
      seedQuantity: "",
      temperature: "",
      irrigation: "",
    });
    setIsEditing(false);
  };

 return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar on top */}
      <AdminLayout />

      {/* Page Content */}
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            {isEditing ? "Update Pulse" : "Add New Pulse"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Crop Name"
              className="border p-2 w-full rounded"
            />
            <input
              name="sowingTime"
              value={form.sowingTime}
              onChange={handleChange}
              placeholder="Sowing Time"
              className="border p-2 w-full rounded"
            />
            <input
              name="yield"
              value={form.yield}
              onChange={handleChange}
              placeholder="Yield"
              className="border p-2 w-full rounded"
            />
            <input
              name="seedQuantity"
              value={form.seedQuantity}
              onChange={handleChange}
              placeholder="Seed Quantity"
              className="border p-2 w-full rounded"
            />
            <input
              name="temperature"
              value={form.temperature}
              onChange={handleChange}
              placeholder="Temperature"
              className="border p-2 w-full rounded"
            />
            <input
              name="irrigation"
              value={form.irrigation}
              onChange={handleChange}
              placeholder="Irrigation"
              className="border p-2 w-full rounded"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                {isEditing ? "Update Pulse" : "Add Pulse"}
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
        </div>

        {/* Crop List Section */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Manage Pulses
          </h2>
          {pulses.length === 0 ? (
            <p className="text-gray-500">No pulses added yet.</p>
          ) : (
            <ul className="divide-y">
              {pulses.map((pulse) => (
                <li
                  key={pulse.id}
                  className="flex justify-between items-center py-3"
                >
                  <span className="font-medium">
                    {pulse.name}{" "}
                    <span className="text-sm text-gray-500">
                      ({pulse.sowingTime})
                    </span>
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(pulse)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pulses.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
