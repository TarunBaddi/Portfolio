import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/TarunBaddi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tarunbaddi/", label: "LinkedIn" },
  ];

  return (
    <footer className="section-padding relative overflow-hidden bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center text-5xl font-bold md:text-7xl"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-card hoverable flex h-12 w-12 items-center justify-center rounded-full p-3 transition-colors hover:bg-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
