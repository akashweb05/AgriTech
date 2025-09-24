import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-8">
        {/* Contact Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">📞 Contact Us</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Have questions? Reach us easily via WhatsApp or Email.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919465677268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow transition"
            >
              <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gsproduction@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow transition"
            >
              <FaEnvelope className="text-2xl" /> Send Email
            </a>
          </div>
        </div>

        {/* Social Media Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">🌍 Follow Us</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Stay connected with us on social media for updates and more.
          </p>

          <div className="flex justify-center gap-8 text-3xl">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@gsproduction2025"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
