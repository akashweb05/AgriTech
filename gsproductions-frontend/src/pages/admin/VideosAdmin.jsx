import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";

export default function VideosAdmin() {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    youtubeId: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get("https://localhost:7051/api/Videos");
      setVideos(res.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`https://localhost:7051/api/Videos/${form.id}`, form);
      } else {
        await axios.post("https://localhost:7051/api/Videos", form);
      }
      setForm({ title: "", description: "", youtubeId: "" });
      setIsEditing(false);
      fetchVideos();
    } catch (error) {
      console.error("Error saving video:", error);
    }
  };

  const handleEdit = (video) => {
    setForm(video);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7051/api/Videos/${id}`);
      fetchVideos();
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div className="p-6">
      <AdminLayout />
      <h2 className="text-2xl font-bold mb-4">🎬 Manage YouTube Videos</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 space-y-4 bg-gray-100 p-4 rounded-lg"
      >
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          placeholder="YouTube Video ID (e.g. dQw4w9WgXcQ)"
          value={form.youtubeId}
          onChange={(e) => setForm({ ...form, youtubeId: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update Video" : "Add Video"}
        </button>
      </form>

      {/* Video List */}
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="border rounded-lg shadow p-4 bg-white">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              allowFullScreen
            ></iframe>
            <h3 className="text-lg font-bold mt-2">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
            <div className="flex justify-between mt-3">
              <button
                onClick={() => handleEdit(video)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(video.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
