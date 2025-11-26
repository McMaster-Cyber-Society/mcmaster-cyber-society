export default function FeatureCard({ icon, title, description, gradient, imgSrc }) {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all group">
      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform`}>
        {icon ? icon : imgSrc && <img src={imgSrc} alt={title} className="w-10 h-10" />}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}