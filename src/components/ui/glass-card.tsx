import * as React from "react";

const GlassCard: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[350px] h-[300px] rounded-2xl bg-white/20 backdrop-blur-md shadow-xl border border-white/30 p-8">
      <h2 className="text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100">Glass Card</h2>
      <p className="text-zinc-600 dark:text-zinc-300 text-center">
        這是一個玻璃擬態（Glassmorphism）卡片元件範例。你可以在這裡放任何內容。
      </p>
    </div>
  );
};

export default GlassCard; 