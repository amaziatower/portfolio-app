import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const WorkExperience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      role: "Machine Learning Engineer",
      company: "Tower Transition Logistics International, Inc.",
      duration: "August 2018 - December 2024",
      overview: "Designed and implemented machine learning models aimed at optimizing logistics operations, resulting in substantial cost reductions and enhanced efficiency across the organization.",
      responsibilities: [
        "Model Development: Developed and deployed advanced machine learning models to analyze logistics data, improving operational decision-making and resource allocation.",
        "System Integration: Collaborated with cross-functional teams to seamlessly integrate AI solutions into existing logistics systems.",
        "Data Analysis: Conducted thorough data analysis to identify trends and insights.",
        "Technology Research: Stayed abreast of emerging AI technologies and methodologies.",
        "Performance Monitoring: Established metrics and monitoring systems to evaluate model performance.",
        "Stakeholder Collaboration: Worked closely with stakeholders to gather requirements."
      ],
      outcomes: [
        "Achieved a 25% reduction in logistics costs through optimized routing and inventory management models.",
        "Improved operational efficiency by 30% by automating key logistics processes.",
        "Enhanced model accuracy by 20% through iterative testing and refinement.",
        "40% improvement in data processing speed.",
        "Contributed to a 50% increase in customer satisfaction."
      ]
    },
    {
      role: "Senior AI Engineer",
      company: "Kriss.ai",
      duration: "October 2017 - April 2018",
      overview: "Developed an advanced Retrieval Augmented Generation (RAG) system to revolutionize document processing, information retrieval, and secure data handling.",
      responsibilities: [
        "System Architecture: Led the design and implementation of a sophisticated RAG system.",
        "Security Implementation: Spearheaded the development of advanced security features.",
        "Database Optimization: Implemented ChromaDB for efficient storage and retrieval.",
        "API Development: Designed and developed a RESTful API for seamless system interaction.",
        "Natural Language Processing: Utilized cutting-edge NLP techniques.",
        "Cross-Functional Collaboration: Worked closely with data scientists and security experts."
      ],
      outcomes: [
        "40% improvement in document processing speed and accuracy.",
        "30% increase in query relevance across various document types.",
        "100% compliance rate with data protection regulations.",
        "Reduced development time for new document types by 50%."
      ]
    },
    {
      role: "CEO",
      company: "Rollis Business Group LLC",
      duration: "January 2012 - December 2016",
      overview: "Spearheaded the development of innovative business strategies aimed at enhancing brand visibility and market engagement.",
      responsibilities: [
        "Strategic Leadership: Directed business strategies formulation and execution.",
        "Market Analysis: Conducted comprehensive market research.",
        "Client Engagement: Cultivated strong relationships with key clients.",
        "Team Development: Built and led a high-performing team.",
        "Brand Development: Spearheaded marketing initiatives.",
        "Financial Oversight: Managed company's financial performance."
      ],
      outcomes: [
        "35% increase in revenue through strategic business initiatives.",
        "Successfully launched three new service lines.",
        "Improved client retention rates by 40%.",
        "60% growth in social media presence and engagement."
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
        <div className="space-y-12">
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
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Project Overview</h4>
                <p className="text-gray-400">{experience.overview}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start text-gray-400">
                      <span className="mr-3 text-[#6366F1]">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Outcomes</h4>
                <ul className="space-y-2">
                  {experience.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start text-gray-400">
                      <span className="mr-3 text-[#6366F1]">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};