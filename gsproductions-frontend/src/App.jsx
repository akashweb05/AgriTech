import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/user/Home";
import Contact from "./pages/user/Contact";
import Layout from "./components/Layout";
import QnAPage from "./pages/user/QnA";
import Agriculture from "./pages/user/Agriculture";
import NaturalFarming from "./pages/user/NaturalFarming";
import DairyFarming from "./pages/user/DairyFarming";
import Horticulture from "./pages/user/Horticulture";
import Login from "./pages/admin/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CropsAdmin from "./pages/admin/CropsAdmin";
import PulsesAdmin from "./pages/admin/PulsesAdmin";
import FruitsAdmin from "./pages/admin/FruitsAdmin";
import VegetablesAdmin from "./pages/admin/VegetablesAdmin";
import VideosAdmin from "./pages/admin/VideosAdmin";

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL ?? '/login';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="qna" element={<QnAPage />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/naturalFarming" element={<NaturalFarming />} />
          <Route path="/dairy" element={<DairyFarming />} />
          <Route path="/horticulture" element={<Horticulture />} />
        </Route>
        <Route path={LOGIN_URL} element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="Admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/crops"
          element={
            <ProtectedRoute role="Admin">
              <CropsAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/pulses"
          element={
            <ProtectedRoute role="Admin">
              <PulsesAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/fruits"
          element={
            <ProtectedRoute role="Admin">
              <FruitsAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/vegetables"
          element={
            <ProtectedRoute role="Admin">
              <VegetablesAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/videos"
          element={
            <ProtectedRoute role="Admin">
              <VideosAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}
