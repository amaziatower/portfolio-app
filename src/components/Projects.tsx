import { Dialog } from "./ui/dialog";
import { ProjectCard } from "./project/ProjectCard";
import { ProjectDialog } from "./project/ProjectDialog";
import { projects } from "./project/projectData";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  // Sort projects by their ID (assuming ID represents project number)
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <section className="py-16 md:py-20 bg-accent/50 mt-8 md:mt-0">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedProjects.map((project) => (
            <Dialog key={project.id}>
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
          ))}
        </div>
      </div>
    </section>
  );
};