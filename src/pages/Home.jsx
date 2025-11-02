import { FaDiscord, FaInstagram, FaLinkedin, FaShieldAlt, FaUsers, FaTrophy, FaCalendarAlt, FaCode, FaClock, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import SocialButton from "../components/SocialButton";
import EventCard from "../components/EventCard";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

// Sample events data
const upcomingEvent = {
  id: 1,
  title: "Kickoff Meeting & Introduction to Cybersecurity",
  date: "October 1st, 2025",
  time: "6:00 PM - 7:00 PM",
  location: "ETB 237",
  description: "Join us for our first event! Meet the team, learn about our goals, and get an introduction to the world of cybersecurity.",
  type: "Meeting",
  featured: true
};

const pastEvents = [
  {
    id: 2,
    title: "CTF Workshop: Web Security",
    date: "September 15, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "ITB 137",
    description: "Hands-on workshop covering OWASP Top 10 vulnerabilities and web exploitation techniques.",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Guest Speaker: Industry Security Practices",
    date: "September 8, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "ETB 237",
    description: "Industry professional shares insights on real-world security practices and career paths.",
    type: "Speaker"
  },
  {
    id: 4,
    title: "Networking Social",
    date: "September 1, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Student Center",
    description: "Meet fellow cybersecurity enthusiasts in a casual setting.",
    type: "Social"
  },
  {
    id: 5,
    title: "Linux Fundamentals Workshop",
    date: "August 25, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "ITB 137",
    description: "Learn essential Linux commands and system administration basics.",
    type: "Workshop"
  }
];

// Main App Component
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 320;

  const scrollLeft = () => {
    setScrollPosition(Math.max(scrollPosition - cardWidth, 0));
  };

  const scrollRight = () => {
    const maxScroll = (pastEvents.length - 1) * cardWidth;
    setScrollPosition(Math.min(scrollPosition + cardWidth, maxScroll));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gray-900 text-white">
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
                <img src="logo.png" alt="McMaster Cyber Society Logo" className="w-16 h-16" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            McMaster Cyber Society
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the community defending tomorrow's digital frontier
          </p>

          {/* Featured Event Card */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 rounded-3xl p-8 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaCalendarAlt className="text-cyan-400 text-xl" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wide">Next Event</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{upcomingEvent.title}</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span className="font-semibold">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-cyan-400" />
                  <span>{upcomingEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>{upcomingEvent.location}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{upcomingEvent.description}</p>
              
              <a 
                href="https://www.bouncelife.com/organizations/685c7166831541b7d83256ea"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                Register on Bounce
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <SocialButton 
              href="https://www.bouncelife.com/organizations/685c7166831541b7d83256ea" 
              label="Bounce"
              emoji="🎯"
            />
            <SocialButton href="https://discord.gg/TCGaMGDVuA" icon={<FaDiscord />} label="Discord" color="hover:bg-indigo-500/20 hover:border-indigo-500" />
            <SocialButton href="https://www.instagram.com/cybersociety.mcmaster" icon={<FaInstagram />} label="Instagram" color="hover:bg-pink-500/20 hover:border-pink-500" />
            <SocialButton href="https://www.linkedin.com/company/mcmaster-cyber-society" icon={<FaLinkedin />} label="LinkedIn" color="hover:bg-blue-500/20 hover:border-blue-500" />
          </div>

          <button className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Past Events Section */}
      <div className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Past Events</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out what we've been up to and see the great events our community has enjoyed
            </p>
          </div>
          
          {/* Scrollable Events Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft}
              disabled={scrollPosition === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full border border-gray-700 transition-all -ml-4"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={scrollRight}
              disabled={scrollPosition >= (pastEvents.length - 1) * cardWidth}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full border border-gray-700 transition-all -mr-4"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Events Scroll Container */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${scrollPosition}px)` }}
              >
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
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
              imgSrc="logo.png"
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