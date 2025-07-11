import * as React from "react";
import GlassCard from "@/components/ui/glass-card";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/blocks/feature-section-with-hover-effects-demo";

const Demo: React.FC = () => {
  const [tab, setTab] = React.useState<'glass' | 'glow' | 'feature'>('glass');
  return (
    <div className="w-full min-h-screen bg-zinc-100 dark:bg-zinc-800 p-10">
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${tab === 'glass' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border'}`}
          onClick={() => setTab('glass')}
        >
          GlassCard Demo
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === 'glow' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border'}`}
          onClick={() => setTab('glow')}
        >
          GlowingEffect Demo
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === 'feature' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border'}`}
          onClick={() => setTab('feature')}
        >
          FeaturesSectionWithHoverEffects Demo
        </button>
      </div>
      {tab === 'glass' && (
        <div className="flex h-[450px] w-full items-center justify-center">
          <GlassCard />
        </div>
      )}
      {tab === 'glow' && (
        <div className="flex w-full items-center justify-center">
          <GlowingEffectDemo />
        </div>
      )}
      {tab === 'feature' && (
        <div className="flex w-full items-center justify-center">
          <FeaturesSectionWithHoverEffectsDemo />
        </div>
      )}
    </div>
  );
};

export default Demo; 