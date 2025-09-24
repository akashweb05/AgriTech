import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Agriculture() {
  const [activeTab, setActiveTab] = useState(null); // "crops" or "pulses"
  const [crops, setCrops] = useState([]);
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    if (activeTab === "crops") {
      fetchCrops();
    }
    if (activeTab === "pulses") {
      fetchPulses();
    }
  }, [activeTab]);

  const fetchCrops = async () => {
    try {
      const res = await axios.get("https://localhost:7051/api/crops");
      setCrops(res.data);
    } catch (error) {
      console.error("Error fetching crops:", error);
    }
  };

  const fetchPulses = async () => {
    try {
      const res = await axios.get("https://localhost:7051/api/pulses");
      setPulses(res.data);
    } catch (error) {
      console.error("Error fetching pulses:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-700">🌱 Agriculture Information</h2>

      {/* Cards for Crops & Pulses */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div
          className={`cursor-pointer border rounded-2xl shadow p-6 transition transform hover:scale-105 ${
            activeTab === "crops" ? "bg-green-100 border-green-500" : "bg-white"
          }`}
          onClick={() => setActiveTab("crops")}
        >
          <h3 className="text-xl font-semibold">🌾 Crops</h3>
          <p className="text-gray-600">View all crop details</p>
        </div>

        <div
          className={`cursor-pointer border rounded-2xl shadow p-6 transition transform hover:scale-105 ${
            activeTab === "pulses" ? "bg-yellow-100 border-yellow-500" : "bg-white"
          }`}
          onClick={() => setActiveTab("pulses")}
        >
          <h3 className="text-xl font-semibold">🥗 Pulses</h3>
          <p className="text-gray-600">View all pulse details</p>
        </div>
      </div>

      {/* Crops Section */}
      {activeTab === "crops" && (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-600">🌾 All Crops</h3>
          {crops.length === 0 ? (
            <p className="text-gray-500">No crops found.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {crops.map((crop) => (
                <div
                  key={crop.id}
                  className="border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold text-green-700 border-b pb-2 mb-3">
                    {crop.name}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">🌱 Sowing Time:</span> {crop.sowingTime}</p>
                    <p><span className="font-semibold">🌾 Yield:</span> {crop.yield}</p>
                    <p><span className="font-semibold">🌰 Seed Quantity:</span> {crop.seedQuantity}</p>
                    <p><span className="font-semibold">🌡️ Temperature:</span> {crop.temperature}</p>
                    <p><span className="font-semibold">💧 Irrigation:</span> {crop.irrigation}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pulses Section */}
      {activeTab === "pulses" && (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-600">🥗 All Pulses</h3>
          {pulses.length === 0 ? (
            <p className="text-gray-500">No pulses found.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {pulses.map((pulse) => (
                <div
                  key={pulse.id}
                  className="border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold text-yellow-700 border-b pb-2 mb-3">
                    {pulse.name}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">🌱 Sowing Time:</span> {pulse.sowingTime}</p>
                    <p><span className="font-semibold">🌾 Yield:</span> {pulse.yield}</p>
                    <p><span className="font-semibold">🌰 Seed Quantity:</span> {pulse.seedQuantity}</p>
                    <p><span className="font-semibold">🌡️ Temperature:</span> {pulse.temperature}</p>
                    <p><span className="font-semibold">💧 Irrigation:</span> {pulse.irrigation}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
