import { FaUsers } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Team() {
  const members = [
    { name: "Position Open", role: "President", description: "Club leadership and vision" },
    { name: "Position Open", role: "Vice President", description: "Operations and coordination" },
    { name: "Position Open", role: "Technical Lead", description: "Workshops and CTF events" },
    { name: "Position Open", role: "Events Coordinator", description: "Event planning and logistics" },
  ];

  return (
    <div className="min-h-screen py-20 px-4 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-xl text-gray-300">
            Meet the people building our community
          </p>
        </div>

        {members.length === 0 || members[0].name === "Position Open" ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1a0a0a] rounded-full mb-6">
              <FaUsers className="text-4xl text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Team Formation in Progress</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              We're currently building our executive team. Interested in joining? Reach out to learn about available positions.
            </p>
            <a 
              href="mailto:cybersoc@mcmaster.ca"
              className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Get in Touch
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#1a0a0a] rounded-2xl p-6 border border-gray-700 hover:border-red-600/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}