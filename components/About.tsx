import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-near-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1C478A]">
          About Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/about-image.png"
              alt="Professional consultation"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div>
            <p className="text-lg text-[#718A9D] mb-6 leading-relaxed">
              At Bimaah International Ltd, we believe that everyone deserves access to clear, compassionate, and professional support—especially when navigating complex systems like immigration, benefits, and legal compliance.
            </p>
            <p className="text-lg text-[#718A9D] mb-6 leading-relaxed">
              Founded by <span className="font-semibold text-[#1A7EB9]">Olabisi Adebayo</span>, a qualified immigration adviser with over a decade of experience in advocacy and public service, our mission is rooted in justice, dignity, and accessibility.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg text-[#718A9D] mb-8 leading-relaxed text-center">
            With advanced qualifications in Human Resource Management and Accounting, and a deep commitment to community outreach, Olabisi brings both strategic insight and heartfelt care to every case. Whether you're seeking guidance on immigration applications, benefits entitlements, or legal documentation, we're here to empower you with clarity, confidence, and respect.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-[#1A7EB9]">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#04A3E7] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#1C478A]"><span className="font-semibold">Accessibility for all</span> — We ensure our services are available to everyone, regardless of financial circumstances.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#04A3E7] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#1C478A]"><span className="font-semibold">Professional integrity</span> — We maintain the highest standards in all our work.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#04A3E7] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#1C478A]"><span className="font-semibold">Empathetic advocacy</span> — We listen, understand, and advocate with compassion.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#04A3E7] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#1C478A]"><span className="font-semibold">Community empowerment</span> — We uplift voices and build stronger communities.</span>
              </li>
            </ul>
          </div>

          <p className="text-xl text-center text-gray-800 font-semibold mt-12 italic">
            We don't just offer services—we build trust, uplift voices, and stand beside you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
