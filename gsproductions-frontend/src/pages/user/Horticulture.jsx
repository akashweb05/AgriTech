import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Horticulture() {
  const [activeTab, setActiveTab] = useState(null); // "fruits" or "vegetables"
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    if (activeTab === "fruits") {
      fetchFruits();
    }
    if (activeTab === "vegetables") {
      fetchVegetables();
    }
  }, [activeTab]);

  const fetchFruits = async () => {
    try {
      const res = await axios.get("https://localhost:7051/api/Fruits"); // ✅ backend fruits API
      setFruits(res.data);
    } catch (error) {
      console.error("Error fetching fruits:", error);
    }
  };

  const fetchVegetables = async () => {
    try {
      const res = await axios.get("https://localhost:7051/api/Vegetables"); // ✅ backend vegetables API
      setVegetables(res.data);
    } catch (error) {
      console.error("Error fetching vegetables:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-700">
        🍎🥦 Horticulture Information
      </h2>

      {/* Cards for Fruits & Vegetables */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div
          className={`cursor-pointer border rounded-2xl shadow p-6 transition transform hover:scale-105 ${
            activeTab === "fruits" ? "bg-red-100 border-red-500" : "bg-white"
          }`}
          onClick={() => setActiveTab("fruits")}
        >
          <h3 className="text-xl font-semibold">🍎 Fruits</h3>
          <p className="text-gray-600">View all fruit details</p>
        </div>

        <div
          className={`cursor-pointer border rounded-2xl shadow p-6 transition transform hover:scale-105 ${
            activeTab === "vegetables"
              ? "bg-green-100 border-green-500"
              : "bg-white"
          }`}
          onClick={() => setActiveTab("vegetables")}
        >
          <h3 className="text-xl font-semibold">🥦 Vegetables</h3>
          <p className="text-gray-600">View all vegetable details</p>
        </div>
      </div>

      {/* Fruits Section */}
      {activeTab === "fruits" && (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-600">🍎 All Fruits</h3>
          {fruits.length === 0 ? (
            <p className="text-gray-500">No fruits found.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {fruits.map((fruit) => (
                <div
                  key={fruit.id}
                  className="border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold text-red-700 border-b pb-2 mb-3">
                    {fruit.name}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">🍂 Season:</span>{" "}
                      {fruit.season}
                    </p>
                    <p>
                      <span className="font-semibold">🌱 Variety:</span>{" "}
                      {fruit.variety}
                    </p>
                    <p>
                      <span className="font-semibold">🌍 Soil Type:</span>{" "}
                      {fruit.soilType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Vegetables Section */}
      {activeTab === "vegetables" && (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-600">
            🥦 All Vegetables
          </h3>
          {vegetables.length === 0 ? (
            <p className="text-gray-500">No vegetables found.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {vegetables.map((veg) => (
                <div
                  key={veg.id}
                  className="border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold text-green-700 border-b pb-2 mb-3">
                    {veg.name}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">🍂 Season:</span>{" "}
                      {veg.season}
                    </p>
                    <p>
                      <span className="font-semibold">🌱 Variety:</span>{" "}
                      {veg.variety}
                    </p>
                    <p>
                      <span className="font-semibold">🌍 Soil Type:</span>{" "}
                      {veg.soilType}
                    </p>
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
