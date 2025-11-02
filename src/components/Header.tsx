import { Link } from "react-router-dom";


// Header Component
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <img src="logo.png" alt="McMaster Cyber Society Logo" className="w-15 h-10" />
          </div>
          <span className="text-lg font-bold hidden sm:block">McMaster Cyber</span>
        </Link>
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
      className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
    </Link>
  );
}