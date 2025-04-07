
import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { Rocket } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-padding min-h-screen">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Projects
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TiltCard className="p-8 text-center">
              <Rocket className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-muted-foreground">
                I'm currently working on exciting projects that showcase my skills in web development,
                AI, and machine learning. Check back soon to see my latest work!
              </p>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
