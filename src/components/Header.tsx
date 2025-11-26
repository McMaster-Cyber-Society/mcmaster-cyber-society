import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

// Header Component
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/info">About</NavLink>
          <NavLink to="/team">Team</NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link 
      to={to}
      className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all"></span>
    </Link>
  );
}