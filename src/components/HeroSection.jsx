import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

function StarBackground(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#3b82f6" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass mb-4 text-blue-400 font-medium text-sm"
          >
            Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-outfit">
            Hi, I'm <span className="text-gradient">Shalini Chinnaguravagari</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            B.Tech Computer Science Engineering Student | Frontend Developer | Problem Solver
          </p>
          
          <p className="text-lg text-gray-400 mb-8 font-inter">
            Building scalable and user-friendly web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 w-full sm:w-auto"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
