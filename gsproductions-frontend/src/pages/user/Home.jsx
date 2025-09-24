import { useNavigate } from "react-router-dom";
import {
  SunIcon,
  GlobeAltIcon,
  BeakerIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Agriculture",
      image: "/images/agriculture.jpg",
      path: "/agriculture",
      icon: <SunIcon className="w-6 h-6 text-green-600 mb-2" />,
    },
    {
      title: "Natural Farming",
      image: "/images/naturalfarming.jpg",
      path: "/naturalFarming",
      icon: <GlobeAltIcon className="w-6 h-6 text-green-700 mb-2" />,
    },
    {
      title: "Dairy Farming",
      image: "/images/dairyFarming.jpg",
      path: "/dairy",
      icon: <BeakerIcon className="w-6 h-6 text-yellow-500 mb-2" />,
    },
    {
      title: "Horticulture",
      image: "/images/horticulture.jpg",
      path: "/horticulture",
      icon: <SparklesIcon className="w-6 h-6 text-pink-500 mb-2" />,
    },
  ];

  return (
    <section className="text-center mt-6 px-4">
      <h2 className="text-3xl font-bold mb-2">Welcome to GS Productions</h2>
      <p className="text-sm text-gray-600 mb-8">Your intelligent farming assistant</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.path)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              {card.icon}
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
