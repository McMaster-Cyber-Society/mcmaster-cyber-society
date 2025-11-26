export default function ActivityCard({ title, description }) {
  return (
    <div className="bg-[#1a0a0a] rounded-xl p-4 border border-gray-700">
      <h4 className="font-semibold mb-1 text-white">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}