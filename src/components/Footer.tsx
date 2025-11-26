export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} McMaster Cyber Society. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="mailto:cybersoc@mcmaster.ca" className="hover:text-red-6600 transition-colors">cybersoc@mcmaster.ca</a>
        </p>
      </div>
    </footer>
  );
}