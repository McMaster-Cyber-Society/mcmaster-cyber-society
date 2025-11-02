import { Link } from "react-router-dom";
import { FaShieldAlt, FaCalendarAlt, FaDiscord, FaInstagram, FaLinkedin, FaCode, FaTrophy, FaUsers } from "react-icons/fa";
import Footer from "../components/Footer";
import SocialButton from "../components/SocialButton";
import FeatureCard from "../components/FeatureCard";


// Home Page
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative z-10 text-center max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <FaShieldAlt className="text-5xl" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            McMaster Cyber Society
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the community defending tomorrow's digital frontier
          </p>

          {/* Event Card */}
          <div className="mb-12 inline-block">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaCalendarAlt className="text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">First Event</span>
              </div>
              <p className="text-2xl font-bold mb-2">October 1st, 2025</p>
              <p className="text-gray-400">6:00 PM - 7:00 PM @ ETB 237</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <SocialButton href="https://www.bouncelife.com/organizations/685c7166831541b7d83256ea" icon="🎯" label="Bounce" />
            <SocialButton href="https://discord.gg/TCGaMGDVuA" icon={<FaDiscord />} label="Discord" color="hover:bg-indigo-500/20 hover:border-indigo-500" />
            <SocialButton href="https://www.instagram.com/cybersociety.mcmaster" icon={<FaInstagram />} label="Instagram" color="hover:bg-pink-500/20 hover:border-pink-500" />
            <SocialButton href="https://www.linkedin.com/company/mcmaster-cyber-society" icon={<FaLinkedin />} label="LinkedIn" color="hover:bg-blue-500/20 hover:border-blue-500" />
          </div>

          <Link 
            to="/info"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What We Offer</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Build your skills, compete with peers, and join a community passionate about cybersecurity
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<FaCode />}
              title="Hands-On Labs"
              description="Practice real-world security scenarios in our interactive workshops"
              gradient="from-cyan-500 to-blue-500"
            />
            <FeatureCard 
              icon={<FaTrophy />}
              title="CTF Competitions"
              description="Test your skills in capture-the-flag challenges and team events"
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard 
              icon={<FaUsers />}
              title="Community"
              description="Connect with like-minded students and industry professionals"
              gradient="from-orange-500 to-red-500"
            />
            <FeatureCard 
              icon={<FaShieldAlt />}
              title="Security Skills"
              description="Learn from beginner to advanced security concepts and tools"
              gradient="from-green-500 to-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}