import { useState } from "react";
import { Dialog } from "./ui/dialog";
import { ProjectCard } from "./project/ProjectCard";
import { ProjectDialog } from "./project/ProjectDialog";
import { projects } from "./project/projectData";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export const Projects = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  
  // Sort projects by their ID (assuming ID represents project number)
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);
  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-accent/50 mt-8 md:mt-0">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Team Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Dialog>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.images[0]}
                  />
                  <ProjectDialog 
                    project={{
                      title: project.title,
                      description: project.description,
                      images: project.images,
                      details: project.details
                    }} 
                  />
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {sortedProjects.length > 6 && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="hover:bg-accent/20"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};