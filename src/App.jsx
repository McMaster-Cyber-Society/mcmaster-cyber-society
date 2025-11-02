import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Team from "./pages/Team";

// Main App Component
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <main className="pt-16">
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