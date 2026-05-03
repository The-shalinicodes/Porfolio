import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Web Team Member',
    organization: 'Coding Club MBU',
    date: '2023 - Present',
    points: [
      'Mentored students in web technologies.',
      'Conducted workshops and mini-hackathons to boost coding culture.',
      'Collaborated on building chapter websites.'
    ]
  },
  {
    title: 'Active Member & Documentation Lead',
    organization: 'ACM',
    date: '2023 - Present',
    points: [
      'Organized multiple technical events and coding contests.',
      'Led the documentation team for major symposiums.',
      'Maintained consistent records and event reports.'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-outfit mb-4">My <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between glass p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
                <div className="md:w-1/3 mb-4 md:mb-0 space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                  <p className="text-blue-500 font-medium">{exp.organization}</p>
                  <p className="text-sm text-gray-400">{exp.date}</p>
                </div>
                <div className="md:w-2/3 md:pl-8 border-l border-white/10">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
