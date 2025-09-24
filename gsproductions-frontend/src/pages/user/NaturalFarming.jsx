import { useNavigate } from "react-router-dom";

export default function NaturalFarming() {
  const navigate = useNavigate();

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <img
        src="/images/naturalfarming.jpg"
        alt="Natural Farming"
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />
      <h1 className="text-3xl font-bold text-emerald-700 mb-4">Natural Farming</h1>
      <p className="text-gray-700 text-lg mb-4">
        Natural farming is a chemical-free, sustainable farming method that relies entirely on natural processes. It emphasizes biodiversity, soil health, and minimal human intervention.
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Zero use of synthetic fertilizers or pesticides</li>
        <li>Focus on native seeds and soil microorganisms</li>
        <li>Often includes techniques like mulching and cow dung-based inputs</li>
        <li>Popularized by Subhash Palekar’s Zero Budget Natural Farming (ZBNF)</li>
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
