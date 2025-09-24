import { useNavigate } from "react-router-dom";

export default function DairyFarming() {
  const navigate = useNavigate();

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <img
        src="/images/dairyFarming.jpg"
        alt="Dairy Farming"
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />
      <h1 className="text-3xl font-bold text-yellow-700 mb-4">Dairy Farming</h1>
      <p className="text-gray-700 text-lg mb-4">
        Dairy farming involves the breeding and management of dairy animals like cows and buffaloes for milk production. It's a major part of rural livelihoods and nutrition.
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Common breeds: Jersey, Holstein, Murrah</li>
        <li>Milk products: Cheese, Yogurt, Ghee, Butter</li>
        <li>Requires clean water, balanced nutrition, and hygiene</li>
        <li>Modern farms use milking machines and chilling tanks</li>
      </ul>

      <button
        onClick={() => navigate("/")}
        className="mt-6 inline-block text-blue-600 underline hover:text-blue-800"
      >
        ← Back to Home
      </button>
    </section>
  );
}
