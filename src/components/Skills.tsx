import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Palette } from "lucide-react";
import TiltCard from "./TiltCard";

const Skills = () => {
  const skills = [
    { icon: Code, label: "Frontend", items: ["HTML", "CSS", "JavaScript", "ReactJS", "TypeScript"] },
    { icon: Database, label: "Backend", items: ["NodeJS", "ExpressJS", "MongoDB"] },
    { icon: Palette, label: "Design", items: ["UI/UX Design", "Responsive Design", "User Research"] }
  ];

  return (
    <section id="skills" className="section-padding min-h-screen bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="p-6">
                <div className="flex flex-col items-center text-center">
                  <category.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">{category.label}</h3>
                  <ul className="space-y-2 flex flex-col items-center">
                    {category.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
