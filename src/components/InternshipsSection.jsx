import { motion } from 'framer-motion';

const internships = [
  {
    role: 'React UI Developer Intern',
    company: 'DevRabbit IT Solutions',
    points: ['React UI development and feature integration.', 'Debugging and optimization for performance.', 'Worked in an Agile environment.']
  },
  {
    role: 'Trainee',
    company: 'IBM Skills Build',
    points: ['Design thinking and problem scoping.', 'Secure development practices.', 'Built foundation in enterprise tech stacks.']
  }
];

export default function InternshipsSection() {
  return (
    <section id="internships" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-outfit mb-4"><span className="text-gradient">Internships</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-2">{internship.role}</h3>
              <p className="text-blue-400 font-medium mb-6">{internship.company}</p>
              <ul className="space-y-3">
                {internship.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
