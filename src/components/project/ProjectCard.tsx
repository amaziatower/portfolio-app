import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DialogTrigger } from "../ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <DialogTrigger asChild>
      <Card className="card-hover cursor-pointer">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
        </CardContent>
      </Card>
    </DialogTrigger>
  );
};