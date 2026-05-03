import { motion } from 'framer-motion';
import { Award, Star, Code, BookOpen } from 'lucide-react';

const achievements = [
  { title: 'NPTEL Top 5%', desc: 'Ranked in the top 5% in NPTEL certifications.', icon: <Award size={24} /> },
  { title: 'Academic Excellence', desc: 'Maintained a stellar 10 SGPA in academics.', icon: <Star size={24} /> },
  { title: 'Coding Challenge', desc: 'Secured Rank 92 out of 1121 participants.', icon: <Code size={24} /> },
  { title: 'Hackathons', desc: 'Participated and won multiple web development hackathons.', icon: <BookOpen size={24} /> }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-outfit mb-4"><span className="text-gradient">Achievements</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:border-blue-500/30 transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
