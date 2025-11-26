import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Team from "./pages/Team";

// Main App Component
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#1a0a0a] min-h-screen text-white">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/team" element={<Team />} />
            <Route path="/red-variants" element={<redVariants />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}