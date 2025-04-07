import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <motion.div
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
        </motion.div>
    );
};

export default ScrollIndicator; 