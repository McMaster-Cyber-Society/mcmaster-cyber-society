export default function SocialButton({ href, icon, imgSrc, label, color = "hover:bg-cyan-500/20 hover:border-cyan-500" }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all ${color} group`}
    >
      {imgSrc ? (
        <img src={imgSrc} alt={label} className="w-15 h-15" />
      ) : (
        <span className="text-xl">{icon}</span>
      )}
      <span className="text-sm font-medium hidden sm:inline">{label}</span>
    </a>
  );
}