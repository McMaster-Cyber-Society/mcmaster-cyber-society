import React from 'react';

const members = [
];

export default function Team() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {members.map((m) => (
            <div key={m.name} className="bg-gray-800/60 p-4 rounded-lg">
              <div className="text-lg font-semibold">{m.name}</div>
              <div className="text-sm text-gray-300">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
