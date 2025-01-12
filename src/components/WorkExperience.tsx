import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const WorkExperience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      role: "Machine Learning Engineer",
      company: "Tower Transition Logistics International, Inc.",
      duration: "August 2018 - December 2024",
      responsibilities: [
        "Designed and implemented machine learning models to optimize logistics operations",
        "Collaborated with cross-functional teams to integrate AI solutions",
        "Maintained and updated AI technologies for continuous improvement"
      ]
    },
    {
      role: "CEO",
      company: "Rollis Business Group LLC",
      duration: "January 2012 - December 2016",
      responsibilities: [
        "Led company development and innovative business strategies",
        "Enhanced brand visibility and market presence",
        "Managed client relationships and business development"
      ]
    },
    {
      role: "Machine Learning Remote Intern",
      company: "Innotech IT",
      duration: "January 2023 - November 2024",
      responsibilities: [
        "Developed predictive models and engaged in data preprocessing",
        "Deployed machine learning models on AWS platform",
        "Participated in ollabot development with advanced AI capabilities"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Freelance Projects",
      duration: "2018 - Present",
      responsibilities: [
        "Developed and maintained full-stack applications using modern technologies",
        "Implemented AI integrations in web applications",
        "Created responsive and user-friendly interfaces"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0A0F1C]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#6366F1]"
        >
          Work Experience
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#131B2E] p-8 rounded-lg hover:bg-[#1A2337] transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#6366F1] mb-3">
                {experience.role}
              </h3>
              <p className="text-gray-400 mb-2">{experience.company}</p>
              <p className="text-sm text-gray-500 mb-4">{experience.duration}</p>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 text-[#6366F1] text-lg">•</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};