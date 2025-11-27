import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function EventCard({ event }) {
  const getTypeColor = (type) => {
    switch(type) {
      case 'Workshop': return 'bg-red-900/30 text-red-400 border-red-500/40';
      case 'Speaker': return 'bg-orange-900/30 text-orange-400 border-orange-500/40';
      case 'Social': return 'bg-rose-900/30 text-rose-400 border-rose-500/40';
      case 'Competition': return 'bg-amber-900/30 text-amber-400 border-amber-500/40';
      case 'Meeting': return 'bg-red-950/40 text-red-300 border-red-600/40';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="flex-shrink-0 w-80 bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(event.type)}`}>
          {event.type}
        </span>
        <FaCalendarAlt className="text-gray-500" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">{event.title}</h3>
      
      <div className="space-y-2 mb-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-red-400" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-red-400" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400" />
          <span>{event.location}</span>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm">{event.description}</p>
    </div>
  );
}