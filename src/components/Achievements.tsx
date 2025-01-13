import { motion } from "framer-motion";

export const Achievements = () => {
  const achievements = {
    academic: [
      "Dean's List Recipient (2018–2020): Recognized for exceptional academic performance during studies in Supply Chain Management at Atlanta Technical College.",
      "Member of the Student Government Association: Actively contributed to enhancing student engagement and organizing events."
    ],
    professional: [
      "Enhanced Operational Efficiency: Successfully implemented data-driven strategies that improved supply chain operations by 20%.",
      "AI Project Leadership: Led a team in developing an AI-driven logistics optimization tool, resulting in a 30% reduction in delivery times.",
      "Innovative Solutions: Developed a machine learning model that improved inventory forecasting accuracy by 15%."
    ],
    certifications: [
      {
        name: "Data Science Professional Certificate",
        issuer: "IBM",
        duration: "09/2018 - 04/2019"
      },
      {
        name: "Natural Language Processing",
        issuer: "Quickstart Inc.",
        duration: "09/2018 - 06/2019"
      },
      {
        name: "Python Project for AI and Application Development",
        issuer: "Coding Temple",
        duration: "08/2023 - 10/2024"
      }
    ]
  };

  return (
    <section className="py-16 md:py-20 bg-[#0A0F1C]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#6366F1]"
        >
          Achievements
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#131B2E] p-8 rounded-lg hover:bg-[#1A2337] transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#6366F1] mb-6">Academic Excellence</h3>
            <ul className="space-y-4">
              {achievements.academic.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <span className="mr-3 text-[#6366F1]">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#131B2E] p-8 rounded-lg hover:bg-[#1A2337] transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#6366F1] mb-6">Professional Recognition</h3>
            <ul className="space-y-4">
              {achievements.professional.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <span className="mr-3 text-[#6366F1]">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#131B2E] p-8 rounded-lg hover:bg-[#1A2337] transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#6366F1] mb-6">Certifications</h3>
            <ul className="space-y-6">
              {achievements.certifications.map((cert, index) => (
                <li key={index} className="text-gray-400">
                  <h4 className="font-semibold text-[#6366F1]">{cert.name}</h4>
                  <p className="text-sm">Issued by {cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.duration}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};