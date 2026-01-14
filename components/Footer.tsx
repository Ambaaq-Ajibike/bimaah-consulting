import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1C478A] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8">
          <Image 
            src="/assets/IAA-logo.jpg" 
            alt="IAA Logo" 
            width={120} 
            height={80} 
            className="object-contain"
          />
          <Image 
            src="/assets/CPAQ-logo.png" 
            alt="CPAQ Logo" 
            width={120} 
            height={80} 
            className="object-contain"
          />
        </div>

        {/* Copyright and tagline */}
        <div className="space-y-3">
          <p className="text-[#97C5D9]">
            &copy; {new Date().getFullYear()} Bimaah International Ltd. All rights reserved.
          </p>
          <p className="text-white font-semibold text-lg">
            Your Rights. Your Voice. Our Support.
          </p>
        </div>
      </div>
    </footer>
  );
}
