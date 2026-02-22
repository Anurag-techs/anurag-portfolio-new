import { useEffect, useRef } from "react";
import { Globe, Code2, Cpu, Server } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    subtitle: "Full-Stack MERN",
    points: [
      "Full-stack MERN applications",
      "Responsive modern interfaces",
      "REST API integration",
      "Scalable backend architecture",
    ],
    color: "hsl(220 90% 60%)",
  },
  {
    icon: <Code2 size={28} />,
    title: "Python Development",
    subtitle: "Backend & Automation",
    points: [
      "Backend systems with Python",
      "Automation scripts & tools",
      "AI/ML experimentation",
      "Data handling & APIs",
    ],
    color: "hsl(230 95% 65%)",
  },
  {
    icon: <Cpu size={28} />,
    title: "C++ Programming",
    subtitle: "DSA & Performance",
    points: [
      "Strong DSA foundation",
      "Problem-solving & algorithms",
      "Optimized performance logic",
      "Competitive programming",
    ],
    color: "hsl(265 80% 55%)",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Engineering",
    subtitle: "APIs & Databases",
    points: [
      "Node.js backend systems",
      "Database design (MongoDB)",
      "Authentication & security",
      "Deployment & hosting",
    ],
    color: "hsl(200 85% 60%)",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 section-fade">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">03 / Services</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text">What I Offer</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="section-fade glass-card rounded-2xl p-6 border border-white/8 group hover:border-primary/30 hover:shadow-glow-mixed transition-all duration-500 cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${service.color}1a`,
                  border: `1px solid ${service.color}30`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              <h3 className="font-orbitron text-base font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-xs text-muted-foreground mb-5">{service.subtitle}</p>

              <ul className="space-y-2">
                {service.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
