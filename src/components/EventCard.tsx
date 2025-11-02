import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function EventCard({ event }) {
  const getTypeColor = (type) => {
    switch(type) {
      case 'Workshop': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Speaker': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Social': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="flex-shrink-0 w-80 bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(event.type)}`}>
          {event.type}
        </span>
        <FaCalendarAlt className="text-gray-500" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{event.title}</h3>
      
      <div className="space-y-2 mb-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-cyan-400" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-cyan-400" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-cyan-400" />
          <span>{event.location}</span>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm">{event.description}</p>
    </div>
  );
}