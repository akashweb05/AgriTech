import React, { useState, useEffect } from "react";
import axios from "axios";

export default function VideosGallery() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get("https://localhost:7051/api/videos");
      setVideos(res.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🎥 Our Video Library</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="border rounded-lg shadow bg-white overflow-hidden">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              allowFullScreen
            ></iframe>
            <div className="p-3">
              <h3 className="font-bold text-lg">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
