import { FaDiscord, FaInstagram, FaLinkedin, FaShieldAlt, FaUsers, FaTrophy, FaCalendarAlt, FaCode, FaClock, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import SocialButton from "../components/SocialButton";
import EventCard from "../components/EventCard";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Sample events data
const upcomingEvent = {
  id: 1,
  title: "CyberWeekly Session",
  date: "Every Monday until April 6th, 2026",
  time: "6:00 PM - 7:00 PM",
  location: "ETB 228",
  description: "Join us for our recurring CyberWeekly session! We’ll be solving fun Capture the Flag (CTF) challenges together, a great way to learn cybersecurity hands-on.",
  type: "Workshop",
  featured: true
};

const pastEvents = [
  {
    id: 1,
    title: "Kickoff Meeting & Introduction to Cybersecurity",
    date: "October 1st, 2025",
    time: "6:00 PM - 7:00 PM",
    location: "ETB 237",
    description: "Join us for our first event! Meet the team, learn about our goals, and get an introduction to the world of cybersecurity.",
    type: "Meeting",
  },
  {
    id: 2,
    title: "Securinets CTF Quals 2025",
    date: "October 4 - October 5, 2025",
    description: "A thrilling, global cybersecurity competition spanning diverse challenge categories. Compete, learn, and push your skills to the next level.",
    type: "Competition",
  },
  {
    id: 3,
    title: "First-Ever CyberWeekly",
    date: "October 29, 2025",
    time: "6:00 PM - 7:00 PM",
    location: "BSB B142",
    description: "Join Mac Cyber Society for our first-ever CyberWeekly session! We’ll be solving fun Capture the Flag (CTF) challenges together, a great way to learn cybersecurity hands-on.",
    type: "Workshop",
  },
  {
    id: 4,
    title: "V1T CTF",
    date: "October 31 - November 2, 2025",
    description: "V1t CTF 2025 is a beginner-friendly and intermediate Capture The Flag competition organized by V1t.",
    type: "Competition",
  },
  {
    id: 6,
    title: "Guest Speaker: Industry Security Practices",
    date: "September 8, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "ETB 237",
    description: "Industry professional shares insights on real-world security practices and career paths.",
    type: "Speaker"
  },
];

// Main App Component
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 320;
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    setScrollPosition(Math.max(scrollPosition - cardWidth, 0));
  };

  const scrollRight = () => {
    const maxScroll = (pastEvents.length - 1) * cardWidth;
    setScrollPosition(Math.min(scrollPosition + cardWidth, maxScroll));
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current && scrollContainerRef.current.contains(e.target)) {
        e.preventDefault();
        const maxScroll = (pastEvents.length - 1) * cardWidth;
        // Handle both horizontal (deltaX) and vertical (deltaY) scrolling
        // Trackpads use deltaX for horizontal gestures, deltaY for vertical
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const newPosition = scrollPosition + delta;
        setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scrollPosition, cardWidth]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative py-16 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gray-900 text-white">
        {/* Animated background grid */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#3c0d0d_1px,transparent_1px),linear-gradient(to_bottom,#3c0d0d_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-900/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative z-10 text-center max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-900/30 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <img src="logo.png" alt="McMaster Cyber Society Logo" className="relative h-32 w-auto object-contain group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <h1 className="text-5xl p-3 md:text-7xl font-bold mb-6 bg-linear-to-r from-red-400 via-rose-500 to-amber-600 bg-clip-text text-transparent">
            McMaster Cyber Society
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the community defending tomorrow's digital frontier
          </p>

          {/* Featured Event Card */}
          <div className="mb-12">
            <div className="bg-linear-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/50 rounded-3xl p-8 backdrop-blur-sm shadow-2xl shadow-red-900/30 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaCalendarAlt className="text-red-400 text-xl" />
                <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Next Event</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{upcomingEvent.title}</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-red-400" />
                  <span className="font-semibold">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-red-400" />
                  <span>{upcomingEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>{upcomingEvent.location}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{upcomingEvent.description}</p>
              
              <a 
                href="https://www.bouncelife.com/organizations/685c7166831541b7d83256ea"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-linear-to-r from-red-800 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-900/50 transition-all hover:scale-105"
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

          <Link 
            to="/info"
            className="inline-block bg-linear-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-red-500/50 transition-all hover:scale-105"
          >
            Learn More
          </Link>
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
            {/* Left Arrow - Hidden on mobile */}
            <button 
              onClick={scrollLeft}
              disabled={scrollPosition === 0}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full border border-gray-700 transition-all -ml-4"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Right Arrow - Hidden on mobile */}
            <button 
              onClick={scrollRight}
              disabled={scrollPosition >= (pastEvents.length - 1) * cardWidth}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full border border-gray-700 transition-all -mr-4"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Events Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-hidden snap-x snap-mandatory"
            >
              <div 
                className="flex gap-6 md:transition-transform md:duration-500 md:ease-out pb-4"
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
              gradient="from-red-800 to-red-600"
            />
            <FeatureCard 
              icon={<FaTrophy />}
              title="CTF Competitions"
              description="Test your skills in capture-the-flag challenges and team events"
              gradient="from-orange-800 to-red-700"
            />
            <FeatureCard 
              icon={<FaUsers />}
              title="Community"
              description="Connect with like-minded students and industry professionals"
              gradient="from-rose-800 to-red-700"
            />
            <FeatureCard 
              imgSrc="logo.png"
              title="Security Skills"
              description="Learn from beginner to advanced security concepts and tools"
              gradient="from-amber-900 to-red-800"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
