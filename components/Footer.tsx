import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1C478A] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white flex items-center justify-center">
                <Image src="/assets/bimahlogo.png" alt="Bimaah International Ltd" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold">Bimaah International Ltd</h3>
            </div>
            <p className="text-[#97C5D9] mb-2">
              Empowering lives through clarity, compassion, and advocacy.
            </p>
            <p className="text-sm text-[#97C5D9]">
              Registration Number: N202431570
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Image src="/assets/disclosure.jpg" alt="Disclosure" width={120} height={80} className="object-contain rounded" />
              <Image src="/assets/immigration.jpg" alt="Immigration" width={120} height={80} className="object-contain rounded" />
            </div>

            <div className="mt-4 text-sm text-[#97C5D9] space-y-1">
              <div>Business address: Toronto road, Tilbury RM18 7RL</div>
              <div>
                Phone: <a href="tel:+447903263491" className="text-[#97C5D9] hover:text-white">+44 7903 263491</a>
              </div>
              <div>
                Email: <a href="mailto:bimaahltd@gmail.com" className="text-[#97C5D9] hover:text-white">bimaahltd@gmail.com</a>
              </div>
              <div className="pt-2">
                <strong className="text-white">Opening hours:</strong>
                <div className="text-[#97C5D9]">Mon-Sat: 10:00am - 6:00pm</div>
                <div className="text-[#97C5D9]">Sun: 2:00pm - 6:00pm</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#97C5D9] hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#97C5D9] hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[#97C5D9] hover:text-white transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#97C5D9] hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Values</h4>
            <ul className="space-y-2 text-[#97C5D9]">
              <li>✓ Accessibility for all</li>
              <li>✓ Professional integrity</li>
              <li>✓ Empathetic advocacy</li>
              <li>✓ Community empowerment</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1B60A3] pt-8 text-center">
          <p className="text-[#97C5D9]">
            &copy; {new Date().getFullYear()} Bimaah International Ltd. All rights reserved.
          </p>
          <p className="text-sm text-[#97C5D9] mt-2 italic">
            Your Rights. Your Voice. Our Support.
          </p>
        </div>
      </div>
    </footer>
  );
}
