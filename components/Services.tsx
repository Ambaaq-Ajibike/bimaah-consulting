import { Globe, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Immigration Advice",
      items: [
        "Visa applications and appeals",
        "Family reunification support",
        "EU Settlement Scheme guidance"
      ]
    },
    {
      icon: Briefcase,
      title: "Benefits and Welfare Support",
      items: [
        "Universal Credit, PIP, and ESA guidance",
        "Advocacy for fair treatment",
        "Gateway assessments and appeals"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1C478A]">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-[#F4F7F8] to-white rounded-lg p-8 shadow-lg hover:shadow-xl transition border border-[#97C5D9]">
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-[#1A7EB9]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A7EB9]">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-[#04A3E7] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1C478A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-[#718A9D] mb-6">
            All services are provided with professionalism, confidentiality, and care.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#1A7EB9] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1B60A3] transition"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
