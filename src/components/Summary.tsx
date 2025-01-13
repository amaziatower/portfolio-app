import { motion } from "framer-motion";

export const Summary = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0A0F1C]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#6366F1]"
        >
          Summary
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#131B2E] p-8 rounded-lg hover:bg-[#1A2337] transition-colors duration-300"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Results-oriented AI Engineer with over 5 years of experience in designing, developing, and implementing machine learning models and AI automation solutions. Proven track record in optimizing model performance and accuracy, collaborating with cross-functional teams, and leveraging cutting-edge AI technologies to address complex challenges. Seeking to apply my expertise as a Senior AI Developer at EMPLOYER, where I can contribute to innovative solutions that enhance operational efficiency and drive business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};