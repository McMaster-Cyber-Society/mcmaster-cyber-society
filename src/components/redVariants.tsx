import React from "react";
import { FaShieldAlt } from "react-icons/fa";

// Default export React component that shows the original logo
// and several red-based variants. Tailwind is used for styling.

export default function LogoRedVariants() {
  return (
    <section className="space-y-8 p-6">
      <h2 className="text-xl font-semibold">Logo — Red Variants</h2>

      {/* Variant 1 — Subtle red gradient (closest to Tailwind defaults) */}
      <div className="mb-4">
        <p className="mb-2 text-sm">Subtle red gradient (from-red-400 → to-red-600)</p>
        <div className="mb-8 flex justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center">
              {/* icon should be high-contrast — use text-white */}
              <FaShieldAlt className="text-5xl text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Variant 2 — Deeper red for stronger visual weight */}
      <div className="mb-4">
        <p className="mb-2 text-sm">Deep red (from-red-600 → to-red-800)</p>
        <div className="mb-8 flex justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center">
              <FaShieldAlt className="text-5xl text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Variant 3 — Rose / magenta-tinged red (warmer) */}
      <div className="mb-4">
        <p className="mb-2 text-sm">Warm rose-red (from-rose-500 → to-red-600)</p>
        <div className="mb-8 flex justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center">
              <FaShieldAlt className="text-5xl text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Variant 4 — Custom hex gradient with Tailwind arbitrary values */}
      <div className="mb-4">
        <p className="mb-2 text-sm">Custom hex gradient using Tailwind arbitrary colors</p>
        <div className="mb-8 flex justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a7a] to-[#b30000] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-[#ff7a7a] to-[#b30000] rounded-2xl flex items-center justify-center">
              <FaShieldAlt className="text-5xl text-white drop-shadow-sm" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Variant 5 — Flat solid color (no gradient) with stronger border */}
      <div className="mb-4">
        <p className="mb-2 text-sm">Solid red with subtle outline</p>
        <div className="mb-8 flex justify-start">
          <div className="relative group">
            <div className="relative w-24 h-24 bg-red-600 rounded-2xl flex items-center justify-center ring-2 ring-red-700">
              <FaShieldAlt className="text-5xl text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick usage tips (rendered as UI text) */}
      <div className="text-sm text-gray-700">
        <p className="font-medium">Quick tips</p>
        <ul className="list-disc list-inside space-y-1">
          <li>To switch to a red variant, update both <code>from-*</code> and <code>to-*</code> classes in both gradient layers.</li>
          <li>If you use solid backgrounds, make sure the icon has <code>text-white</code> (or another high-contrast color).</li>
          <li>For custom colors, Tailwind supports arbitrary values like <code>from-[#ff7a7a]</code> and <code>to-[#b30000]</code>.</li>
          <li>Keep an eye on contrast — icons should be readable (aim for light icon on dark bg or vice-versa).</li>
        </ul>
      </div>
    </section>
  );
}
