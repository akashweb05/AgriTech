export default function Footer() {
  return (
    <footer className="bg-green-900 text-white text-center py-6 mt-auto w-full shadow-inner">
      <p className="text-sm opacity-80">
        © {new Date().getFullYear()} <strong>GS Productions</strong>. All rights reserved.
      </p>
    </footer>
  );
}
