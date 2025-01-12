import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

interface ProjectDialogProps {
  project: {
    title: string;
    description: string;
    images: string[];
    details: string[];
  };
}

export const ProjectDialog = ({ project }: ProjectDialogProps) => {
  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
      </DialogHeader>
      <div className="text-muted-foreground mb-6">
        {project.description}
      </div>
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {project.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-lg object-cover aspect-video"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-6 space-y-2">
        {project.details.map((detail, index) => (
          <p key={index} className="text-muted-foreground">
            {detail}
          </p>
        ))}
      </div>
    </DialogContent>
  );
};