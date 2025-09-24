import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
<div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full px-0 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
