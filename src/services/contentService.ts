import { supabase } from '@/lib/supabase';
import type {
  Destination,
  Hotel,
  Offer,
  Experience,
  Review,
  TravelGuide,
  Feature,
  Amenity,
} from '@/types';

type DestinationRow = Destination;
type HotelRow = Hotel;
type OfferRow = Offer;
type ExperienceRow = Experience;
type ReviewRow = Review;
type TravelGuideRow = TravelGuide;
type FeatureRow = Feature;
type AmenityRow = Amenity;

function assertNoError(error: { message: string } | null, resource: string) {
  if (error) throw new Error(`Unable to load ${resource}: ${error.message}`);
}

export async function getDestinations(): Promise<Destination[]> {
  const { data, error } = await supabase.from('destinations').select('*').order('name');
  assertNoError(error, 'destinations');
  return (data ?? []) as DestinationRow[];
}

export async function getHotels(options?: {
  featured?: boolean;
  destinationId?: string;
}): Promise<Hotel[]> {
  let query = supabase.from('hotels').select('*').eq('is_active', true).order('name');

  if (options?.featured !== undefined) query = query.eq('featured', options.featured);
  if (options?.destinationId) query = query.eq('destination_id', options.destinationId);

  const { data, error } = await query;
  assertNoError(error, 'hotels');
  return (data ?? []) as HotelRow[];
}

export async function getOffers(): Promise<Offer[]> {
  const { data, error } = await supabase
    .from('offers')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');
  assertNoError(error, 'offers');
  return (data ?? []) as OfferRow[];
}

export async function getExperiences(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');
  assertNoError(error, 'experiences');
  return (data ?? []) as ExperienceRow[];
}

export async function getFeatures(): Promise<Feature[]> {
  const { data, error } = await supabase
    .from('features')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');
  assertNoError(error, 'features');
  return (data ?? []) as FeatureRow[];
}

export async function getAmenities(): Promise<Amenity[]> {
  const { data, error } = await supabase
    .from('amenities')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');
  assertNoError(error, 'amenities');
  return (data ?? []) as AmenityRow[];
}

export async function getReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });
  assertNoError(error, 'reviews');
  return (data ?? []) as ReviewRow[];
}

export async function getTravelGuides(): Promise<TravelGuide[]> {
  const { data, error } = await supabase
    .from('travel_guides')
    .select('*')
    .eq('is_published', true)
    .order('sort_order');
  assertNoError(error, 'travel guides');
  return (data ?? []) as TravelGuideRow[];
}

export async function getHomeContent() {
  const [
    destinations,
    featuredHotels,
    offers,
    experiences,
    features,
    amenities,
    reviews,
    travelGuides,
  ] = await Promise.all([
    getDestinations(),
    getHotels({ featured: true }),
    getOffers(),
    getExperiences(),
    getFeatures(),
    getAmenities(),
    getReviews(),
    getTravelGuides(),
  ]);

  return {
    destinations,
    featuredHotels,
    offers,
    experiences,
    features,
    amenities,
    reviews,
    travelGuides,
  };
}
