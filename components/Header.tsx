'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/assets/bimahlogo.png" alt="Bimaah International Ltd" width={80} height={80} />
              <span className="text-xl font-bold text-navy">Bimaah International Ltd</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium">
              About
            </Link>
            <Link href="/services" className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium">
              Services
            </Link>
            <Link href="/testimonials" className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium">
              Testimonials
            </Link>
            <Link href="/faq" className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="bg-[#1A7EB9] text-white px-4 py-2 rounded-md hover:bg-[#1B60A3] transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#718A9D] hover:text-[#1A7EB9]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-[#718A9D] hover:text-[#1A7EB9] font-medium">
                About
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#718A9D] hover:text-[#1A7EB9] font-medium">
                Services
              </Link>
              <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)} className="text-[#718A9D] hover:text-[#1A7EB9] font-medium">
                Testimonials
              </Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-[#718A9D] hover:text-[#1A7EB9] font-medium">
                FAQ
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#1A7EB9] text-white px-4 py-2 rounded-md hover:bg-[#1B60A3] text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
