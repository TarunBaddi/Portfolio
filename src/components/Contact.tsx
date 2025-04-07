
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "./ui/use-toast";

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!formRef.current) return;

    try {
      setIsLoading(true);
      
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        'service_lwfs8ps',
        'template_5btfnhe',
        formRef.current,
        'dHIM8Wx6HcFPQEoQF'
      );

      if (result.text === 'OK') {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        
        // Reset form
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      
      <div className="container mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          Let's Connect
        </motion.h2>
        
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <motion.div
                animate={focusedInput === 'name' ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2 transition-colors">
                  Name
                </label>
                <Input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  className="glass-input w-full"
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </motion.div>

              <motion.div
                animate={focusedInput === 'email' ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="Your email"
                  className="glass-input w-full"
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </motion.div>

              <motion.div
                animate={focusedInput === 'message' ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="glass-input w-full min-h-[150px]"
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-primary/80 hover:bg-primary group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
