import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  User,
  Calendar,
  ChevronDown,
} from 'lucide-react';

const navLinks = [
  { label: 'Hotels', href: '/hotels' },
  { label: 'Offers', href: '/offers' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-premium py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Mobile left: hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-forest-800 hover:bg-forest-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled ? 'bg-forest-700' : 'bg-white/15 backdrop-blur-sm'
            }`}>
              <span className="font-serif text-lg font-bold text-gold-400">M</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <p className={`font-serif text-base font-bold tracking-tight ${
                scrolled ? 'text-forest-800' : 'text-white'
              }`}>
                Coorg Manju
              </p>
              <p className={`text-[10px] font-medium tracking-widest uppercase ${
                scrolled ? 'text-forest-500' : 'text-white/70'
              }`}>
                Group of Hotels
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-forest-700 hover:bg-forest-50 hover:text-forest-900'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/my-bookings"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-forest-700 hover:bg-forest-50'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              My Bookings
            </Link>
            <Link
              to="/login"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-forest-700 hover:bg-forest-50'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <User size={16} />
              Login
            </Link>
            <Link to="/hotels" className="btn-primary">
              <Calendar size={16} />
              Book Now
            </Link>
          </div>

          {/* Mobile right: search + profile */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              aria-label="Search"
              onClick={() => {
                const el = document.getElementById('search-widget');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-forest-800 hover:bg-forest-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <Search size={20} />
            </button>
            <Link
              to="/login"
              aria-label="Profile"
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-forest-800 hover:bg-forest-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <User size={20} />
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[300px] max-w-[80vw] bg-white shadow-2xl animate-slide-down flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-cream-200">
              <span className="font-serif text-lg font-bold text-forest-800">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg text-forest-700 hover:bg-forest-50"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 text-forest-700 hover:bg-forest-50 font-medium"
                  >
                    {link.label}
                    <ChevronDown size={16} className="rotate-[-90deg] text-forest-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/my-bookings"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-5 py-3.5 text-forest-700 hover:bg-forest-50 font-medium"
                >
                  My Bookings
                  <ChevronDown size={16} className="rotate-[-90deg] text-forest-400" />
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-5 py-3.5 text-forest-700 hover:bg-forest-50 font-medium"
                >
                  Login / Sign Up
                  <ChevronDown size={16} className="rotate-[-90deg] text-forest-400" />
                </Link>
              </li>
            </ul>
            <div className="p-5 border-t border-cream-200">
              <Link
                to="/hotels"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full"
              >
                <Calendar size={16} />
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
