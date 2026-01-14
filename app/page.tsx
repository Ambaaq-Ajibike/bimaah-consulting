import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-[#1C478A] mb-8">Explore Bimaah</h2>
            <p className="text-center text-[#718A9D] mb-8">
              Quick links to the areas most visitors look for — concise summaries with direct links.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="p-6 bg-[#F4F7F8] rounded-lg shadow">
                <h3 className="text-xl font-semibold text-[#1C478A]">About Us</h3>
                <p className="text-[#718A9D] mt-2">Who we are, our mission, and the experience Olabisi brings to every client.</p>
                <div className="mt-4">
                  <Link href="/about" className="text-[#1A7EB9] font-semibold">Learn more →</Link>
                </div>
              </article>

              <article className="p-6 bg-white rounded-lg shadow border border-[#97C5D9]">
                <h3 className="text-xl font-semibold text-[#1C478A]">Services</h3>
                <p className="text-[#718A9D] mt-2">Immigration advice, benefits support and legal document assistance tailored to you.</p>
                <div className="mt-4">
                  <Link href="/services" className="text-[#1A7EB9] font-semibold">See services →</Link>
                </div>
              </article>

              <article className="p-6 bg-[#F4F7F8] rounded-lg shadow">
                <h3 className="text-xl font-semibold text-[#1C478A]">Testimonials</h3>
                <p className="text-[#718A9D] mt-2">Read stories from clients we've supported through complex cases.</p>
                <div className="mt-4">
                  <Link href="/testimonials" className="text-[#1A7EB9] font-semibold">Read testimonials →</Link>
                </div>
              </article>

              <article className="p-6 bg-white rounded-lg shadow border border-[#97C5D9]">
                <h3 className="text-xl font-semibold text-[#1C478A]">FAQ</h3>
                <p className="text-[#718A9D] mt-2">Common questions about our services, booking, and what to bring to appointments.</p>
                <div className="mt-4">
                  <Link href="/faq" className="text-[#1A7EB9] font-semibold">View FAQ →</Link>
                </div>
              </article>

              <article className="p-6 bg-[#F4F7F8] rounded-lg shadow">
                <h3 className="text-xl font-semibold text-[#1C478A]">Contact</h3>
                <p className="text-[#718A9D] mt-2">Book a free consultation by phone, email or our online form.</p>
                <div className="mt-4">
                  <Link href="/contact" className="text-[#1A7EB9] font-semibold">Get in touch →</Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
