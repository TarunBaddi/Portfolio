import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const About = () => {
  return (
    <section id="about" className="section-padding min-h-screen">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TiltCard className="p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none text-center">
                <p className="text-xl leading-relaxed">
                  I'm a passionate BCA student and developer, driven by the endless possibilities
                  of technology. My journey in tech has led me to explore various domains,
                  from web development to artificial intelligence, always striving to create
                  innovative solutions that make a difference.
                </p>
                <p className="text-xl leading-relaxed mt-4">
                  With a strong foundation in computer science and a keen interest in emerging
                  technologies, I'm constantly learning and adapting to new challenges.
                  I believe in writing clean, maintainable code and creating intuitive user experiences.
                </p>
                <p className="text-xl leading-relaxed mt-4">
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
