import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import HotelCard from '@/components/HotelCard';
import HotelCarousel from '@/components/HotelCarousel';
import OfferCard from '@/components/OfferCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import ExperienceCard from '@/components/ExperienceCard';
import AmenityList from '@/components/AmenityList';
import ReviewCarousel from '@/components/ReviewCarousel';
import TravelGuideCard from '@/components/TravelGuideCard';
import FinalCTA from '@/components/FinalCTA';
import { RevealSection } from '@/hooks/useReveal';
import type { Hotel } from '@/types';
import {
  destinations,
  hotels,
  offers,
  experiences,
  features,
  amenities,
  reviews,
  travelGuides,
} from '@/data';

export default function Home() {
  const featuredHotels = hotels.filter((h) => h.featured);

  return (
    <>
      <SEO />
      <StructuredData />

      {/* Hero with search */}
      <Hero />

      {/* Quick destination discovery */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Destinations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 text-balance">
              Where will you stay in Coorg?
            </h2>
            <p className="text-forest-600 text-lg">
              From misty hilltops to riverside retreats — find your perfect Coorg base.
            </p>
          </RevealSection>

          <RevealSection className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {destinations.map((d, idx) => (
              <div
                key={d.id}
                className={`reveal ${idx === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <DestinationCard destination={d} />
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Featured hotels */}
      <section className="py-20 sm:py-28 bg-cream-50">
        <div className="section-container">
          <RevealSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-xl">
              <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Featured Properties
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 text-balance">
                Featured Hotels
              </h2>
            </div>
            <Link
              to="/hotels"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-gold-600 transition-colors group shrink-0"
            >
              View All Hotels
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealSection>

          <RevealSection>
            {/* Desktop: grid, Mobile: carousel */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {featuredHotels.map((hotel, idx) => (
                <div
                  key={hotel.id}
                  className="reveal"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <HotelCard hotel={hotel} />
                </div>
              ))}
            </div>
            <div className="lg:hidden">
              <HotelCarousel hotels={featuredHotels} />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Exclusive offers */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Limited Time
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 text-balance">
              Exclusive Offers
            </h2>
            <p className="text-forest-600 text-lg">
              Save more on your Coorg stay with our specially curated deals and packages.
            </p>
          </RevealSection>

          <RevealSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, idx) => (
              <div
                key={offer.id}
                className="reveal"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <OfferCard offer={offer} />
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Why choose us */}
      <WhyChooseUs features={features} />

      {/* Explore Coorg */}
      <section className="py-20 sm:py-28 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
        <div className="relative section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Coorg Experiences
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Experience the Magic of Coorg
            </h2>
            <p className="text-white/70 text-lg">
              Waterfalls, wildlife, coffee estates, and misty peaks — Coorg has something for every traveler.
            </p>
          </RevealSection>

          <RevealSection className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={`reveal ${idx === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <ExperienceCard experience={exp} />
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Amenities */}
      <AmenityList amenities={amenities} />

      {/* Reviews */}
      <ReviewCarousel reviews={reviews} />

      {/* Travel guide */}
      <section className="py-20 sm:py-28 bg-cream-50">
        <div className="section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Travel Resources
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 text-balance">
              Plan Your Coorg Trip
            </h2>
            <p className="text-forest-600 text-lg">
              Expert guides and tips to help you make the most of your Coorg visit.
            </p>
          </RevealSection>

          <RevealSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelGuides.map((guide, idx) => (
              <div
                key={guide.id}
                className="reveal"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <TravelGuideCard guide={guide} />
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}

