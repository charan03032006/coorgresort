import HotelSearch from './HotelSearch';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33046721/pexels-photo-33046721.png?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Misty Coorg hills landscape with lush green forests"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/30 to-forest-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-container pt-32 pb-8 sm:pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
            Coorg • Karnataka • India
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] text-balance text-shadow-lg animate-fade-up">
            Discover Your Perfect Stay in Coorg
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Comfortable stays, beautiful locations and unforgettable experiences with Coorg Manju Group of Hotels.
          </p>
        </div>
      </div>

      {/* Search widget */}
      <div className="relative section-container pb-10 sm:pb-16">
        <HotelSearch />
      </div>

      {/* Trust badges */}
      <div className="relative section-container pb-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gold-400 text-lg">★ 4.8</span>
            <span>Rated by 2,800+ guests</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">14+</span>
            <span>Properties across Coorg</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">100%</span>
            <span>Locally owned & operated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
