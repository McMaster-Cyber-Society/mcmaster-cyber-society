import { FaDiscord } from "react-icons/fa";
import Footer from "../components/Footer";
import ActivityCard from "../components/ActivityCard";

// Info Page
export default function Info() {
  return (
    <>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're building McMaster's premier cybersecurity community
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The McMaster Cyber Society is a student-run club focused on cybersecurity education,
              hands-on workshops, capture-the-flag competitions, and community building. We welcome
              students of all backgrounds, whether you're curious, starting out, or already experienced.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-red-400">What We Do</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ActivityCard title="Weekly Study Sessions" description="Collaborative learning and peer support" />
              <ActivityCard title="Workshops & Labs" description="Hands-on practice with real tools" />
              <ActivityCard title="Guest Speakers" description="Industry professionals and panels" />
              <ActivityCard title="CTF Competitions" description="Team formation and competitive events" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 rounded-3xl p-8 border border-red-500/30 text-center">
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="text-gray-300 mb-6">
              Join our Discord community to stay updated on events, connect with members, and start your cybersecurity journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.gg/TCGaMGDVuA" 
                target="_blank" 
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaDiscord /> Join Discord
              </a>
              <a 
                href="mailto:cybersoc@mcmaster.ca"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}