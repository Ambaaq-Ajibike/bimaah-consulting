export default function Footer() {
  return (
    <footer className="bg-[#1C478A] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bimaah International Ltd</h3>
            <p className="text-[#97C5D9] mb-2">
              Empowering lives through clarity, compassion, and advocacy.
            </p>
            <p className="text-sm text-[#97C5D9]">
              Registration Number: N202431570
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#97C5D9] hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#97C5D9] hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-[#97C5D9] hover:text-white transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#97C5D9] hover:text-white transition">
                  FAQ
                </a>
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
