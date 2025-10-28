import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import Bounce from "./assets/bounce.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Info from "./pages/Info";
import Team from "./pages/Team";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <img src="/logo.png" alt="McMaster Cyber Society Logo" className="w-32 h-34 mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold mb-6">McMaster Cyber Society</h1>

      <p className="text-lg md:text-2xl mb-8">
        📢 Our first event is on <br />
        <span className="font-semibold">October 1st, 2025</span>
        <br />6 PM - 7 PM @ ETB 237
      </p>

      <div className="flex space-x-6 mb-10 text-3xl items-center">
        <a
          href="https://www.bouncelife.com/organizations/685c7166831541b7d83256ea"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400 flex flex-col items-center"
        >
          <img src={Bounce} alt="Bounce Logo" className="w-20 h-20 mb-1" />
        </a>

        <a href="https://discord.gg/TCGaMGDVuA" target="_blank" rel="noreferrer" className="hover:text-blue-500">
          <FaDiscord />
        </a>

        <a href="https://www.instagram.com/cybersociety.mcmaster" target="_blank" rel="noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/company/mcmaster-cyber-society" target="_blank" rel="noreferrer" className="hover:text-sky-500">
          <FaLinkedin />
        </a>
      </div>

      <footer className="mt-10 text-sm text-gray-400">© {new Date().getFullYear()} McMaster Cyber Society. All Rights Reserved.</footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen text-white">
        <header className="bg-gray-800/60 backdrop-blur-sm py-4">
          <nav className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-xl font-bold"><img src="/logo.png" alt="McMaster Cyber Society Logo" className="w-8 h-8" /></Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-sm hover:text-yellow-300">Home</Link>
              <Link to="/info" className="text-sm hover:text-yellow-300">Info</Link>
              <Link to="/team" className="text-sm hover:text-yellow-300">Team</Link>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}