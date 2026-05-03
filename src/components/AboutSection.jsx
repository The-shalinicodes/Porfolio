import { motion } from 'framer-motion';

const stats = [
  { label: 'CGPA', value: '9.47' },
  { label: 'Students Mentored', value: '100+' },
  { label: 'Events Organized', value: '25+' },
  { label: 'Hackathons Participated', value: 'Multiple' }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-outfit mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a passionate Computer Science Engineering student with a strong foundation in Java, Data Structures and Algorithms, and Web Development. Dedicated to giving back to the community, I have actively mentored 100+ students and consistently contributed as an active member in the Coding Club and ACM student chapter.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center transform transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl font-bold text-white mb-2 relative z-10">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
