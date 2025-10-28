import React from 'react';

export default function Info() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">About McMaster Cyber Society</h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-200">
          The McMaster Cyber Society is a student-run club focused on cybersecurity education,
          hands-on workshops, capture-the-flag competitions, and community building. We welcome
          students of all backgrounds, whether you're curious, starting out, or already experienced.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">What we do</h3>
        <ul className="list-disc list-inside text-left text-gray-200 max-w-xl mx-auto">
          <li>Weekly study sessions</li>
          <li>Hands-on workshops and labs</li>
          <li>Guest speakers and industry panels</li>
          <li>CTF competitions and teams creation in <a href='https://discord.gg/TCGaMGDVuA'>Discord</a></li>
        </ul>

        <p className="mt-6 text-sm text-gray-400">For inquiries: <a href="mailto:cybersoc@mcmaster.ca" className="underline">cybersoc@mcmaster.ca</a></p>
      </div>
    </div>
  );
}
