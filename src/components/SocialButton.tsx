export default function SocialButton({ href, icon, emoji, label, color = "hover:bg-red-900/30 hover:border-red-500" }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 bg-[#1a0a0a] backdrop-blur-sm transition-all ${color} group`}
    >
      {emoji ? (
        <span className="text-xl">{emoji}</span>
      ) : (
        <span className="text-xl">{icon}</span>
      )}
      <span className="text-sm font-medium hidden sm:inline">{label}</span>
    </a>
  );
}
