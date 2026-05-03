import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Java', 'SQL', 'Data Structures', 'Algorithms']
  },
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Tools & Technologies',
    skills: ['GitHub', 'VS Code', 'Eclipse', 'MySQL']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-outfit mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl relative group hover:border-blue-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-semibold mb-6 text-white text-center relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
