import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import TiltCard from "@/components/TiltCard";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Code, Cpu, Brain, FileDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/styles/buttons.css";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const mainCategories = [
    {
      icon: Code,
      title: "Web Development",
      desc: "Full-stack Development",
      details: [
        "HTML, CSS, JavaScript",
        "React.js & TypeScript",
        "Node.js & Express.js",
        "MongoDB & Databases"
      ]
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      desc: "AI Solutions",
      details: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Neural Networks",
        "Deep Learning"
      ]
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      desc: "ML Applications",
      details: [
        "Data Analysis",
        "Predictive Modeling",
        "Pattern Recognition",
        "Statistical Learning"
      ]
    },
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />

      <div className="relative">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="section-padding min-h-screen flex items-center justify-center relative"
        >
          <div className="container mx-auto text-center px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                BCA Student & Developer
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Specializing in Web Development, AI, and Machine Learning
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="btn-primary group"
                  onClick={() => {
                    window.open('/Updated_Resume.pdf', '_blank')
                  }}
                >
                  <FileDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  className="btn-outline group"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative mt-20"
            >
              {mainCategories.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  animate={{
                    gridColumn: expandedCard === index ? "1 / -1" : "auto",
                    zIndex: expandedCard === index ? 10 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className="relative cursor-pointer"
                >
                  <TiltCard className={`p-8 spotlight transition-all duration-500 ${expandedCard === index ? 'h-[450px]' : 'h-auto'}`}>
                    <motion.div
                      layout
                      className="flex flex-col items-center"
                    >
                      <item.icon className={`transition-all duration-500 ${expandedCard === index ? 'w-20 h-20 mb-8 text-primary' : 'w-16 h-16 mb-6'}`} />
                      <motion.h3 layout className="text-2xl font-semibold mb-3">{item.title}</motion.h3>

                      {expandedCard === index ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="mt-6 w-full text-center"
                        >
                          <h4 className="text-xl font-medium mb-6 text-primary">Expertise</h4>
                          <ul className="space-y-4 flex flex-col items-center">
                            {item.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="flex items-center text-lg"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.p layout className="text-muted-foreground text-lg">
                          {item.desc}
                        </motion.p>
                      )}
                    </motion.div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <ScrollIndicator />
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <About />
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
