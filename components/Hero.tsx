import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1A7EB9] via-[#1B60A3] to-[#1C478A] text-white py-20 px-4 overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Bimaah International Ltd
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Empowering lives through clarity, compassion, and advocacy.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            At Bimaah International Ltd, we understand that navigating immigration, benefits, and legal systems can be overwhelming—especially when you're facing personal challenges or systemic barriers. That's why we're here.
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Founded by <span className="font-semibold">Olabisi Adebayo</span>, a qualified immigration adviser and passionate advocate for vulnerable communities, our mission is simple: to make expert guidance accessible to everyone. Whether you're applying for a visa, seeking benefits support, or need help drafting legal documents, we offer clear, professional advice rooted in empathy and respect.
          </p>
          <div className="mb-12">
            <p className="text-2xl font-semibold italic">
              Your Rights. Your Voice. Our Support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-[#1C478A] px-8 py-3 rounded-md font-semibold hover:bg-[#F4F7F8] transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1C478A] transition"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
