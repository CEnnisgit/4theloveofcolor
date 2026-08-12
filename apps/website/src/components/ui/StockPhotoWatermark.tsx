export function StockPhotoWatermark() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none overflow-hidden opacity-40 select-none mix-blend-overlay">
      <div className="transform -rotate-45 text-white/50 font-black tracking-widest uppercase text-xl sm:text-2xl lg:text-4xl whitespace-nowrap drop-shadow-lg text-center leading-tight">
        PLACEHOLDER<br />PHOTO
      </div>
    </div>
  );
}
