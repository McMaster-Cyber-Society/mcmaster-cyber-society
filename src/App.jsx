import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import Bounce from "./assets/bounce.svg";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        McMaster Cyber Society
      </h1>

      <p className="text-lg md:text-2xl mb-8">
        📢 Our first event is on <br />
        <span className="font-semibold">October 1st, 2025</span><br />
        6 PM - 7 PM @ ETB 237
      </p>

      <div className="flex space-x-6 mb-10 text-3xl items-center">
        
        <a href="https://bounce.mcmaster.ca" target="_blank" className="hover:text-yellow-400 flex flex-col items-center">
          <img src={Bounce} alt="Bounce Logo" className="w-20 h-20 mb-1" />
        </a>

        <a href="https://discord.gg/TCGaMGDVuA" target="_blank" className="hover:text-blue-500">
          <FaDiscord />
        </a>

        <a href="https://www.instagram.com/cybersociety.mcmaster" target="_blank" className="hover:text-pink-500">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/company/mcmaster-cyber-society" target="_blank" className="hover:text-sky-500">
          <FaLinkedin />
        </a>
      </div>

      <footer className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} McMaster Cyber Society. All Rights Reserved.
      </footer>
    </div>
  )
}