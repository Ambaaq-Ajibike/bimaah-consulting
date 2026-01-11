'use client';

import Link from 'next/link';
import { useState } from 'react';

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#1C478A]">
              Bimaah International Ltd
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }}
              className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium cursor-pointer"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('services'); }}
              className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('testimonials'); }}
              className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium cursor-pointer"
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('faq'); }}
              className="text-[#718A9D] hover:text-[#1A7EB9] transition font-medium cursor-pointer"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }}
              className="bg-[#1A7EB9] text-white px-4 py-2 rounded-md hover:bg-[#1B60A3] transition cursor-pointer"
            >
              Contact
            </a>
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
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); setMobileMenuOpen(false); }}
                className="text-[#718A9D] hover:text-[#1A7EB9] font-medium cursor-pointer"
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); smoothScrollTo('services'); setMobileMenuOpen(false); }}
                className="text-[#718A9D] hover:text-[#1A7EB9] font-medium cursor-pointer"
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => { e.preventDefault(); smoothScrollTo('testimonials'); setMobileMenuOpen(false); }}
                className="text-[#718A9D] hover:text-[#1A7EB9] font-medium cursor-pointer"
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                onClick={(e) => { e.preventDefault(); smoothScrollTo('faq'); setMobileMenuOpen(false); }}
                className="text-[#718A9D] hover:text-[#1A7EB9] font-medium cursor-pointer"
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); setMobileMenuOpen(false); }}
                className="bg-[#1A7EB9] text-white px-4 py-2 rounded-md hover:bg-[#1B60A3] text-center cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
