const certifications = [
  {
    title: "Gemini for Google Workspace Certification",
    issuer: "Google",
    year: "2025",
    link: "https://drive.google.com/file/d/13fw0NIzps-YWengx_ddZS7RTDyl5WCTJ/view?usp=sharing",
  },
  {
    title: "Base 44 Hackathon Participation",
    issuer: "Base 44",
    year: "2025",
    link: "https://drive.google.com/file/d/105aOPSZEaxrtvBskPkDLK2566hz18871/view?usp=sharing",
  },

  {
    title: "Bronze Medal – CBSE Cluster II Basketball Tournament",
    issuer: "CBSE",
    year: "2024–25",
    link: "https://drive.google.com/file/d/13fw0NIzps-YWengx_ddZS7RTDyl5WCTJ/view?usp=sharing",
  },
  {
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    issuer: "GitHub",
    year: "2025",
    link: "https://drive.google.com/file/d/1blzOaciUCXnF3xKg959qEJlBlhCL7_VG/view?usp=sharing",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    year: "2025",
    link: "https://drive.google.com/file/d/1kJ8F4QiqOOdp3p16RfCOTVBX66doXfCY/view?usp=sharing",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
        Certifications
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-[var(--glass-bg)] backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300 block"
          >
            <h3 className="text-xl font-semibold mb-2">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400">
              {cert.issuer}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {cert.year}
            </p>
            <p className="text-primary text-sm mt-4">
              View Certificate →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;